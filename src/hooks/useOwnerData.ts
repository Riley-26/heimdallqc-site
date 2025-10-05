import { useQuery } from '@tanstack/react-query'

export function useOwnerData() {
    return useQuery({
        queryKey: ['ownerData'],
        queryFn: async () => {
            try {
                const owner = await fetch("/api/owners/self/detailed")
                const ownerResponse = await owner.json()
                if (!owner.ok) throw new Error(ownerResponse.message)

                return ownerResponse.owner
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
