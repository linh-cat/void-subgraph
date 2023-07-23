import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  ClosePosition,
  DecreasePosition,
  ExchangeSet,
  FeeUsdCollected,
  FundingDebtPaid,
  FundingPayout,
  IncreasePosition,
  MarketCreated,
  MarketListed,
  UpdateIndex,
  UpdatePosition
} from "../generated/TradingEngine/TradingEngine"

export function createClosePositionEvent(
  key: Bytes,
  size: BigInt,
  collateralValue: BigInt,
  exitFundingIndex: BigInt,
  exitPayoutIndex: BigInt
): ClosePosition {
  let closePositionEvent = changetype<ClosePosition>(newMockEvent())

  closePositionEvent.parameters = new Array()

  closePositionEvent.parameters.push(
    new ethereum.EventParam("key", ethereum.Value.fromFixedBytes(key))
  )
  closePositionEvent.parameters.push(
    new ethereum.EventParam("size", ethereum.Value.fromUnsignedBigInt(size))
  )
  closePositionEvent.parameters.push(
    new ethereum.EventParam(
      "collateralValue",
      ethereum.Value.fromUnsignedBigInt(collateralValue)
    )
  )
  closePositionEvent.parameters.push(
    new ethereum.EventParam(
      "exitFundingIndex",
      ethereum.Value.fromUnsignedBigInt(exitFundingIndex)
    )
  )
  closePositionEvent.parameters.push(
    new ethereum.EventParam(
      "exitPayoutIndex",
      ethereum.Value.fromUnsignedBigInt(exitPayoutIndex)
    )
  )

  return closePositionEvent
}

export function createDecreasePositionEvent(
  key: Bytes,
  size: BigInt,
  sizeDelta: BigInt,
  collateralReduced: BigInt,
  fee: BigInt,
  reserveDelta: BigInt
): DecreasePosition {
  let decreasePositionEvent = changetype<DecreasePosition>(newMockEvent())

  decreasePositionEvent.parameters = new Array()

  decreasePositionEvent.parameters.push(
    new ethereum.EventParam("key", ethereum.Value.fromFixedBytes(key))
  )
  decreasePositionEvent.parameters.push(
    new ethereum.EventParam("size", ethereum.Value.fromUnsignedBigInt(size))
  )
  decreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "sizeDelta",
      ethereum.Value.fromUnsignedBigInt(sizeDelta)
    )
  )
  decreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "collateralReduced",
      ethereum.Value.fromUnsignedBigInt(collateralReduced)
    )
  )
  decreasePositionEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )
  decreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "reserveDelta",
      ethereum.Value.fromUnsignedBigInt(reserveDelta)
    )
  )

  return decreasePositionEvent
}

export function createExchangeSetEvent(exchange: Address): ExchangeSet {
  let exchangeSetEvent = changetype<ExchangeSet>(newMockEvent())

  exchangeSetEvent.parameters = new Array()

  exchangeSetEvent.parameters.push(
    new ethereum.EventParam("exchange", ethereum.Value.fromAddress(exchange))
  )

  return exchangeSetEvent
}

export function createFeeUsdCollectedEvent(
  marketId: Bytes,
  value: BigInt
): FeeUsdCollected {
  let feeUsdCollectedEvent = changetype<FeeUsdCollected>(newMockEvent())

  feeUsdCollectedEvent.parameters = new Array()

  feeUsdCollectedEvent.parameters.push(
    new ethereum.EventParam("marketId", ethereum.Value.fromFixedBytes(marketId))
  )
  feeUsdCollectedEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return feeUsdCollectedEvent
}

export function createFundingDebtPaidEvent(
  marketId: Bytes,
  account: Address,
  value: BigInt
): FundingDebtPaid {
  let fundingDebtPaidEvent = changetype<FundingDebtPaid>(newMockEvent())

  fundingDebtPaidEvent.parameters = new Array()

  fundingDebtPaidEvent.parameters.push(
    new ethereum.EventParam("marketId", ethereum.Value.fromFixedBytes(marketId))
  )
  fundingDebtPaidEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  fundingDebtPaidEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return fundingDebtPaidEvent
}

export function createFundingPayoutEvent(
  marketId: Bytes,
  account: Address,
  value: BigInt
): FundingPayout {
  let fundingPayoutEvent = changetype<FundingPayout>(newMockEvent())

  fundingPayoutEvent.parameters = new Array()

  fundingPayoutEvent.parameters.push(
    new ethereum.EventParam("marketId", ethereum.Value.fromFixedBytes(marketId))
  )
  fundingPayoutEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  fundingPayoutEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return fundingPayoutEvent
}

