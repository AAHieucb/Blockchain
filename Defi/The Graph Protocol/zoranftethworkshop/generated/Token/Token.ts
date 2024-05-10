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

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class TokenMetadataURIUpdated extends ethereum.Event {
  get params(): TokenMetadataURIUpdated__Params {
    return new TokenMetadataURIUpdated__Params(this);
  }
}

export class TokenMetadataURIUpdated__Params {
  _event: TokenMetadataURIUpdated;

  constructor(event: TokenMetadataURIUpdated) {
    this._event = event;
  }

  get _tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _uri(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class TokenURIUpdated extends ethereum.Event {
  get params(): TokenURIUpdated__Params {
    return new TokenURIUpdated__Params(this);
  }
}

export class TokenURIUpdated__Params {
  _event: TokenURIUpdated;

  constructor(event: TokenURIUpdated) {
    this._event = event;
  }

  get _tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _uri(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Token extends ethereum.SmartContract {
  static bind(address: Address): Token {
    return new Token("Token", address);
  }

  MINT_WITH_SIG_TYPEHASH(): Bytes {
    let result = super.call(
      "MINT_WITH_SIG_TYPEHASH",
      "MINT_WITH_SIG_TYPEHASH():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_MINT_WITH_SIG_TYPEHASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "MINT_WITH_SIG_TYPEHASH",
      "MINT_WITH_SIG_TYPEHASH():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  PERMIT_TYPEHASH(): Bytes {
    let result = super.call(
      "PERMIT_TYPEHASH",
      "PERMIT_TYPEHASH():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_PERMIT_TYPEHASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "PERMIT_TYPEHASH",
      "PERMIT_TYPEHASH():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  baseURI(): string {
    let result = super.call("baseURI", "baseURI():(string)", []);

    return result[0].toString();
  }

  try_baseURI(): ethereum.CallResult<string> {
    let result = super.tryCall("baseURI", "baseURI():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  marketContract(): Address {
    let result = super.call("marketContract", "marketContract():(address)", []);

    return result[0].toAddress();
  }

  try_marketContract(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "marketContract",
      "marketContract():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  mintWithSigNonces(param0: Address): BigInt {
    let result = super.call(
      "mintWithSigNonces",
      "mintWithSigNonces(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_mintWithSigNonces(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "mintWithSigNonces",
      "mintWithSigNonces(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  permitNonces(param0: Address, param1: BigInt): BigInt {
    let result = super.call(
      "permitNonces",
      "permitNonces(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_permitNonces(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "permitNonces",
      "permitNonces(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  previousTokenOwners(param0: BigInt): Address {
    let result = super.call(
      "previousTokenOwners",
      "previousTokenOwners(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try_previousTokenOwners(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "previousTokenOwners",
      "previousTokenOwners(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenByIndex(index: BigInt): BigInt {
    let result = super.call("tokenByIndex", "tokenByIndex(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(index)
    ]);

    return result[0].toBigInt();
  }

  try_tokenByIndex(index: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenByIndex",
      "tokenByIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenContentHashes(param0: BigInt): Bytes {
    let result = super.call(
      "tokenContentHashes",
      "tokenContentHashes(uint256):(bytes32)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBytes();
  }

  try_tokenContentHashes(param0: BigInt): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "tokenContentHashes",
      "tokenContentHashes(uint256):(bytes32)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  tokenCreators(param0: BigInt): Address {
    let result = super.call(
      "tokenCreators",
      "tokenCreators(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try_tokenCreators(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "tokenCreators",
      "tokenCreators(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tokenMetadataHashes(param0: BigInt): Bytes {
    let result = super.call(
      "tokenMetadataHashes",
      "tokenMetadataHashes(uint256):(bytes32)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBytes();
  }

  try_tokenMetadataHashes(param0: BigInt): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "tokenMetadataHashes",
      "tokenMetadataHashes(uint256):(bytes32)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  tokenMetadataURI(tokenId: BigInt): string {
    let result = super.call(
      "tokenMetadataURI",
      "tokenMetadataURI(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return result[0].toString();
  }

  try_tokenMetadataURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall(
      "tokenMetadataURI",
      "tokenMetadataURI(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenOfOwnerByIndex(owner: Address, index: BigInt): BigInt {
    let result = super.call(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toBigInt();
  }

  try_tokenOfOwnerByIndex(
    owner: Address,
    index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

  get marketContractAddr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AcceptBidCall extends ethereum.Call {
  get inputs(): AcceptBidCall__Inputs {
    return new AcceptBidCall__Inputs(this);
  }

  get outputs(): AcceptBidCall__Outputs {
    return new AcceptBidCall__Outputs(this);
  }
}

export class AcceptBidCall__Inputs {
  _call: AcceptBidCall;

  constructor(call: AcceptBidCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get bid(): AcceptBidCallBidStruct {
    return changetype<AcceptBidCallBidStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }
}

export class AcceptBidCall__Outputs {
  _call: AcceptBidCall;

  constructor(call: AcceptBidCall) {
    this._call = call;
  }
}

export class AcceptBidCallBidStruct extends ethereum.Tuple {
  get amount(): BigInt {
    return this[0].toBigInt();
  }

  get currency(): Address {
    return this[1].toAddress();
  }

  get bidder(): Address {
    return this[2].toAddress();
  }

  get recipient(): Address {
    return this[3].toAddress();
  }

  get sellOnShare(): AcceptBidCallBidSellOnShareStruct {
    return changetype<AcceptBidCallBidSellOnShareStruct>(this[4].toTuple());
  }
}

export class AcceptBidCallBidSellOnShareStruct extends ethereum.Tuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class AuctionTransferCall extends ethereum.Call {
  get inputs(): AuctionTransferCall__Inputs {
    return new AuctionTransferCall__Inputs(this);
  }

  get outputs(): AuctionTransferCall__Outputs {
    return new AuctionTransferCall__Outputs(this);
  }
}

export class AuctionTransferCall__Inputs {
  _call: AuctionTransferCall;

  constructor(call: AuctionTransferCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class AuctionTransferCall__Outputs {
  _call: AuctionTransferCall;

  constructor(call: AuctionTransferCall) {
    this._call = call;
  }
}

export class BurnCall extends ethereum.Call {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this);
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this);
  }
}

export class BurnCall__Inputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BurnCall__Outputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get data(): MintCallDataStruct {
    return changetype<MintCallDataStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }

  get bidShares(): MintCallBidSharesStruct {
    return changetype<MintCallBidSharesStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class MintCallDataStruct extends ethereum.Tuple {
  get tokenURI(): string {
    return this[0].toString();
  }

  get metadataURI(): string {
    return this[1].toString();
  }

  get contentHash(): Bytes {
    return this[2].toBytes();
  }

  get metadataHash(): Bytes {
    return this[3].toBytes();
  }
}

export class MintCallBidSharesStruct extends ethereum.Tuple {
  get prevOwner(): MintCallBidSharesPrevOwnerStruct {
    return changetype<MintCallBidSharesPrevOwnerStruct>(this[0].toTuple());
  }

  get creator(): MintCallBidSharesCreatorStruct {
    return changetype<MintCallBidSharesCreatorStruct>(this[1].toTuple());
  }

  get owner(): MintCallBidSharesOwnerStruct {
    return changetype<MintCallBidSharesOwnerStruct>(this[2].toTuple());
  }
}

export class MintCallBidSharesPrevOwnerStruct extends ethereum.Tuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }
}

export class MintCallBidSharesCreatorStruct extends ethereum.Tuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }
}

export class MintCallBidSharesOwnerStruct extends ethereum.Tuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }
}

export class MintWithSigCall extends ethereum.Call {
  get inputs(): MintWithSigCall__Inputs {
    return new MintWithSigCall__Inputs(this);
  }

  get outputs(): MintWithSigCall__Outputs {
    return new MintWithSigCall__Outputs(this);
  }
}

export class MintWithSigCall__Inputs {
  _call: MintWithSigCall;

  constructor(call: MintWithSigCall) {
    this._call = call;
  }

  get creator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): MintWithSigCallDataStruct {
    return changetype<MintWithSigCallDataStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }

  get bidShares(): MintWithSigCallBidSharesStruct {
    return changetype<MintWithSigCallBidSharesStruct>(
      this._call.inputValues[2].value.toTuple()
    );
  }

  get sig(): MintWithSigCallSigStruct {
    return changetype<MintWithSigCallSigStruct>(
      this._call.inputValues[3].value.toTuple()
    );
  }
}

export class MintWithSigCall__Outputs {
  _call: MintWithSigCall;

  constructor(call: MintWithSigCall) {
    this._call = call;
  }
}

export class MintWithSigCallDataStruct extends ethereum.Tuple {
  get tokenURI(): string {
    return this[0].toString();
  }

  get metadataURI(): string {
    return this[1].toString();
  }

  get contentHash(): Bytes {
    return this[2].toBytes();
  }

  get metadataHash(): Bytes {
    return this[3].toBytes();
  }
}

export class MintWithSigCallBidSharesStruct extends ethereum.Tuple {
  get prevOwner(): MintWithSigCallBidSharesPrevOwnerStruct {
    return changetype<MintWithSigCallBidSharesPrevOwnerStruct>(
      this[0].toTuple()
    );
  }

  get creator(): MintWithSigCallBidSharesCreatorStruct {
    return changetype<MintWithSigCallBidSharesCreatorStruct>(this[1].toTuple());
  }

  get owner(): MintWithSigCallBidSharesOwnerStruct {
    return changetype<MintWithSigCallBidSharesOwnerStruct>(this[2].toTuple());
  }
}

export class MintWithSigCallBidSharesPrevOwnerStruct extends ethereum.Tuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }
}

export class MintWithSigCallBidSharesCreatorStruct extends ethereum.Tuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }
}

export class MintWithSigCallBidSharesOwnerStruct extends ethereum.Tuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }
}

export class MintWithSigCallSigStruct extends ethereum.Tuple {
  get deadline(): BigInt {
    return this[0].toBigInt();
  }

  get v(): i32 {
    return this[1].toI32();
  }

  get r(): Bytes {
    return this[2].toBytes();
  }

  get s(): Bytes {
    return this[3].toBytes();
  }
}

export class PermitCall extends ethereum.Call {
  get inputs(): PermitCall__Inputs {
    return new PermitCall__Inputs(this);
  }

  get outputs(): PermitCall__Outputs {
    return new PermitCall__Outputs(this);
  }
}

export class PermitCall__Inputs {
  _call: PermitCall;

  constructor(call: PermitCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get sig(): PermitCallSigStruct {
    return changetype<PermitCallSigStruct>(
      this._call.inputValues[2].value.toTuple()
    );
  }
}

export class PermitCall__Outputs {
  _call: PermitCall;

  constructor(call: PermitCall) {
    this._call = call;
  }
}

export class PermitCallSigStruct extends ethereum.Tuple {
  get deadline(): BigInt {
    return this[0].toBigInt();
  }

  get v(): i32 {
    return this[1].toI32();
  }

  get r(): Bytes {
    return this[2].toBytes();
  }

  get s(): Bytes {
    return this[3].toBytes();
  }
}

export class RemoveAskCall extends ethereum.Call {
  get inputs(): RemoveAskCall__Inputs {
    return new RemoveAskCall__Inputs(this);
  }

  get outputs(): RemoveAskCall__Outputs {
    return new RemoveAskCall__Outputs(this);
  }
}

export class RemoveAskCall__Inputs {
  _call: RemoveAskCall;

  constructor(call: RemoveAskCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RemoveAskCall__Outputs {
  _call: RemoveAskCall;

  constructor(call: RemoveAskCall) {
    this._call = call;
  }
}

export class RemoveBidCall extends ethereum.Call {
  get inputs(): RemoveBidCall__Inputs {
    return new RemoveBidCall__Inputs(this);
  }

  get outputs(): RemoveBidCall__Outputs {
    return new RemoveBidCall__Outputs(this);
  }
}

export class RemoveBidCall__Inputs {
  _call: RemoveBidCall;

  constructor(call: RemoveBidCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RemoveBidCall__Outputs {
  _call: RemoveBidCall;

  constructor(call: RemoveBidCall) {
    this._call = call;
  }
}

export class RevokeApprovalCall extends ethereum.Call {
  get inputs(): RevokeApprovalCall__Inputs {
    return new RevokeApprovalCall__Inputs(this);
  }

  get outputs(): RevokeApprovalCall__Outputs {
    return new RevokeApprovalCall__Outputs(this);
  }
}

export class RevokeApprovalCall__Inputs {
  _call: RevokeApprovalCall;

  constructor(call: RevokeApprovalCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RevokeApprovalCall__Outputs {
  _call: RevokeApprovalCall;

  constructor(call: RevokeApprovalCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetAskCall extends ethereum.Call {
  get inputs(): SetAskCall__Inputs {
    return new SetAskCall__Inputs(this);
  }

  get outputs(): SetAskCall__Outputs {
    return new SetAskCall__Outputs(this);
  }
}

export class SetAskCall__Inputs {
  _call: SetAskCall;

  constructor(call: SetAskCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get ask(): SetAskCallAskStruct {
    return changetype<SetAskCallAskStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }
}

export class SetAskCall__Outputs {
  _call: SetAskCall;

  constructor(call: SetAskCall) {
    this._call = call;
  }
}

export class SetAskCallAskStruct extends ethereum.Tuple {
  get amount(): BigInt {
    return this[0].toBigInt();
  }

  get currency(): Address {
    return this[1].toAddress();
  }
}

export class SetBidCall extends ethereum.Call {
  get inputs(): SetBidCall__Inputs {
    return new SetBidCall__Inputs(this);
  }

  get outputs(): SetBidCall__Outputs {
    return new SetBidCall__Outputs(this);
  }
}

export class SetBidCall__Inputs {
  _call: SetBidCall;

  constructor(call: SetBidCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get bid(): SetBidCallBidStruct {
    return changetype<SetBidCallBidStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }
}

export class SetBidCall__Outputs {
  _call: SetBidCall;

  constructor(call: SetBidCall) {
    this._call = call;
  }
}

export class SetBidCallBidStruct extends ethereum.Tuple {
  get amount(): BigInt {
    return this[0].toBigInt();
  }

  get currency(): Address {
    return this[1].toAddress();
  }

  get bidder(): Address {
    return this[2].toAddress();
  }

  get recipient(): Address {
    return this[3].toAddress();
  }

  get sellOnShare(): SetBidCallBidSellOnShareStruct {
    return changetype<SetBidCallBidSellOnShareStruct>(this[4].toTuple());
  }
}

export class SetBidCallBidSellOnShareStruct extends ethereum.Tuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class UpdateTokenMetadataURICall extends ethereum.Call {
  get inputs(): UpdateTokenMetadataURICall__Inputs {
    return new UpdateTokenMetadataURICall__Inputs(this);
  }

  get outputs(): UpdateTokenMetadataURICall__Outputs {
    return new UpdateTokenMetadataURICall__Outputs(this);
  }
}

export class UpdateTokenMetadataURICall__Inputs {
  _call: UpdateTokenMetadataURICall;

  constructor(call: UpdateTokenMetadataURICall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get metadataURI(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class UpdateTokenMetadataURICall__Outputs {
  _call: UpdateTokenMetadataURICall;

  constructor(call: UpdateTokenMetadataURICall) {
    this._call = call;
  }
}

export class UpdateTokenURICall extends ethereum.Call {
  get inputs(): UpdateTokenURICall__Inputs {
    return new UpdateTokenURICall__Inputs(this);
  }

  get outputs(): UpdateTokenURICall__Outputs {
    return new UpdateTokenURICall__Outputs(this);
  }
}

export class UpdateTokenURICall__Inputs {
  _call: UpdateTokenURICall;

  constructor(call: UpdateTokenURICall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get tokenURI(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class UpdateTokenURICall__Outputs {
  _call: UpdateTokenURICall;

  constructor(call: UpdateTokenURICall) {
    this._call = call;
  }
}