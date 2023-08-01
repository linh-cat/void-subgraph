import { BigInt } from "@graphprotocol/graph-ts";
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
} from "../generated/TradingEngine/TradingEngine";
import {
  ClosePosition,
  DecreasePosition,
  ExchangeSet,
  FundingDebtPaid,
  FundingPayout,
  IncreasePosition,
  Position,
  Market,
  History,
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

  entity.save();
}

export function handleDecreasePosition(event: DecreasePositionEvent): void {
  saveHistoryOnDecrease(event);
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
    history.pnl =
      payoutValue < event.params.result.collateralReduced
        ? BigInt.zero()
        : payoutValue.minus(event.params.result.collateralReduced);
  }

  history.save();
}

export function handleIncreasePosition(event: IncreasePositionEvent): void {
  let position = Position.load(event.params.key);
  if (!position) {
    position = new Position(event.params.key);
    position.isLong = event.params.params.isLong;
    position.market = event.params.marketId;
    position.account = event.params.account;
    position.collateralToken = event.params.params.collateralToken;
    position.key = event.params.key;
    position.createdAt = event.block.timestamp;
    position.save();
  }

  saveHistoryOnIncrease(event);

  let market = Market.load(event.params.marketId);

  if (market) {
    market.volume = market.volume.plus(event.params.params.sizeDelta);
    market.save();
  }
}

export function handleMarketCreated(event: MarketCreatedEvent): void {
  let entity = Market.load(event.params.marketId);
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
  entity.volume = BigInt.fromI32(0);

  entity.save();
}

export function handleUpdatePosition(event: UpdatePositionEvent): void {
  let position = Position.load(event.params.key);
  if (!position) {
    return;
  }

  position.size = event.params.size;
  position.collateralValue = event.params.collateralValue;
  position.entryPrice = event.params.entryPrice;
  position.entryFundingIndex = event.params.entryFundingIndex;
  position.entryPayoutIndex = event.params.entryPayoutIndex;
  position.save();
}
