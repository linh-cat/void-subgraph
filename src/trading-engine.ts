import {
  ClosePosition as ClosePositionEvent,
  DecreasePosition as DecreasePositionEvent,
  ExchangeSet as ExchangeSetEvent,
  FeeUsdCollected as FeeUsdCollectedEvent,
  FundingDebtPaid as FundingDebtPaidEvent,
  FundingPayout as FundingPayoutEvent,
  IncreasePosition as IncreasePositionEvent,
  MarketCreated as MarketCreatedEvent,
  MarketListed as MarketListedEvent,
  UpdateIndex as UpdateIndexEvent,
  UpdatePosition as UpdatePositionEvent
} from "../generated/TradingEngine/TradingEngine"
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
} from "../generated/schema"

export function handleClosePosition(event: ClosePositionEvent): void {
  let entity = new ClosePosition(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.key = event.params.key
  entity.size = event.params.size
  entity.collateralValue = event.params.collateralValue
  entity.exitFundingIndex = event.params.exitFundingIndex
  entity.exitPayoutIndex = event.params.exitPayoutIndex

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDecreasePosition(event: DecreasePositionEvent): void {
  let entity = new DecreasePosition(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.key = event.params.key
  entity.size = event.params.size
  entity.sizeDelta = event.params.sizeDelta
  entity.collateralReduced = event.params.collateralReduced
  entity.fee = event.params.fee
  entity.reserveDelta = event.params.reserveDelta

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleExchangeSet(event: ExchangeSetEvent): void {
  let entity = new ExchangeSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.exchange = event.params.exchange

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeUsdCollected(event: FeeUsdCollectedEvent): void {
  let entity = new FeeUsdCollected(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.marketId = event.params.marketId
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFundingDebtPaid(event: FundingDebtPaidEvent): void {
  let entity = new FundingDebtPaid(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.marketId = event.params.marketId
  entity.account = event.params.account
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFundingPayout(event: FundingPayoutEvent): void {
  let entity = new FundingPayout(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.marketId = event.params.marketId
  entity.account = event.params.account
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIncreasePosition(event: IncreasePositionEvent): void {
  let entity = new IncreasePosition(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.key = event.params.key
  entity.initialCollateralAmount = event.params.initialCollateralAmount
  entity.initialCollateralValue = event.params.initialCollateralValue
  entity.fee = event.params.fee
  entity.reserveDelta = event.params.reserveDelta

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketCreated(event: MarketCreatedEvent): void {
  let entity = new MarketCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.marketType = event.params.marketType
  entity.marketId = event.params.marketId
  entity.owner = event.params.owner
  entity.indexToken = event.params.indexToken
  entity.quoteToken = event.params.quoteToken
  entity.isGoverned = event.params.isGoverned

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketListed(event: MarketListedEvent): void {
  let entity = new MarketListed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.marketId = event.params.marketId
  entity.isListed = event.params.isListed

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateIndex(event: UpdateIndexEvent): void {
  let entity = new UpdateIndex(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.marketId = event.params.marketId
  entity.longFunding = event.params.longFunding
  entity.shortFunding = event.params.shortFunding
  entity.longPayout = event.params.longPayout
  entity.shortPayout = event.params.shortPayout

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdatePosition(event: UpdatePositionEvent): void {
  let entity = new UpdatePosition(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.marketId = event.params.marketId
  entity.account = event.params.account
  entity.key = event.params.key
  entity.collateralToken = event.params.collateralToken
  entity.size = event.params.size
  entity.collateralValue = event.params.collateralValue
  entity.entryPrice = event.params.entryPrice
  entity.entryFundingIndex = event.params.entryFundingIndex
  entity.entryPayoutIndex = event.params.entryPayoutIndex

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
