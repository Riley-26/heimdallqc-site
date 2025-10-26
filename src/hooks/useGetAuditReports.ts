import { useQuery } from '@tanstack/react-query'

export function useGetAuditReports() {
    return useQuery({
        queryKey: ['auditReports'],
        queryFn: async () => {
            try {
                const reports = await fetch('/api/audit-reports/self')
                const reportsResponse = await reports.json()
                if (!reports.ok) throw new Error(reportsResponse.message)

                return reportsResponse.reports
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
