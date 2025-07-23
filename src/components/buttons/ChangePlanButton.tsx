import { ChangePlanAlert } from '@/components/alerts'
import { IconContainer } from '@/components/ui/index'
import { apiService } from '@/services/apiService'
import { ChangeCircleOutlined } from '@mui/icons-material'
import React, { useState } from 'react'

interface ChangePlanButtonProps {
    ownerData: any
    id: string | undefined
    setNewAlert: any
    setAlertType: any
}

export const ChangePlanButton: React.FC<ChangePlanButtonProps> = ({ ownerData, id, setNewAlert, setAlertType }) => {
    const [changePlan, setChangePlan] = useState<any>(null)
    const [changingPlan, setChangingPlan] = useState(false)

    const handleChangePlan = async () => {
        setChangingPlan(true)
        const selectedPlan = await changePlanDialog()

        if (selectedPlan) {
            try {
                // TAKE PAYMENT

                const planChanged = await apiService.changePlan(id, selectedPlan)

                setNewAlert('Plan changed successfully')
                setAlertType('alert')
            } catch (err: any) {
                setNewAlert(err.message)
                setAlertType('error')
            }
        }
        setChangingPlan(false)
    }

    const changePlanDialog = (): Promise<string | null> => {
        return new Promise((resolve) => {
            setChangePlan({
                onConfirm: (selectedPlan: string) => {
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
                <ChangePlanAlert ownerData={ownerData} isOpen={changePlan} onClose={changePlan.onCancel} onConfirm={changePlan.onConfirm}></ChangePlanAlert>
            )}
            <IconContainer onClick={() => handleChangePlan()}>
                <ChangeCircleOutlined sx={{ fontSize: '36px' }} />
            </IconContainer>
            <span className="content-body text-base">Change Plan</span>
        </>
    )
}
