export type WarningType = 'error' | 'caution' | 'alert'

export type BuyTokensType = {
    onConfirm: (arg0: string | null) => void
    onCancel: () => void
}

export type CancelPlanType = {
    onConfirm: () => void
    onCancel: () => void
}

export type ChangePlanType = {
    onConfirm: (arg0: string | null) => void
    onCancel: () => void
}

export type ConfirmType = {
    title: string
    message: string
    onConfirm: () => void
    onCancel: () => void
}

export interface OwnerData {
    plan: {
        name: string
        price: number
        [key: string]: unknown
    }
    current_tokens: number
    watermarks_made: number
    plagiarisms_prevented: number
    tokens_used: number
    verified_month_end: string
    [key: string]: unknown
}

export interface OwnerKey {
    id: string
    name: string
    is_active: boolean
}

export interface Entry {
    id: string | number
    ai_result: {
        score: number
        [key: string]: unknown
    }
    plag_result: {
        score: number
        [key: string]: unknown
    }
    [key: string]: unknown
}