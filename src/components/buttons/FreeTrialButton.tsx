import { BuyTokensAlert } from '@/components/alerts'
import { IconContainer } from '@/components/ui/index'
import { apiService } from '@/services/apiService'
import { OwnerData, WarningType } from '@/types/mainTypes'
import { MoneyOff, Token } from '@mui/icons-material'
import React, { useState } from 'react'

interface FreeTrialButtonProps {
    setNewAlert: React.Dispatch<React.SetStateAction<string | null>>
    setAlertType: React.Dispatch<React.SetStateAction<WarningType>>
}

export const FreeTrialButton: React.FC<FreeTrialButtonProps> = ({ setNewAlert, setAlertType }) => {
    const [activated, setActivated] = useState<boolean>(false)

    const handleClaimTrial = async () => {
        const claimed = await claimTrialDialog()

        if (claimed) {
            try {
                const setTrial = await fetch("/api/owners/claim-trial", {
                    method: "PUT",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        state: true
                    })
                })
                const setTrialResponse = await setTrial.json()
                if (!setTrialResponse) throw new Error(setTrialResponse.message)

                setNewAlert('Trial claimed. It will be available at checkout')
                setAlertType('alert')
            } catch (err: unknown) {
                if (err instanceof Error){
                    setNewAlert(err.message)
                } else {
                    setNewAlert('Unknown error occurred')
                }
                setAlertType('error')
            }
        }
    }

    const claimTrialDialog = (): Promise<boolean | null> => {
        return new Promise((resolve) => {
            setActivated(true)
            resolve(true)
        })
    }

    return (
        <>
            <IconContainer className="flex flex-col items-center" onClick={() => handleClaimTrial()}>
                <MoneyOff sx={{ fontSize: '36px' }} />
            </IconContainer>
            <span className="content-body text-center text-base">Claim Trial</span>
        </>
    )
}
