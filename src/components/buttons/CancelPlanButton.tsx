import { ChangePlanAlert, CancelPlanAlert } from '@/components/alerts'
import { IconContainer } from '@/components/ui/index'
import { apiService } from '@/services/apiService'
import { Cancel, ChangeCircleOutlined } from '@mui/icons-material'
import React, { useState } from 'react'

interface CancelPlanButtonProps {
    ownerData: any
    id: string | undefined
    setNewAlert: any
    setAlertType: any
}

export const CancelPlanButton: React.FC<CancelPlanButtonProps> = ({ ownerData, id, setNewAlert, setAlertType }) => {
    const [cancelPlan, setCancelPlan] = useState<any>(null)
    const [cancellingPlan, setCancellingPlan] = useState(false)

    const handleCancelPlan = async () => {
        setCancellingPlan(true)
        const cancelPlan = await cancelPlanDialog()

        if (cancelPlan === "success") {
            try {
                const planCancelled = await apiService.cancelPlan(id)
    
                setNewAlert('Plan cancelled successfully')
                setAlertType('alert')
            } catch (err: any) {
                setNewAlert(err.message)
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
                    resolve("success")
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
                <CancelPlanAlert ownerData={ownerData} isOpen={cancelPlan} onClose={cancelPlan.onCancel} onConfirm={cancelPlan.onConfirm}></CancelPlanAlert>
            )}
            <IconContainer onClick={() => handleCancelPlan()}>
                <Cancel sx={{ fontSize: '36px' }} />
            </IconContainer>
            <span>Cancel Plan</span>
        </>
    )
}
