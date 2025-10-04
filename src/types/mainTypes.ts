export type WarningType = 'error' | 'caution' | 'alert'

export type BuyTokensType = {
    onConfirm: (arg0: string | null) => void
    onCancel: () => void
}

export type DeleteAccountType = {
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
    name: string
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
    is_verified: boolean
    tokens_threshold: number
    low_tokens_option: boolean
    trial_used: boolean
    cancelled_plan: boolean
    texts_analysed: number
    [key: string]: unknown
}

export interface OwnerKey {
    id: string
    name: string
    is_active: boolean
}

export interface PaymentData {
    amount: number
    status: 'paid'
    created_at: number
    receipt_url: string
}

export interface PaymentMethodData {
    payment_method_id: string
    payment_method_type: string
    card: {
        brand: string
        last4: string
        exp_month: string
        exp_year: string
        [key: string]: unknown
    }
    created_at: number
}

export interface Entry {
    id: string
    unique_id: string
    domain: string
    ai_result: {
        score: number | "N/A"
        [key: string]: unknown
    }
    plag_result: {
        score: number | "N/A"
        result: {
            citations: {
                title: string
                url: string
                [key: string]: unknown
            }[]
            [key: string]: unknown
        }
        [key: string]: unknown
    }
    page_link: string
    edited: boolean
    edited_at: string
    created_at: string
    edit_text: string
    orig_text: string
    edit_text_preview: string
    status: string
    orig_text_preview: string
    manual_upload: boolean
    action_needed: boolean
    function_pref: string
    temp_text: string
    work_id: string
    [key: string]: unknown
}

export interface EntryParams {
    page: number
    filter?: string
    sort?: string
    [key: string]: unknown
}