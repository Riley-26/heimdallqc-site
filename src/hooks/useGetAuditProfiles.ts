import { useQuery } from '@tanstack/react-query'

export function useGetAuditProfiles() {
    return useQuery({
        queryKey: ['auditProfiles'],
        queryFn: async () => {
            try {
                const profiles = await fetch('/api/audit-profiles/self')
                const profilesResponse = await profiles.json()
                if (!profiles.ok) throw new Error(profilesResponse.message)

                return profilesResponse.profiles
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
