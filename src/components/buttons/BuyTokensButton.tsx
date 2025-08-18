import { BuyTokensAlert } from '@/components/alerts'
import { IconContainer } from '@/components/ui/index'
import { apiService } from '@/services/apiService'
import { BuyTokensType, OwnerData, WarningType } from '@/types/mainTypes'
import { Token } from '@mui/icons-material'
import React, { useState } from 'react'

interface BuyTokensButtonProps {
    ownerData: OwnerData | null
    id: string
    setNewAlert: React.Dispatch<React.SetStateAction<string | null>>
    setAlertType: React.Dispatch<React.SetStateAction<WarningType>>
}

const packIds: Record<string, string> = {
    "sm": "price_1RwAEmR9LI2BudDrwVON1U4L",
    "md": "price_1RwAFAR9LI2BudDrre2YhdY4",
    "lg": "price_1RwAFWR9LI2BudDrZrpu6P8y",
    "xl": "price_1RwAG9R9LI2BudDr1iSjS5iE"
}

export const BuyTokensButton: React.FC<BuyTokensButtonProps> = ({ ownerData, id, setNewAlert, setAlertType }) => {
    const [buyTokens, setBuyTokens] = useState<BuyTokensType | null>(null)
    const [buyingTokens, setBuyingTokens] = useState(false)

    const handleBuyTokens = async () => {
        setBuyingTokens(true)
        const selectedPack = await buyTokensDialog()

        if (selectedPack) {
            try {
                const paymentSession = await apiService.createPaymentSession(id, packIds[selectedPack], "http://localhost:3000/account/api-management", 'payment', selectedPack)

                if (paymentSession) window.open(paymentSession["sessionUrl"], '_blank')

                // setNewAlert('Tokens purchased successfully')
                // setAlertType('alert')
            } catch (err: unknown) {
                if (err instanceof Error){
                    setNewAlert(err.message)
                } else {
                    setNewAlert('Unknown error occurred')
                }
                setAlertType('error')
            }
        }
        setBuyingTokens(false)
    }

    const buyTokensDialog = (): Promise<string | null> => {
        return new Promise((resolve) => {
            setBuyTokens({
                onConfirm: (selectedPack: string | null) => {
                    setBuyTokens(null)
                    resolve(selectedPack)
                },
                onCancel: () => {
                    setBuyTokens(null)
                    resolve(null)
                },
            })
        })
    }

    return (
        <>
            {buyTokens && ownerData && (
                <BuyTokensAlert ownerData={ownerData} isOpen={!!buyTokens} onClose={buyTokens.onCancel} onConfirm={buyTokens.onConfirm}></BuyTokensAlert>
            )}
            <IconContainer className="flex flex-col items-center" onClick={() => handleBuyTokens()}>
                <Token sx={{ fontSize: '36px' }} />
            </IconContainer>
            <span className="content-body text-center text-base">Buy Tokens</span>
        </>
    )
}
