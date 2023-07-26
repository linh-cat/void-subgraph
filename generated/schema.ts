// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ClosePosition extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ClosePosition entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type ClosePosition must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ClosePosition", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): ClosePosition | null {
    return changetype<ClosePosition | null>(
      store.get("ClosePosition", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get key(): Bytes {
    let value = this.get("key");
    return value!.toBytes();
  }

  set key(value: Bytes) {
    this.set("key", Value.fromBytes(value));
  }

  get size(): BigInt {
    let value = this.get("size");
    return value!.toBigInt();
  }

  set size(value: BigInt) {
    this.set("size", Value.fromBigInt(value));
  }

  get collateralValue(): BigInt {
    let value = this.get("collateralValue");
    return value!.toBigInt();
  }

  set collateralValue(value: BigInt) {
    this.set("collateralValue", Value.fromBigInt(value));
  }

  get exitFundingIndex(): BigInt {
    let value = this.get("exitFundingIndex");
    return value!.toBigInt();
  }

  set exitFundingIndex(value: BigInt) {
    this.set("exitFundingIndex", Value.fromBigInt(value));
  }

  get exitPayoutIndex(): BigInt {
    let value = this.get("exitPayoutIndex");
    return value!.toBigInt();
  }

  set exitPayoutIndex(value: BigInt) {
    this.set("exitPayoutIndex", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class DecreasePosition extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DecreasePosition entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type DecreasePosition must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("DecreasePosition", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): DecreasePosition | null {
    return changetype<DecreasePosition | null>(
      store.get("DecreasePosition", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get key(): Bytes {
    let value = this.get("key");
    return value!.toBytes();
  }

  set key(value: Bytes) {
    this.set("key", Value.fromBytes(value));
  }

  get size(): BigInt {
    let value = this.get("size");
    return value!.toBigInt();
  }

  set size(value: BigInt) {
    this.set("size", Value.fromBigInt(value));
  }

  get sizeDelta(): BigInt {
    let value = this.get("sizeDelta");
    return value!.toBigInt();
  }

  set sizeDelta(value: BigInt) {
    this.set("sizeDelta", Value.fromBigInt(value));
  }

  get collateralReduced(): BigInt {
    let value = this.get("collateralReduced");
    return value!.toBigInt();
  }

  set collateralReduced(value: BigInt) {
    this.set("collateralReduced", Value.fromBigInt(value));
  }

  get fee(): BigInt {
    let value = this.get("fee");
    return value!.toBigInt();
  }

  set fee(value: BigInt) {
    this.set("fee", Value.fromBigInt(value));
  }

  get reserveDelta(): BigInt {
    let value = this.get("reserveDelta");
    return value!.toBigInt();
  }

  set reserveDelta(value: BigInt) {
    this.set("reserveDelta", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class ExchangeSet extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ExchangeSet entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type ExchangeSet must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ExchangeSet", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): ExchangeSet | null {
    return changetype<ExchangeSet | null>(
      store.get("ExchangeSet", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get exchange(): Bytes {
    let value = this.get("exchange");
    return value!.toBytes();
  }

  set exchange(value: Bytes) {
    this.set("exchange", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class FeeUsdCollected extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save FeeUsdCollected entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type FeeUsdCollected must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("FeeUsdCollected", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): FeeUsdCollected | null {
    return changetype<FeeUsdCollected | null>(
      store.get("FeeUsdCollected", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get marketId(): Bytes {
    let value = this.get("marketId");
    return value!.toBytes();
  }

  set marketId(value: Bytes) {
    this.set("marketId", Value.fromBytes(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value!.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class FundingDebtPaid extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save FundingDebtPaid entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type FundingDebtPaid must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("FundingDebtPaid", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): FundingDebtPaid | null {
    return changetype<FundingDebtPaid | null>(
      store.get("FundingDebtPaid", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get marketId(): Bytes {
    let value = this.get("marketId");
    return value!.toBytes();
  }

  set marketId(value: Bytes) {
    this.set("marketId", Value.fromBytes(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value!.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class FundingPayout extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save FundingPayout entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type FundingPayout must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("FundingPayout", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): FundingPayout | null {
    return changetype<FundingPayout | null>(
      store.get("FundingPayout", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get marketId(): Bytes {
    let value = this.get("marketId");
    return value!.toBytes();
  }

  set marketId(value: Bytes) {
    this.set("marketId", Value.fromBytes(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value!.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class IncreasePosition extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save IncreasePosition entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type IncreasePosition must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("IncreasePosition", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): IncreasePosition | null {
    return changetype<IncreasePosition | null>(
      store.get("IncreasePosition", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get key(): Bytes {
    let value = this.get("key");
    return value!.toBytes();
  }

  set key(value: Bytes) {
    this.set("key", Value.fromBytes(value));
  }

  get initialCollateralAmount(): BigInt {
    let value = this.get("initialCollateralAmount");
    return value!.toBigInt();
  }

  set initialCollateralAmount(value: BigInt) {
    this.set("initialCollateralAmount", Value.fromBigInt(value));
  }

  get initialCollateralValue(): BigInt {
    let value = this.get("initialCollateralValue");
    return value!.toBigInt();
  }

  set initialCollateralValue(value: BigInt) {
    this.set("initialCollateralValue", Value.fromBigInt(value));
  }

  get fee(): BigInt {
    let value = this.get("fee");
    return value!.toBigInt();
  }

  set fee(value: BigInt) {
    this.set("fee", Value.fromBigInt(value));
  }

  get reserveDelta(): BigInt {
    let value = this.get("reserveDelta");
    return value!.toBigInt();
  }

  set reserveDelta(value: BigInt) {
    this.set("reserveDelta", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class Market extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Market entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Market must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Market", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Market | null {
    return changetype<Market | null>(store.get("Market", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get marketType(): i32 {
    let value = this.get("marketType");
    return value!.toI32();
  }

  set marketType(value: i32) {
    this.set("marketType", Value.fromI32(value));
  }

  get marketId(): Bytes {
    let value = this.get("marketId");
    return value!.toBytes();
  }

  set marketId(value: Bytes) {
    this.set("marketId", Value.fromBytes(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get indexToken(): Bytes {
    let value = this.get("indexToken");
    return value!.toBytes();
  }

  set indexToken(value: Bytes) {
    this.set("indexToken", Value.fromBytes(value));
  }

  get quoteToken(): Bytes {
    let value = this.get("quoteToken");
    return value!.toBytes();
  }

  set quoteToken(value: Bytes) {
    this.set("quoteToken", Value.fromBytes(value));
  }

  get isGoverned(): boolean {
    let value = this.get("isGoverned");
    return value!.toBoolean();
  }

  set isGoverned(value: boolean) {
    this.set("isGoverned", Value.fromBoolean(value));
  }

  get category(): i32 {
    let value = this.get("category");
    return value!.toI32();
  }

  set category(value: i32) {
    this.set("category", Value.fromI32(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get maxLeverage(): i32 {
    let value = this.get("maxLeverage");
    return value!.toI32();
  }

  set maxLeverage(value: i32) {
    this.set("maxLeverage", Value.fromI32(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class Position extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Position entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Position must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Position", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Position | null {
    return changetype<Position | null>(store.get("Position", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get marketId(): Bytes {
    let value = this.get("marketId");
    return value!.toBytes();
  }

  set marketId(value: Bytes) {
    this.set("marketId", Value.fromBytes(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get key(): Bytes {
    let value = this.get("key");
    return value!.toBytes();
  }

  set key(value: Bytes) {
    this.set("key", Value.fromBytes(value));
  }

  get collateralToken(): Bytes {
    let value = this.get("collateralToken");
    return value!.toBytes();
  }

  set collateralToken(value: Bytes) {
    this.set("collateralToken", Value.fromBytes(value));
  }

  get size(): BigInt {
    let value = this.get("size");
    return value!.toBigInt();
  }

  set size(value: BigInt) {
    this.set("size", Value.fromBigInt(value));
  }

  get collateralValue(): BigInt {
    let value = this.get("collateralValue");
    return value!.toBigInt();
  }

  set collateralValue(value: BigInt) {
    this.set("collateralValue", Value.fromBigInt(value));
  }

  get entryPrice(): BigInt {
    let value = this.get("entryPrice");
    return value!.toBigInt();
  }

  set entryPrice(value: BigInt) {
    this.set("entryPrice", Value.fromBigInt(value));
  }

  get entryFundingIndex(): BigInt {
    let value = this.get("entryFundingIndex");
    return value!.toBigInt();
  }

  set entryFundingIndex(value: BigInt) {
    this.set("entryFundingIndex", Value.fromBigInt(value));
  }

  get entryPayoutIndex(): BigInt {
    let value = this.get("entryPayoutIndex");
    return value!.toBigInt();
  }

  set entryPayoutIndex(value: BigInt) {
    this.set("entryPayoutIndex", Value.fromBigInt(value));
  }
}
