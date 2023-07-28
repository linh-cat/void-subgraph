import {
  Deposit,
  Withdraw,
  BalanceUpdated,
} from "../generated/templates/Vault/Vault";
import { Vault } from "../generated/schema";

export function handleDeposit(event: Deposit): void {
  let entity = Vault.load(event.address);

  if (entity) {
    entity.liquidity = entity.liquidity.plus(event.params.amount);
    entity.save();
  }
}

export function handleWithdraw(event: Withdraw): void {
  let entity = Vault.load(event.address);

  if (entity) {
    entity.liquidity = entity.liquidity.minus(event.params.amount);
    entity.save();
  }
}

export function handleBalanceUpdated(event: BalanceUpdated): void {
  let entity = Vault.load(event.address);

  if (entity) {
    entity.balance = event.params.balance;
    entity.save();
  }
}
