// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class VaultCreated extends ethereum.Event {
  get params(): VaultCreated__Params {
    return new VaultCreated__Params(this);
  }
}

export class VaultCreated__Params {
  _event: VaultCreated;

  constructor(event: VaultCreated) {
    this._event = event;
  }

  get vault(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class MarketFactory__deployMarketInputAddressesStruct extends ethereum.Tuple {
  get owner(): Address {
    return this[0].toAddress();
  }

  get indexToken(): Address {
    return this[1].toAddress();
  }

  get quoteToken(): Address {
    return this[2].toAddress();
  }

  get priceFeed(): Address {
    return this[3].toAddress();
  }

  get fundingRateModel(): Address {
    return this[4].toAddress();
  }
}

export class MarketFactory__deployMarketInputParamsStruct extends ethereum.Tuple {
  get name(): Bytes {
    return this[0].toBytes();
  }

  get feeDistributionWeights(): Array<i32> {
    return this[1].toI32Array();
  }

  get maxLongShortSkew(): Array<i32> {
    return this[2].toI32Array();
  }

  get maintenanceMarginBps(): i32 {
    return this[3].toI32();
  }

  get liquidationFee(): i32 {
    return this[4].toI32();
  }

  get maxPostionSizeOverVault(): i32 {
    return this[5].toI32();
  }

  get openFee(): i32 {
    return this[6].toI32();
  }

  get closeFee(): i32 {
    return this[7].toI32();
  }

  get fundingInterval(): BigInt {
    return this[8].toBigInt();
  }

  get maxLeverage(): i32 {
    return this[9].toI32();
  }

  get maxExposureMultiplier(): i32 {
    return this[10].toI32();
  }

  get category(): i32 {
    return this[11].toI32();
  }

  get marketType(): i32 {
    return this[12].toI32();
  }

  get priceFeedType(): i32 {
    return this[13].toI32();
  }

  get isGoverned(): boolean {
    return this[14].toBoolean();
  }
}

export class MarketFactory extends ethereum.SmartContract {
  static bind(address: Address): MarketFactory {
    return new MarketFactory("MarketFactory", address);
  }

  deployMarket(
    addresses: MarketFactory__deployMarketInputAddressesStruct,
    params: MarketFactory__deployMarketInputParamsStruct
  ): Bytes {
    let result = super.call(
      "deployMarket",
      "deployMarket((address,address,address,address,address),(bytes32,uint8[2],uint8[2],uint16,uint16,uint16,uint16,uint16,uint32,uint8,uint8,uint8,uint8,uint8,bool)):(bytes32)",
      [ethereum.Value.fromTuple(addresses), ethereum.Value.fromTuple(params)]
    );

    return result[0].toBytes();
  }

  try_deployMarket(
    addresses: MarketFactory__deployMarketInputAddressesStruct,
    params: MarketFactory__deployMarketInputParamsStruct
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "deployMarket",
      "deployMarket((address,address,address,address,address),(bytes32,uint8[2],uint8[2],uint16,uint16,uint16,uint16,uint16,uint32,uint8,uint8,uint8,uint8,uint8,bool)):(bytes32)",
      [ethereum.Value.fromTuple(addresses), ethereum.Value.fromTuple(params)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _engine(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DeployMarketCall extends ethereum.Call {
  get inputs(): DeployMarketCall__Inputs {
    return new DeployMarketCall__Inputs(this);
  }

  get outputs(): DeployMarketCall__Outputs {
    return new DeployMarketCall__Outputs(this);
  }
}

export class DeployMarketCall__Inputs {
  _call: DeployMarketCall;

  constructor(call: DeployMarketCall) {
    this._call = call;
  }

  get addresses(): DeployMarketCallAddressesStruct {
    return changetype<DeployMarketCallAddressesStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }

  get params(): DeployMarketCallParamsStruct {
    return changetype<DeployMarketCallParamsStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }
}

export class DeployMarketCall__Outputs {
  _call: DeployMarketCall;

  constructor(call: DeployMarketCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class DeployMarketCallAddressesStruct extends ethereum.Tuple {
  get owner(): Address {
    return this[0].toAddress();
  }

  get indexToken(): Address {
    return this[1].toAddress();
  }

  get quoteToken(): Address {
    return this[2].toAddress();
  }

  get priceFeed(): Address {
    return this[3].toAddress();
  }

  get fundingRateModel(): Address {
    return this[4].toAddress();
  }
}

export class DeployMarketCallParamsStruct extends ethereum.Tuple {
  get name(): Bytes {
    return this[0].toBytes();
  }

  get feeDistributionWeights(): Array<i32> {
    return this[1].toI32Array();
  }

  get maxLongShortSkew(): Array<i32> {
    return this[2].toI32Array();
  }

  get maintenanceMarginBps(): i32 {
    return this[3].toI32();
  }

  get liquidationFee(): i32 {
    return this[4].toI32();
  }

  get maxPostionSizeOverVault(): i32 {
    return this[5].toI32();
  }

  get openFee(): i32 {
    return this[6].toI32();
  }

  get closeFee(): i32 {
    return this[7].toI32();
  }

  get fundingInterval(): BigInt {
    return this[8].toBigInt();
  }

  get maxLeverage(): i32 {
    return this[9].toI32();
  }

  get maxExposureMultiplier(): i32 {
    return this[10].toI32();
  }

  get category(): i32 {
    return this[11].toI32();
  }

  get marketType(): i32 {
    return this[12].toI32();
  }

  get priceFeedType(): i32 {
    return this[13].toI32();
  }

  get isGoverned(): boolean {
    return this[14].toBoolean();
  }
}