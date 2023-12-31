import { BigInt, ethereum } from "@graphprotocol/graph-ts";
import {
  ClosePosition as ClosePositionEvent,
  DecreasePosition as DecreasePositionEvent,
  ExchangeSet as ExchangeSetEvent,
  // FeeUsdCollected as FeeUsdCollectedEvent,
  FundingDebtPaid as FundingDebtPaidEvent,
  FundingPayout as FundingPayoutEvent,
  IncreasePosition as IncreasePositionEvent,
  MarketCreated as MarketCreatedEvent,
  UpdatePosition as UpdatePositionEvent,
  UpdateIndex as UpdateIndexEvent,
  FeeAndFundings as FeeAndFundingEvent,
  TradingEngine,
  SetMarketListed as SetMarketListedEvent,
  TradingEngine__prevFundingStatesResult,
  TradingEngine__marketParamsResult,
  TradingEngine__marketAddressesResult,
} from "../generated/TradingEngine/TradingEngine";

import { FundingRateModel } from "../generated/TradingEngine/FundingRateModel";

import {
  ClosePosition,
  ExchangeSet,
  FundingDebtPaid,
  FundingPayout,
  Position,
  Market,
  History,
  FundingHistory,
  FeeAndFunding,
} from "../generated/schema";

export function handleClosePosition(event: ClosePositionEvent): void {
  let entity = new ClosePosition(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.key = event.params.key;
  entity.size = event.params.size;
  entity.collateralValue = event.params.collateralValue;
  entity.exitFundingIndex = event.params.exitFundingIndex;
  entity.exitPayoutIndex = event.params.exitPayoutIndex;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  let position = Position.load(event.params.key);
  if (position) {
    position.closed = true;
    position.createdAt = BigInt.zero();
    position.updatedAt = event.block.timestamp;
    position.save();
  }

  entity.save();
}

export function handleDecreasePosition(event: DecreasePositionEvent): void {
  saveHistoryOnDecrease(event);

  let position = Position.load(event.params.key);
  if (!position) {
    return;
  }

  let market = Market.load(event.params.marketId);

  if (market) {
    market.volume = market.volume.plus(event.params.params.sizeDelta);

    if (position.isLong) {
      market.longOpenInterest = market.longOpenInterest.minus(
        event.params.params.sizeDelta
      );
    } else {
      market.shortOpenInterest = market.shortOpenInterest.minus(
        event.params.params.sizeDelta
      );
    }

    market.save();
  }
}

export function handleExchangeSet(event: ExchangeSetEvent): void {
  let entity = new ExchangeSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.exchange = event.params.exchange;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

// export function handleFeeAndFundings(event: FeeUsdCollectedEvent): void {
//   let entity = new FeeUsdCollected(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   );
//   entity.marketId = event.params.marketId;
//   entity.value = event.params.value;

//   entity.blockNumber = event.block.number;
//   entity.blockTimestamp = event.block.timestamp;
//   entity.transactionHash = event.transaction.hash;

//   entity.save();
// }

export function handleFundingDebtPaid(event: FundingDebtPaidEvent): void {
  let entity = new FundingDebtPaid(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.marketId = event.params.marketId;
  entity.account = event.params.account;
  entity.value = event.params.value;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleFundingPayout(event: FundingPayoutEvent): void {
  let entity = new FundingPayout(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.marketId = event.params.marketId;
  entity.account = event.params.account;
  entity.value = event.params.value;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

function saveHistoryOnIncrease(event: IncreasePositionEvent): void {
  let history = new History(
    `${event.params.key.toHex()}-${event.block.timestamp}`
  );

  history.account = event.params.params.account;
  history.market = event.params.params.marketId;
  // history.status
  history.isLong = event.params.params.isLong;
  history.collateralToken = event.params.params.collateralToken;
  history.collateralAmount = event.params.params.initialCollateralAmount;
  history.collateralValue = event.params.initialCollateralValue;
  history.executedPrice = event.params.result.executedPrice;
  history.status = "OPEN";
  history.feeUsd = event.params.feeUsd;
  history.fundingDebt = event.params.result.fundingDebt;
  history.fundingPayout = event.params.result.fundingPayout;
  history.txHash = event.transaction.hash;
  history.sizeDelta = event.params.params.sizeDelta;
  history.createdAt = event.block.timestamp;
  history.save();
}

function saveHistoryOnDecrease(event: DecreasePositionEvent): void {
  let history = new History(
    `${event.params.key.toHex()}-${event.block.timestamp}`
  );

  history.account = event.params.params.account;
  history.market = event.params.params.marketId;
  // history.status
  history.isLong = event.params.params.isLong;
  history.collateralToken = event.params.params.collateralToken;
  history.collateralAmount = event.params.result.collateralAmountReduced;
  history.collateralValue = event.params.result.collateralReduced;
  history.executedPrice = event.params.result.executedPrice;
  history.status = "CLOSED";
  history.feeUsd = event.params.result.totalFee;
  history.fundingDebt = event.params.result.fundingDebt;
  history.fundingPayout = event.params.result.fundingPayout;
  history.txHash = event.transaction.hash;
  history.sizeDelta = event.params.params.sizeDelta;
  history.collateralReduced = event.params.result.collateralReduced;
  history.createdAt = event.block.timestamp;

  let payoutValue: BigInt = event.params.result.payoutValue;

  let pnl: BigInt = event.params.result.realizedPnl
    .minus(event.params.result.totalFee)
    .plus(event.params.result.fundingPayout)
    .minus(event.params.result.fundingDebt);

  // payoutValue == 0 could be a loss
  if (payoutValue == BigInt.zero()) {
    if (pnl < BigInt.fromI32(0)) {
      // loss pnl is capped by collateralReduced
      history.pnl =
        pnl.abs() > event.params.result.collateralReduced
          ? BigInt.zero().minus(event.params.result.collateralReduced) // reverse sign
          : pnl;
    } else {
      history.pnl = pnl;
    }
  } else {
    history.pnl = payoutValue.minus(event.params.result.collateralReduced);
  }

  history.save();
}

export function handleIncreasePosition(event: IncreasePositionEvent): void {
  let position = Position.load(event.params.key);
  if (!position) {
    position = new Position(event.params.key);
    position.createdAt = BigInt.zero();
  }

  if (position.createdAt == BigInt.zero()) {
    position.createdAt = event.block.timestamp;
  }

  position.isLong = event.params.params.isLong;
  position.market = event.params.marketId;
  position.account = event.params.account;
  position.collateralToken = event.params.params.collateralToken;
  position.key = event.params.key;
  position.closed = false;
  position.save();

  saveHistoryOnIncrease(event);

  let market = Market.load(event.params.marketId);

  if (market) {
    market.volume = market.volume.plus(event.params.params.sizeDelta);

    if (position.isLong) {
      market.longOpenInterest = market.longOpenInterest.plus(
        event.params.params.sizeDelta
      );
    } else {
      market.shortOpenInterest = market.shortOpenInterest.plus(
        event.params.params.sizeDelta
      );
    }

    market.save();
  }
}

export function handleMarketCreated(event: MarketCreatedEvent): void {
  let entity = Market.load(event.params.marketId);
  let tradingEngineContract = TradingEngine.bind(event.address);

  let marketParams = getOrNull<TradingEngine__marketParamsResult>(
    tradingEngineContract.try_marketParams(event.params.marketId)
  );

  let marketAddresses = getOrNull<TradingEngine__marketAddressesResult>(
    tradingEngineContract.try_marketAddresses(event.params.marketId)
  );

  if (!marketParams || !marketAddresses) {
    throw new Error("marketParams is null");
  }

  let fundingRateModel = FundingRateModel.bind(
    marketAddresses.getFundingRateModel()
  );

  entity = new Market(event.params.marketId);
  entity.marketType = event.params.marketType;
  entity.marketId = event.params.marketId;
  entity.owner = event.params.owner;
  entity.indexToken = event.params.indexToken;
  entity.quoteToken = event.params.quoteToken;
  entity.isGoverned = event.params.isGoverned;
  entity.transactionHash = event.transaction.hash;
  entity.category = event.params.category;
  entity.maxLeverage = event.params.maxLeverage;
  entity.name = event.params.name.toString();
  entity.delisted = false;

  entity.maintenanceMarginBps = marketParams.getMaintenanceMarginBps();
  entity.liquidationFeeRate = marketParams.getLiquidationFee();
  entity.openFeeRate = marketParams.getOpenFee();
  entity.closeFeeRate = marketParams.getCloseFee();
  entity.priceFeedType = marketParams.getPriceFeedType();
  entity.priceFeed = marketAddresses.getPriceFeed();
  entity.fundingRateModel = marketAddresses.getFundingRateModel();

  entity.volume = BigInt.fromI32(0);
  entity.longOpenInterest = BigInt.fromI32(0);
  entity.shortOpenInterest = BigInt.fromI32(0);
  entity.fundingRatePrecision = fundingRateModel.getFundingRatePrecision();

  entity.save();
}

export function handleUpdatePosition(event: UpdatePositionEvent): void {
  let position = Position.load(event.params.key);
  if (position == null) {
    return;
  }

  position.updatedAt = event.block.timestamp;
  position.size = event.params.size;
  position.collateralValue = event.params.collateralValue;
  position.entryPrice = event.params.entryPrice;
  position.entryFundingIndex = event.params.entryFundingIndex;
  position.entryPayoutIndex = event.params.entryPayoutIndex;
  position.save();
}

export function getOrNull<T>(result: ethereum.CallResult<T>): T | null {
  return result.reverted ? null : result.value;
}

export function handleUpdateIndex(event: UpdateIndexEvent): void {
  let tradingEngine = TradingEngine.bind(event.address);
  let state = getOrNull<TradingEngine__prevFundingStatesResult>(
    tradingEngine.try_prevFundingStates(event.params.marketId)
  );

  if (!state) {
    throw new Error("state is null");
  }

  let entity = new FundingHistory(
    `${event.params.marketId.toHex()}-${event.block.timestamp}`
  );

  entity.market = event.params.marketId;
  entity.longFundingIndex = event.params.longFunding;
  entity.shortFundingIndex = event.params.shortFunding;
  entity.longPayoutIndex = event.params.longPayout;
  entity.shortPayoutIndex = event.params.shortPayout;
  entity.nInterval = event.params.nInterval;

  entity.timestamp = state.getTimestamp();
  entity.fundingRate = state.getFundingRate();
  entity.longOpenInterest = state.getLongOpenInterest();
  entity.shortOpenInterest = state.getShortOpenInterest();

  let market = Market.load(event.params.marketId);

  if (market) {
    market.longFundingIndex = event.params.longFunding;
    market.shortFundingIndex = event.params.shortFunding;
    market.longPayoutIndex = event.params.longPayout;
    market.shortPayoutIndex = event.params.shortPayout;
    market.save();
  }

  entity.save();
}

export function handleFeeAndFundings(event: FeeAndFundingEvent): void {
  let entity = new FeeAndFunding(
    `${event.params.marketId.toHex()}-${event.transaction.hash.toHex()}`
  );

  entity.marketId = event.params.marketId;
  entity.position = event.params.key;
  entity.fee = event.params.fee;
  entity.fundingPayout = event.params.fundingPayout;
  entity.fundingDebt = event.params.fundingDebt;
  entity.timestamp = event.block.timestamp;
  entity.save();
}

export function handleSetMarketListed(event: SetMarketListedEvent): void {
  let market = Market.load(event.params.marketId);

  if (market) {
    if (!event.params.isListed) {
      market.delisted = true;
    } else {
      market.delisted = false;
    }
    market.save();
  }
}
