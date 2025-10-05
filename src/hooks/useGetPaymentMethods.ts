import { useQuery } from '@tanstack/react-query'

export function useGetPaymentMethods() {
    return useQuery({
        queryKey: ['paymentMethods'],
        queryFn: async () => {
            try {
                const methods = await fetch('/api/owners/payment-methods/self')
                const methodsResponse = await methods.json()
                if (!methods.ok) throw new Error(methodsResponse.message)

                return methodsResponse.methods
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
