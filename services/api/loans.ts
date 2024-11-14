import { ApolloClient, InMemoryCache } from '@apollo/client'
import { QUERY_LOAN_REQUESTS } from './queries'
import {
    QueryLoanRequestsFilters,
    QueryLoanRequestsResponse
} from '../types/loans'

const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql',
    cache: new InMemoryCache()
})

export const loanAPI = {
    getLoans: async (filters: QueryLoanRequestsFilters) => {
        try {
            const { data } = await client.query<{
                queryLoanRequests: QueryLoanRequestsResponse
            }>({
                query: QUERY_LOAN_REQUESTS,
                variables: { filters }
            })
            return data.queryLoanRequests
        } catch (error) {
            console.error('Failed to fetch loans:', error)
            throw error
        }
    }
}
