import { ChangePlanAlert } from '@/components/alerts'
import { IconContainer } from '@/components/ui/index'
import { apiService } from '@/services/apiService'
import { ChangePlanType, OwnerData, WarningType } from '@/types/mainTypes'
import { ChangeCircleOutlined } from '@mui/icons-material'
import React, { useState } from 'react'

interface ChangePlanButtonProps {
    ownerData: OwnerData | null
    id: string | undefined
    setNewAlert: React.Dispatch<React.SetStateAction<string | null>>
    setAlertType: React.Dispatch<React.SetStateAction<WarningType>>
}

export const ChangePlanButton: React.FC<ChangePlanButtonProps> = ({ ownerData, id, setNewAlert, setAlertType }) => {
    const [changePlan, setChangePlan] = useState<ChangePlanType | null>(null)
    const [changingPlan, setChangingPlan] = useState(false)

    const handleChangePlan = async () => {
        setChangingPlan(true)
        const selectedPlan = await changePlanDialog()

        if (selectedPlan) {
            try {
                // TAKE PAYMENT

                await apiService.changePlan(id, selectedPlan)

                setNewAlert('Plan changed successfully')
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
        setChangingPlan(false)
    }

    const changePlanDialog = (): Promise<string | null> => {
        return new Promise((resolve) => {
            setChangePlan({
                onConfirm: (selectedPlan: string | null) => {
                    setChangePlan(null)
                    resolve(selectedPlan)
                },
                onCancel: () => {
                    setChangePlan(null)
                    resolve(null)
                },
            })
        })
    }

    return (
        <>
            {changePlan && ownerData && (
                <ChangePlanAlert ownerData={ownerData} isOpen={!!changePlan} onClose={changePlan.onCancel} onConfirm={changePlan.onConfirm}></ChangePlanAlert>
            )}
            <IconContainer onClick={() => handleChangePlan()}>
                <ChangeCircleOutlined sx={{ fontSize: '36px' }} />
            </IconContainer>
            <span className="content-body text-base">Change Plan</span>
        </>
    )
}
