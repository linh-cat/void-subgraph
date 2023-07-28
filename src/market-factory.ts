import { BigInt } from "@graphprotocol/graph-ts";
import { VaultCreated as VaultCreatedEvent } from "../generated/MarketFactory/MarketFactory";
import { Vault } from "../generated/schema";
import { Vault as VaultTemplate } from "../generated/templates";

export function handleVaultCreated(event: VaultCreatedEvent): void {
  let entity = new Vault(event.params.vault);

  entity.owner = event.params.owner;
  entity.liquidity = BigInt.zero();
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  VaultTemplate.create(event.params.vault);

  entity.save();
}
