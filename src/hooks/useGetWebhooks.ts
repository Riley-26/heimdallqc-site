import { useQuery } from '@tanstack/react-query'

export function useGetWebhooks() {
    return useQuery({
        queryKey: ['webhookData'],
        queryFn: async () => {
            try {
                const webhooks = await fetch("/api/webhooks/self")
                const webhooksResponse = await webhooks.json()
                if (!webhooks.ok) throw new Error(webhooksResponse.message)

                return webhooksResponse.webhooks
            } catch (err: unknown) {
                if (err instanceof Error) {
                    return Error(err.message)
                } else {
                    return Error('An unknown error occurred')
                }
            }
        },
        staleTime: 5 * 60 * 1000, // 5 minutes - data stays fresh
        gcTime: 10 * 60 * 1000, // 10 minutes - how long to keep in cache
    })
}
