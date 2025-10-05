import { useQuery } from '@tanstack/react-query'

export function useGetKeys() {
    return useQuery({
        queryKey: ['keyData'],
        queryFn: async () => {
            try {
                const keys = await fetch("/api/api-keys/self")
                const keysResponse = await keys.json()
                if (!keys.ok) throw new Error(keysResponse.message)

                return keysResponse.keys
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