export function createIncreasePositionEvent(
  key: Bytes,
  initialCollateralAmount: BigInt,
  initialCollateralValue: BigInt,
  fee: BigInt,
  reserveDelta: BigInt
): IncreasePosition {
  let increasePositionEvent = changetype<IncreasePosition>(newMockEvent())

  increasePositionEvent.parameters = new Array()

  increasePositionEvent.parameters.push(
    new ethereum.EventParam("key", ethereum.Value.fromFixedBytes(key))
  )
  increasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "initialCollateralAmount",
      ethereum.Value.fromUnsignedBigInt(initialCollateralAmount)
    )
  )
  increasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "initialCollateralValue",
      ethereum.Value.fromUnsignedBigInt(initialCollateralValue)
    )
  )
  increasePositionEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )
  increasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "reserveDelta",
      ethereum.Value.fromUnsignedBigInt(reserveDelta)
    )
  )

  return increasePositionEvent
}

export function createMarketCreatedEvent(
  marketType: i32,
  marketId: Bytes,
  owner: Address,
  indexToken: Address,
  quoteToken: Address,
  isGoverned: boolean
): MarketCreated {
  let marketCreatedEvent = changetype<MarketCreated>(newMockEvent())

  marketCreatedEvent.parameters = new Array()

  marketCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "marketType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(marketType))
    )
  )
  marketCreatedEvent.parameters.push(
    new ethereum.EventParam("marketId", ethereum.Value.fromFixedBytes(marketId))
  )
  marketCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  marketCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "indexToken",
      ethereum.Value.fromAddress(indexToken)
    )
  )
  marketCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "quoteToken",
      ethereum.Value.fromAddress(quoteToken)
    )
  )
  marketCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "isGoverned",
      ethereum.Value.fromBoolean(isGoverned)
    )
  )

  return marketCreatedEvent
}

export function createMarketListedEvent(
  marketId: Bytes,
  isListed: boolean
): MarketListed {
  let marketListedEvent = changetype<MarketListed>(newMockEvent())

  marketListedEvent.parameters = new Array()

  marketListedEvent.parameters.push(
    new ethereum.EventParam("marketId", ethereum.Value.fromFixedBytes(marketId))
  )
  marketListedEvent.parameters.push(
    new ethereum.EventParam("isListed", ethereum.Value.fromBoolean(isListed))
  )

  return marketListedEvent
}

export function createUpdateIndexEvent(
  marketId: Bytes,
  longFunding: BigInt,
  shortFunding: BigInt,
  longPayout: BigInt,
  shortPayout: BigInt
): UpdateIndex {
  let updateIndexEvent = changetype<UpdateIndex>(newMockEvent())

  updateIndexEvent.parameters = new Array()

  updateIndexEvent.parameters.push(
    new ethereum.EventParam("marketId", ethereum.Value.fromFixedBytes(marketId))
  )
  updateIndexEvent.parameters.push(
    new ethereum.EventParam(
      "longFunding",
      ethereum.Value.fromUnsignedBigInt(longFunding)
    )
  )
  updateIndexEvent.parameters.push(
    new ethereum.EventParam(
      "shortFunding",
      ethereum.Value.fromUnsignedBigInt(shortFunding)
    )
  )
  updateIndexEvent.parameters.push(
    new ethereum.EventParam(
      "longPayout",
      ethereum.Value.fromUnsignedBigInt(longPayout)
    )
  )
  updateIndexEvent.parameters.push(
    new ethereum.EventParam(
      "shortPayout",
      ethereum.Value.fromUnsignedBigInt(shortPayout)
    )
  )

  return updateIndexEvent
}

export function createUpdatePositionEvent(
  marketId: Bytes,
  account: Address,
  key: Bytes,
  collateralToken: Address,
  size: BigInt,
  collateralValue: BigInt,
  entryPrice: BigInt,
  entryFundingIndex: BigInt,
  entryPayoutIndex: BigInt
): UpdatePosition {
  let updatePositionEvent = changetype<UpdatePosition>(newMockEvent())

  updatePositionEvent.parameters = new Array()

  updatePositionEvent.parameters.push(
    new ethereum.EventParam("marketId", ethereum.Value.fromFixedBytes(marketId))
  )
  updatePositionEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  updatePositionEvent.parameters.push(
    new ethereum.EventParam("key", ethereum.Value.fromFixedBytes(key))
  )
  updatePositionEvent.parameters.push(
    new ethereum.EventParam(
      "collateralToken",
      ethereum.Value.fromAddress(collateralToken)
    )
  )
  updatePositionEvent.parameters.push(
    new ethereum.EventParam("size", ethereum.Value.fromUnsignedBigInt(size))
  )
  updatePositionEvent.parameters.push(
    new ethereum.EventParam(
      "collateralValue",
      ethereum.Value.fromUnsignedBigInt(collateralValue)
    )
  )
  updatePositionEvent.parameters.push(
    new ethereum.EventParam(
      "entryPrice",
      ethereum.Value.fromUnsignedBigInt(entryPrice)
    )
  )
  updatePositionEvent.parameters.push(
    new ethereum.EventParam(
      "entryFundingIndex",
      ethereum.Value.fromUnsignedBigInt(entryFundingIndex)
    )
  )
  updatePositionEvent.parameters.push(
    new ethereum.EventParam(
      "entryPayoutIndex",
      ethereum.Value.fromUnsignedBigInt(entryPayoutIndex)
    )
  )

  return updatePositionEvent
}
