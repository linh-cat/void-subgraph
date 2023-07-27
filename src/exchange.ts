import { ethereum } from "@graphprotocol/graph-ts";
import {
  CloseMarketOrderPlaced as CloseMarketOrderPlacedEvent,
  OpenMarketOrderPlaced as OpenMarketOrderPlacedEvent,
  OrderCancelled as OrderCancelledEvent,
  OrderExecuted as OrderExecutedEvent,
  OrderPlaced as OrderPlacedEvent,
  Exchange,
  Exchange__getOrderResultValue0Struct,
} from "../generated/Exchange/Exchange";
import {
  CloseMarketOrderPlaced,
  OpenMarketOrderPlaced,
  OrderCancelled,
  OrderExecuted,
  Order,
} from "../generated/schema";

export function handleCloseMarketOrderPlaced(
  event: CloseMarketOrderPlacedEvent
): void {
  let entity = new CloseMarketOrderPlaced(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.account = event.params.account;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleOpenMarketOrderPlaced(
  event: OpenMarketOrderPlacedEvent
): void {
  let entity = new OpenMarketOrderPlaced(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.account = event.params.account;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleOrderCancelled(event: OrderCancelledEvent): void {
  let entity = new OrderCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.account = event.params.account;
  entity.orderId = event.params.orderId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleOrderExecuted(event: OrderExecutedEvent): void {
  let entity = new OrderExecuted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.account = event.params.account;
  entity.orderId = event.params.orderId;
  entity.executor = event.params.executor;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function getOrNull<T>(result: ethereum.CallResult<T>): T | null {
  return result.reverted ? null : result.value;
}

export function handleOrderPlaced(event: OrderPlacedEvent): void {
  let exchangeContract = Exchange.bind(event.address);
  let order = getOrNull<Exchange__getOrderResultValue0Struct>(
    exchangeContract.try_getOrder(event.params.orderId)
  );

  if (!order) {
    throw new Error("order not found");
  }

  let entity = new Order(event.params.orderId.toHex());
  entity.market = event.params.marketId;
  entity.orderType = event.params.orderType;
  entity.account = event.params.account;
  entity.orderId = event.params.orderId;
  entity.triggerPrice = order.extra.triggerPrice;
  entity.tpPrice = order.extra.tpPrice;
  entity.slPrice = order.extra.slPrice;
  entity.isLong = order.isLong;
  entity.collateralToken = order.collateralToken;
  entity.collateralAmount = order.collateralAmount;
  entity.executed = false;
  entity.cancelled = false;
  entity.blockNumber = event.block.number;
  entity.createdAt = event.block.timestamp;
  entity.txHash = event.transaction.hash;
  entity.save();
}
