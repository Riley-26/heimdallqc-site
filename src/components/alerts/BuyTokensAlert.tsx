import React, { ReactNode, useEffect } from "react";
import { Button } from "../ui";

interface BuyTokensProps {
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode;
}

export const BuyTokensAlert: React.FC<BuyTokensProps> = ({ isOpen, onClose, children }) => {

    const handleBuyTokens = () => {
        
    }


    useEffect(() => {

    }, [])

    // Prevent background scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    if (!isOpen) return null;
    
    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center">
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/70 transition-opacity"
                aria-hidden="true"
                onClick={onClose}
            />
            {/* Modal */}
            <div className="bento-card relative bg-white rounded-lg shadow-lg p-6 z-10 w-full max-w-md mx-auto">
                <button
                    className="absolute top-0 right-0 text-gray-400 hover:text-gray-600 h-6 w-6 text-2xl cursor-pointer content-body"
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times;
                </button>
                <h2 className="text-xl mb-4 content-body">Buy Tokens</h2>
                {children ? children : <p className="content-body text-base">Complete your purchase to continue.</p>}
                <div className="mt-6 flex justify-end content-body">
                    <Button
                        className="py-2 px-4"
                        onClick={onClose}
                        value={"CLOSE"}
                    />
                </div>
            </div>
        </div>
    );
};