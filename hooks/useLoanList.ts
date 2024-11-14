import { useInfiniteQuery } from '@tanstack/react-query'
import { loanAPI } from '@/services/api/loans'
import { QueryLoanRequestsFiltersInput } from '@/services/generated/graphql'

export function useLoanList(
    filters: Partial<QueryLoanRequestsFiltersInput> = {}
) {
    return useInfiniteQuery({
        queryKey: ['loans', filters],
        initialPageParam: 1,
        queryFn: ({ pageParam }) =>
            loanAPI.getLoans({
                currentPage: pageParam,
                itemPerPage: 10,
                ...filters
            }),
        getNextPageParam: lastPage =>
            lastPage.meta.currentPage < lastPage.meta.totalPages
                ? lastPage.meta.currentPage + 1
                : undefined
    })
}
