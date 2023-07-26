import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  CloseMarketOrderPlaced,
  OpenMarketOrderPlaced,
  OrderCancelled,
  OrderExecuted,
  OrderPlaced
} from "../generated/Exchange/Exchange"

export function createCloseMarketOrderPlacedEvent(
  account: Address
): CloseMarketOrderPlaced {
  let closeMarketOrderPlacedEvent = changetype<CloseMarketOrderPlaced>(
    newMockEvent()
  )

  closeMarketOrderPlacedEvent.parameters = new Array()

  closeMarketOrderPlacedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return closeMarketOrderPlacedEvent
}

export function createOpenMarketOrderPlacedEvent(
  account: Address
): OpenMarketOrderPlaced {
  let openMarketOrderPlacedEvent = changetype<OpenMarketOrderPlaced>(
    newMockEvent()
  )

  openMarketOrderPlacedEvent.parameters = new Array()

  openMarketOrderPlacedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return openMarketOrderPlacedEvent
}

export function createOrderCancelledEvent(
  account: Address,
  orderId: BigInt
): OrderCancelled {
  let orderCancelledEvent = changetype<OrderCancelled>(newMockEvent())

  orderCancelledEvent.parameters = new Array()

  orderCancelledEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  orderCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )

  return orderCancelledEvent
}

export function createOrderExecutedEvent(
  account: Address,
  orderId: BigInt,
  executor: Address
): OrderExecuted {
  let orderExecutedEvent = changetype<OrderExecuted>(newMockEvent())

  orderExecutedEvent.parameters = new Array()

  orderExecutedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  orderExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  orderExecutedEvent.parameters.push(
    new ethereum.EventParam("executor", ethereum.Value.fromAddress(executor))
  )

  return orderExecutedEvent
}

export function createOrderPlacedEvent(
  marketId: Bytes,
  orderType: i32,
  account: Address,
  orderId: BigInt
): OrderPlaced {
  let orderPlacedEvent = changetype<OrderPlaced>(newMockEvent())

  orderPlacedEvent.parameters = new Array()

  orderPlacedEvent.parameters.push(
    new ethereum.EventParam("marketId", ethereum.Value.fromFixedBytes(marketId))
  )
  orderPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "orderType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(orderType))
    )
  )
  orderPlacedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  orderPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )

  return orderPlacedEvent
}
