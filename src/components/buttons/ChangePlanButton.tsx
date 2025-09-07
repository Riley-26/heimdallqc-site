import { ChangePlanAlert } from '@/components/alerts'
import { IconContainer } from '@/components/ui/index'
import { apiService } from '@/services/apiService'
import { ChangePlanType, OwnerData, WarningType } from '@/types/mainTypes'
import { ChangeCircleOutlined } from '@mui/icons-material'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'

interface ChangePlanButtonProps {
    ownerData: OwnerData | null
    setNewAlert: React.Dispatch<React.SetStateAction<string | null>>
    setAlertType: React.Dispatch<React.SetStateAction<WarningType>>
}

const subIds: Record<string, string> = {
    "Extrinsic": "price_1RvgtBR9LI2BudDrjnZpax1X",
    "Intrinsic": "price_1Rvh1DR9LI2BudDrp05uZgkV",
    "Combo": "price_1Rvh1SR9LI2BudDrHW0tFWz9"
}

export const ChangePlanButton: React.FC<ChangePlanButtonProps> = ({ ownerData, setNewAlert, setAlertType }) => {
    const { data: session, status } = useSession()
    const [changePlan, setChangePlan] = useState<ChangePlanType | null>(null)
    const [changingPlan, setChangingPlan] = useState(false)

    const handleChangePlan = async () => {
        setChangingPlan(true)
        const selectedPlan = await changePlanDialog()

        if (selectedPlan) {
            try {
                // TAKE PAYMENT
                if (ownerData?.is_verified) {
                    const plan = await fetch("/api/payments/change-plan", {
                        method: "PATCH",
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify({
                            newPlanId: subIds[selectedPlan]
                        })
                    })
                    const planResponse = await plan.json()
                    if (!plan.ok) throw new Error(planResponse.message)
                } else {
                    const session = await fetch("/api/payments/create-session", {
                        method: "POST",
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify({
                            priceId: subIds[selectedPlan],
                            successUrl: window.location.href,
                            purchaseType: 'subscription',
                            name: selectedPlan
                        })
                    })
                    const sessionResponse = await session.json()
                    if (!session.ok) throw new Error(sessionResponse.message)
                    if (sessionResponse.session && Object.keys(sessionResponse.session).includes("session_url")) window.open(sessionResponse.session["session_url"], '_blank')
                }

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
            <IconContainer className="flex flex-col items-center" onClick={() => handleChangePlan()}>
                <ChangeCircleOutlined sx={{ fontSize: '36px' }} />
            </IconContainer>
            <span className="content-body text-center text-base">Change Plan</span>
        </>
    )
}
