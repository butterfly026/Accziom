export interface Wallet {
    id: string;
    walletID: any;
    address: string;
    balance: number;
    recentClients: any
}

export class Transaction {
    txn_type?: string;
    blockHash: string; // string; //"0x6475ed703249ddd5a417c1ca8a1fd40bec3a6576f2f0bd2b0813ae5009a3505f"
    blockNumber: string; // "9529797"
    confirmations: string; // "9634"
    contractAddress: string; // ""
    cumulativeGasUsed: string; // "1812079"
    from: string; // "0xadkfkels..."
    fromID?: { id: string; type: number }; // "shinji0411@outlook.com"
    gas: string; // "21000"
    gasPrice: string; // "4899582941"
    gasUsed: string; // "21000"
    hash: string; // "0xeec36ce5aee1b69993e394f810f2ee302ced264071c9cfbe154be9cbafc71871"
    isError: string; // "0"
    nonce: string; // "90"
    timeStamp: string; // "1611512325"
    to: string; // "kaito140411@outlook.com"
    toID?: { id: string; type: number }; // "shinji0411@outlook.com"
    transactionIndex: string; // "24"
    txreceipt_status: string; // "1"
    value: string; // "1000000000000000"
    fee: string;
}
