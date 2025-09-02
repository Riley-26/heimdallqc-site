import { JwtType } from "@/middleware"
import { Session } from "next-auth"

const API_BASE_URL = 'http://127.0.0.1:8000/api/v1'
const HEALTH_URL = 'http://127.0.0.1:8000'
// const API_BASE_URL = 'https://meticulous-blessing-production.up.railway.app/api/v1'
// const HEALTH_URL = 'https://meticulous-blessing-production.up.railway.app'

type OwnerId = string | undefined

type Credentials = Record<"email" | "password", string>

export const apiService = {

    // HEALTH

    async healthCheck() {
        const status = await fetch(`${HEALTH_URL}/`)
        const statusResponse = await status.json()
        if (!status.ok) throw new Error('API unavailable')

        return statusResponse
    },

    async getSiteStatus() {
        const siteStatus = await fetch(`${API_BASE_URL}/site-status`)
        const siteStatusResponse = await siteStatus.json()
        if (!siteStatus.ok) throw new Error('Failed to fetch service status')

        return siteStatusResponse
    },

    // -- OWNER ENDPOINTS

    async loginOwner(credentials: Credentials) {
        const login = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
            }),
        })
        const loginResponse = await login.json()
        if (!login.ok) throw new Error('Failed to login')

        return loginResponse
    },

    async createOwner(email: string, name: string, company: string, domain: string, password: string) {
        const newOwner = await fetch(`${API_BASE_URL}/owners`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                name: name,
                company: company,
                domain: domain,
                password: password,
            }),
        })
        const newOwnerResponse = await newOwner.json()
        if (!newOwner.ok) throw new Error('Failed to create owner')

        return newOwnerResponse
    },

    async fetchOwner(jwt: string) {
        if (!jwt) throw new Error('No JWT provided')
        const owner = await fetch(`${API_BASE_URL}/owners/self`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        })
        const ownerResponse = await owner.json()
        if (!owner.ok) throw new Error('Failed to fetch owner')

        return ownerResponse
    },

    async fetchOwnerDetailed(jwt: string) {
        if (!jwt) throw new Error('No JWT provided')
        const owner = await fetch(`${API_BASE_URL}/owners/self/detailed`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        })
        const ownerResponse = await owner.json()
        if (!owner.ok) throw new Error('Failed to fetch owner')

        return ownerResponse
    },

    async changePlan(ownerId: OwnerId, newPlanId: string | undefined, prorate: boolean) {
        if (!ownerId) throw new Error('No ID provided')
        if (!newPlanId) throw new Error('No plan provided')
        const planChange = await fetch(`${API_BASE_URL}/owners/update-plan`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                owner_unique_id: ownerId,
                new_plan_id: newPlanId,
                prorate: prorate
            }),
        })
        const planChangeResponse = await planChange.json()
        if (!planChange.ok) throw new Error('Failed to change plan')

        return planChangeResponse
    },

    async cancelPlan(ownerId: OwnerId, isImmediateCancel: boolean) {
        if (!ownerId) throw new Error('No ID provided')
        const planCancel = await fetch(`${API_BASE_URL}/owners/cancel-plan`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                owner_unique_id: ownerId,
                is_immediate_cancel: isImmediateCancel
            }),
        })
        const planCancelResponse = await planCancel.json()
        if (!planCancel.ok) throw new Error('Failed to cancel plan')

        return planCancelResponse
    },

    async saveSettings(ownerId: OwnerId, functionPrefs: object, uiPrefs: object, aiThreshold: number | undefined) {
        if (!ownerId) throw new Error('No ID provided')
        const save = await fetch(`${API_BASE_URL}/owners/update-settings`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                owner_unique_id: ownerId,
                function_pref: functionPrefs,
                ui_pref: uiPrefs,
                ai_threshold_option: aiThreshold,
            }),
        })
        const saveResponse = await save.json()
        if (!save.ok) throw new Error('Failed to save settings')

        return saveResponse
    },

    // -- INVOICES/PAYMENT METHODS

    async fetchInvoices(jwt: string) {
        if (!jwt) throw new Error('No JWT provided')
        const invoices = await fetch(`${API_BASE_URL}/owners/invoices/self`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        })
        const invoicesResponse = await invoices.json()
        if (!invoices.ok) throw new Error('Failed to fetch invoices')

        return invoicesResponse
    },

    async fetchPaymentMethods(jwt: string) {
        if (!jwt) throw new Error('No JWT provided')
        const methods = await fetch(`${API_BASE_URL}/owners/payment-methods/self`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        })
        const methodsResponse = await methods.json()
        if (!methods.ok) throw new Error('Failed to fetch payment methods')

        return methodsResponse
    },

    async deletePaymentMethod(jwt: string, pmId: string) {
        if (!jwt) throw new Error("No ID provided")
        if (!pmId) throw new Error("No payment method provided")
        const deletion = await fetch(`${API_BASE_URL}/owners/payment-methods/delete-payment-method`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
            body: JSON.stringify({
                payment_method_id: pmId
            })
        })
        const deletionResponse = await deletion.json()
        if (!deletion.ok) throw new Error("Failed to delete this payment method")

        return deletionResponse
    },

    // -- PAYMENTS

    async createPaymentSession(ownerId: OwnerId, priceId: string, successUrl: string, purchaseType: 'subscription' | 'one_off', name: string) {
        if (!priceId) throw new Error("No price ID found")
        const paymentSession = await fetch(`${API_BASE_URL}/payments/create-payment-session`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                owner_unique_id: ownerId,
                price_id: priceId,
                success_url: successUrl,
                payment_type: purchaseType,
                name: name
            })
        })
        const paymentSessionResponse = await paymentSession.json()
        if (!paymentSession.ok) throw new Error('Failed to create payment session')
        return paymentSessionResponse
    },

    // -- ENTRIES

    async fetchEntries(jwt: string) {
        if (!jwt) throw new Error()
        const entries = await fetch(`${API_BASE_URL}/submissions/self`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        })
        const entriesResponse = await entries.json()
        if (!entries.ok) throw new Error()

        return entriesResponse
    },

    async fetchEntryDetails(jwt: string, entryId: string) {
        if (!jwt) throw new Error()
        const fullEntry = await fetch(`${API_BASE_URL}/submissions/${entryId}`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        })
        const fullEntryResponse = await fullEntry.json()
        if (!fullEntry.ok) throw new Error()

        return fullEntryResponse
    },

    async uploadEntry(ownerId: OwnerId, text: string, keyId: string | undefined) {
        if (!ownerId) throw new Error('No ID provided')
        if (!text || text.length < 10) throw new Error('Invalid text, must be longer than 10 characters')
        if (!keyId) throw new Error('Please select a key')
        const upload = await fetch(`${API_BASE_URL}/upload-submission`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                owner_unique_id: ownerId,
                api_key_id: keyId,
                orig_text: text
            }),
        })
        const uploadResponse = await upload.json()
        if (!upload.ok) throw new Error(`Failed to upload text. ${uploadResponse["detail"]}`)

        return uploadResponse
    },

    async deleteEntry(ownerId: OwnerId, entryId: string) {
        if (!ownerId) throw new Error('No ID provided')
        if (!entryId) throw new Error('No Submission ID provided')
        const deletion = await fetch(`${API_BASE_URL}/owners/${ownerId}/submissions/${entryId}/delete-submission`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                owner_unique_id: ownerId,
                submission_id: entryId,
            })
        })
        const deletionResponse = await deletion.json()
        if (!deletion.ok) throw new Error("Failed to delete this submission's record")

        return deletionResponse
    },

    async applyEdit(ownerId: OwnerId, entryId: string, text: string) {
        if (!ownerId) throw new Error('No ID provided')
        if (!entryId) throw new Error('No entry ID provided')
        if (text.length < 10) throw new Error('Invalid text, must be longer than 10 characters')
        const apply = await fetch(`${API_BASE_URL}/owners/${ownerId}/submissions/${entryId}/edit-submission`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                entry_id: entryId,
                owner_unique_id: ownerId,
                edit_text: text,
            }),
        })
        const applyResponse = await apply.json()
        if (!apply.ok) throw new Error('Failed to apply edits')

        return applyResponse
    },

    // -- KEYS

    async fetchKeys(jwt: string) {
        if (!jwt) throw new Error()
        const keys = await fetch(`${API_BASE_URL}/api-keys/self`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        })
        const keysResponse = await keys.json()
        if (!keys.ok) throw new Error()

        return keysResponse
    },

    async createKey(ownerId: OwnerId, keyName: string | undefined) {
        if (!ownerId) throw new Error('No ID provided')
        if (!keyName) throw new Error('No Key name provided')
        const keyCreate = await fetch(`${API_BASE_URL}/api-keys`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                owner_unique_id: ownerId,
                name: keyName,
            }),
        })
        const keyCreateResponse = await keyCreate.json()
        if (!keyCreate.ok) throw new Error('Failed to create key')

        return keyCreateResponse
    },

    async deleteKey(jwt: string, keyId: number) {
        if (!jwt) throw new Error()
        if (!keyId) throw new Error()

        const deletion = await fetch(`${API_BASE_URL}/api-keys/deactivate-key`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
            body: JSON.stringify({
                api_key_id: keyId
            })
        })
        const deletionResponse = await deletion.json()
        if (!deletion.ok) throw new Error()

        return deletionResponse
    },

    // -- EMAILING

    async sendResetEmail(email: string) {
        if (!email) throw new Error('No email provided')
        if (!email.includes("@")) throw new Error('Please input a valid email')

        const emailSent = await fetch(`${API_BASE_URL}/forgot-password`)
        const emailSentResponse = await emailSent.json()
        if (!emailSent.ok) throw new Error(emailSentResponse.message)

        return emailSentResponse
    },

    async resetPassword(email: string, token: string, newPassword: string) {
        if (!email) throw new Error('No email provided')
        if (!token) throw new Error('No token provided')
        if (!newPassword) throw new Error('No password provided')

        const reset = await fetch(`${API_BASE_URL}/reset-password`)
        const resetResponse = await reset.json()
        if (!reset.ok) throw new Error(resetResponse.message)

        return resetResponse
    },

    // -- SERVICES

    async startAudit() {},
}
