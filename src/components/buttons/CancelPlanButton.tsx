import { CancelPlanAlert } from '@/components/alerts'
import { IconContainer } from '@/components/ui/index'
import { apiService } from '@/services/apiService'
import { CancelPlanType, ChangePlanType, OwnerData, WarningType } from '@/types/mainTypes'
import { Cancel } from '@mui/icons-material'
import React, { useState } from 'react'

interface CancelPlanButtonProps {
    ownerData: OwnerData | null
    id: string
    setNewAlert: React.Dispatch<React.SetStateAction<string | null>>
    setAlertType: React.Dispatch<React.SetStateAction<WarningType>>
}

export const CancelPlanButton: React.FC<CancelPlanButtonProps> = ({ ownerData, id, setNewAlert, setAlertType }) => {
    const [cancelPlan, setCancelPlan] = useState<CancelPlanType | null>(null)
    const [cancellingPlan, setCancellingPlan] = useState(false)

    const handleCancelPlan = async () => {
        setCancellingPlan(true)
        const cancelPlan = await cancelPlanDialog()

        if (cancelPlan === 'success') {
            try {
                await apiService.cancelPlan(id)

                setNewAlert('Plan cancelled successfully')
                setAlertType('alert')
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setNewAlert(err.message)
                } else {
                    setNewAlert("Unknown error occurred")
                }
                setAlertType('error')
            }
        }
        setCancellingPlan(false)
    }

    const cancelPlanDialog = (): Promise<string | null> => {
        return new Promise((resolve) => {
            setCancelPlan({
                onConfirm: () => {
                    setCancelPlan(null)
                    resolve('success')
                },
                onCancel: () => {
                    setCancelPlan(null)
                    resolve(null)
                },
            })
        })
    }

    return (
        <>
            {cancelPlan && ownerData && (
                <CancelPlanAlert ownerData={ownerData} isOpen={!!cancelPlan} onClose={cancelPlan.onCancel} onConfirm={cancelPlan.onConfirm}></CancelPlanAlert>
            )}
            <IconContainer className="flex flex-col items-center" onClick={() => handleCancelPlan()}>
                <Cancel sx={{ fontSize: '36px' }} />
            </IconContainer>
            <span className="content-body text-center text-base">Cancel Plan</span>
        </>
    )
}
