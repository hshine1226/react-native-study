import { useQuery } from '@tanstack/react-query'
import { loanAPI } from '@/services/api/loans'

export function useLoanDetail(serialNumber: string) {
    return useQuery({
        queryKey: ['loan', serialNumber],
        queryFn: () => loanAPI.getLoanDetail(serialNumber),
        enabled: !!serialNumber
    })
}
