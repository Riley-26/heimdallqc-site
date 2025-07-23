import { IconContainer } from '@/components/ui/index'
import { BuyTokensAlert } from '@/components/alerts'
import { apiService } from '@/services/apiService'
import { Token } from '@mui/icons-material'
import React, { useState } from 'react'

interface BuyTokensButtonProps {
    ownerData: any
    id: string | undefined
    setNewAlert: any
    setAlertType: any
}

export const BuyTokensButton: React.FC<BuyTokensButtonProps> = ({ ownerData, id, setNewAlert, setAlertType }) => {
    const [buyTokens, setBuyTokens] = useState<any>(null)
    const [buyingTokens, setBuyingTokens] = useState(false)

    const handleBuyTokens = async () => {
        setBuyingTokens(true)
        const selectedPack = await buyTokensDialog()

        if (selectedPack) {
            try {
                await apiService.buyTokens(id, selectedPack)
                setNewAlert('Tokens purchased successfully')
                setAlertType('alert')
            } catch (err: any) {
                setNewAlert(err.message)
                setAlertType('error')
            }
        }
        setBuyingTokens(false)
    }

    const buyTokensDialog = (): Promise<string | null> => {
        return new Promise((resolve) => {
            setBuyTokens({
                onConfirm: (selectedPack: string) => {
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
            {buyTokens && ownerData && <BuyTokensAlert ownerData={ownerData} isOpen={buyTokens} onClose={buyTokens.onCancel} onConfirm={buyTokens.onConfirm}></BuyTokensAlert>}
            <IconContainer className="flex flex-col items-center" onClick={() => handleBuyTokens()}>
                <Token sx={{ fontSize: '36px' }} />
            </IconContainer>
            <span className="content-body text-base text-center">Buy Tokens</span>
        </>
    )
}
