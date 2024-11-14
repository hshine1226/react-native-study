import { QUERY_LOAN_REQUEST, QUERY_LOAN_REQUESTS } from './queries'
import {
    QueryLoanRequestsFiltersInput,
    QueryLoanRequestsReturn
} from '../generated/graphql'
import { apolloClient } from './apollo'

export const loanAPI = {
    getLoans: async (filters: QueryLoanRequestsFiltersInput) => {
        try {
            const { data } = await apolloClient.query<{
                queryLoanRequests: QueryLoanRequestsReturn
            }>({
                query: QUERY_LOAN_REQUESTS,
                variables: { filters }
            })
            return {
                data: data.queryLoanRequests.data,
                meta: data.queryLoanRequests.meta
            }
        } catch (error) {
            console.error('Failed to fetch loans:', error)
            throw error
        }
    },
    getLoanDetail: async (serialNumber: string) => {
        try {
            const { data } = await apolloClient.query<{
                queryLoanRequest: any
            }>({
                query: QUERY_LOAN_REQUEST,
                variables: {
                    serialNumber,
                    isInitialRequest: false
                }
            })
            return data.queryLoanRequest
        } catch (error) {
            console.error('Failed to fetch loan detail:', error)
            throw error
        }
    }
}
