import { BuyTokensAlert } from '@/components/alerts'
import { IconContainer } from '@/components/ui/index'
import { apiService } from '@/services/apiService'
import { BuyTokensType, OwnerData, WarningType } from '@/types/mainTypes'
import { Token } from '@mui/icons-material'
import React, { useState } from 'react'

interface BuyTokensButtonProps {
    ownerData: OwnerData | null
    setNewAlert: React.Dispatch<React.SetStateAction<string | null>>
    setAlertType: React.Dispatch<React.SetStateAction<WarningType>>
}

const packIds: Record<string, string> = {
    "sm": "price_1SIY0aJqFq3aGYv0lgug1e94",
    "md": "price_1SIY1jJqFq3aGYv0lQd0Dwt8",
    "lg": "price_1SIY2SJqFq3aGYv0f0TcfkJB",
    "xl": "price_1SIY2yJqFq3aGYv0pM0lJdTj"
}

export const BuyTokensButton: React.FC<BuyTokensButtonProps> = ({ ownerData, setNewAlert, setAlertType }) => {
    const [buyTokens, setBuyTokens] = useState<BuyTokensType | null>(null)
    const [buyingTokens, setBuyingTokens] = useState(false)

    const handleBuyTokens = async () => {
        setBuyingTokens(true)
        const selectedPack = await buyTokensDialog()

        if (selectedPack) {
            try {
                const session = await fetch("/api/payments/create-session", {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        priceId: packIds[selectedPack],
                        successUrl: window.location.href,
                        purchaseType: 'one_off',
                        name: selectedPack
                    })
                })
                const sessionResponse = await session.json()
                if (!session.ok) throw new Error(sessionResponse.message)
                if (sessionResponse.session && Object.keys(sessionResponse.session).includes("session_url")) window.open(sessionResponse.session["session_url"], '_blank')

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
