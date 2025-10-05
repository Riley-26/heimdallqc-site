import { useQuery } from '@tanstack/react-query'

export function useGetPayments() {
    return useQuery({
        queryKey: ['paymentData'],
        queryFn: async () => {
            try {
                const payments = await fetch('/api/payments/self')
                const paymentsResponse = await payments.json()
                if (!payments.ok) throw new Error(paymentsResponse.message)

                return paymentsResponse.payments
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
