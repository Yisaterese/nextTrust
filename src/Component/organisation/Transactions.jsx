import React from "react";
import { Card, CardContent, Typography, Chip } from "@mui/material";
import { CheckCircle, AccessTime, Cancel } from "@mui/icons-material";

const TransactionCard = ({ transaction }) => {
    const { txId, sender, receiver, amount, status, timestamp, confirmations } = transaction;

    const statusIcon = {
        success: <CheckCircle className="text-green-500" fontSize="small" />,
        pending: <AccessTime className="text-yellow-500" fontSize="small" />,
        failed: <Cancel className="text-red-500" fontSize="small" />,
    };

    return (
        <Card className="p-4 shadow-lg rounded-xl border border-gray-200 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">
            <CardContent className="space-y-2 text-sm sm:text-base md:text-lg">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <span className="font-semibold text-gray-700">Transaction ID:</span>
                    <span className="text-gray-500 text-sm break-all">{txId}</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <span className="font-semibold text-gray-700">Sender:</span>
                    <span className="text-gray-500 text-sm break-all">{sender}</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <span className="font-semibold text-gray-700">Receiver:</span>
                    <span className="text-gray-500 text-sm break-all">{receiver}</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <span className="font-semibold text-gray-700">Amount:</span>
                    <span className="text-gray-900 font-bold">{amount} SUI</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <span className="font-semibold text-gray-700">Timestamp:</span>
                    <span className="text-gray-500 text-sm">{new Date(timestamp).toLocaleString()}</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <span className="font-semibold text-gray-700">Confirmations:</span>
                    <span className="text-gray-900 font-bold">{confirmations}</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2">
                    <span className="font-semibold text-gray-700">Status:</span>
                    <Chip icon={statusIcon[status]} label={status.charAt(0).toUpperCase() + status.slice(1)} variant="outlined" className="flex items-center gap-1 px-2 py-1" />
                </div>
            </CardContent>
        </Card>
    );
};
export default TransactionCard;