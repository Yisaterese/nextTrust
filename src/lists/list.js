


export const pensioners = [
    { id: 1, username: "Aliko Haruna", walletAddress: "0xABC123DEF456", pensionAmount: "5000" },
    { id: 2, username: "Jonathan Liam", walletAddress: "0xABC123DEF456", pensionAmount: "345000" },
    { id: 3, username: "Nancy Chukwu", walletAddress: "0xABC123DEF456", pensionAmount: "88000" },
    { id: 4, username: "Ayomide Gbenga", walletAddress: "0xABC123DEF456", pensionAmount: "25000" },
    { id: 5, username: "Etim Iyang", walletAddress: "0xABC123DEF456", pensionAmount: "275000" },
];
export const dummyTransactions = [
    {
        txId: "0x123ABC456DEF",
        sender: "0xSenderAddress1",
        receiver: "0xReceiverAddress1",
        amount: "250",
        status: "success",
        timestamp: Date.now() - 600000, // 10 minutes ago
        confirmations: 12,
    },
    {
        txId: "0x789XYZ123GHI",
        sender: "0xSenderAddress2",
        receiver: "0xReceiverAddress2",
        amount: "100",
        status: "pending",
        timestamp: Date.now() - 300000, // 5 minutes ago
        confirmations: 2,
    },
    {
        txId: "0x456LMN789JKL",
        sender: "0xSenderAddress3",
        receiver: "0xReceiverAddress3",
        amount: "500",
        status: "failed",
        timestamp: Date.now() - 1200000, // 20 minutes ago
        confirmations: 0,
    },
];

export default dummyTransactions;
