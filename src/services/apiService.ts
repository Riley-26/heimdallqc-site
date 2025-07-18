const API_BASE_URL = 'http://127.0.0.1:8000/api'

type OwnerId = string | undefined

export const apiService = {
    async fetchOwner(ownerId: OwnerId) {
        if (!ownerId) throw new Error('No ID provided')
        const owner = await fetch(`${API_BASE_URL}/owners/${ownerId}`)
        const ownerResponse = await owner.json()
        if (!owner.ok) throw new Error('Failed to fetch owner')

        return ownerResponse
    },

    async fetchEntries(ownerId: OwnerId) {
        if (!ownerId) throw new Error('No ID provided')
        const entries = await fetch(`${API_BASE_URL}/owners/${ownerId}/submissions`)
        const entriesResponse = await entries.json()
        if (!entries.ok) throw new Error('Failed to fetch entries')

        return entriesResponse
    },

    async uploadEntry(ownerId: OwnerId, text: string, keyId: string | undefined) {
        if (!ownerId) throw new Error('No ID provided')
        if (text.length < 10) throw new Error('Invalid text, text must be longer than 10 characters')
        if (!keyId) throw new Error('No key selected')
        const upload = await fetch(`${API_BASE_URL}/upload-submission`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                owner_id: ownerId,
                key_id: keyId,
                orig_text: text,
            }),
        })
        const uploadResponse = await upload.json()
        if (!upload.ok) throw new Error('Failed to upload text')

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
                owner_id: ownerId,
                submission_id: entryId,
            }),
        })
        const deletionResponse = await deletion.json()
        if (!deletion.ok) throw new Error("Failed to delete this submission's record")

        return deletionResponse
    },

    async fetchEntryDetails(ownerId: OwnerId, entryId: string) {
        if (!ownerId) throw new Error('No ID provided')
        const fullEntry = await fetch(`${API_BASE_URL}/owners/${ownerId}/submissions/${entryId}`)
        const fullEntryResponse = await fullEntry.json()
        if (!fullEntry.ok) throw new Error("Failed to get this entry's details")

        return fullEntryResponse
    },

    async applyEdit(ownerId: OwnerId, entryId: string, text: string) {
        if (!ownerId) throw new Error('No ID provided')
        const apply = await fetch(`${API_BASE_URL}/owners/${ownerId}/submissions/${entryId}/edit-submission`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                id: entryId,
                owner_id: ownerId,
                new_text: text,
            }),
        })
        const applyResponse = await apply.json()
        if (!apply.ok) throw new Error('Failed to apply edits')

        return applyResponse
    },

    async fetchKeys(ownerId: OwnerId) {
        if (!ownerId) throw new Error('No ID provided')
        const keys = await fetch(`${API_BASE_URL}/owners/${ownerId}/api-key`)
        const keysResponse = await keys.json()
        if (!keys.ok) throw new Error('Failed to fetch keys')

        return keysResponse
    },

    async createKey(ownerId: OwnerId, keyName: string) {
        if (!ownerId) throw new Error('No ID provided')
        const keyCreate = await fetch(`${API_BASE_URL}/owners/${ownerId}/api-keys`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                owner_id: ownerId,
                name: keyName,
            }),
        })
        const keyCreateResponse = await keyCreate.json()
        if (!keyCreate.ok) throw new Error('Failed to create key')

        return keyCreateResponse
    },

    async deleteKey(ownerId: OwnerId, keyId: string) {
        if (!ownerId) throw new Error('No ID provided')
        const deletion = await fetch(`${API_BASE_URL}/api-keys/${keyId}/delete-key`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                owner_id: ownerId,
            }),
        })
        const deletionResponse = await deletion.json()
        if (!deletion.ok) throw new Error('Failed to delete key')

        return deletionResponse
    },

    async buyTokens() {},

    async changePlan() {},

    async saveSettings(ownerId: OwnerId, functionPrefs: object, uiPrefs: object) {
        if (!ownerId) throw new Error('No ID provided')
        const save = await fetch(`${API_BASE_URL}/owners/update-settings`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                id: ownerId,
                function_pref: functionPrefs,
                ui_pref: uiPrefs,
            }),
        })
        const saveResponse = await save.json()
        if (!save.ok) throw new Error('Failed to save settings')

        return saveResponse
    },

    async startAudit() {},
}
