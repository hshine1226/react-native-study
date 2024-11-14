import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { QUERY_LOAN_REQUESTS } from './queries'
import {
    QueryLoanRequestsFilters,
    QueryLoanRequestsResponse
} from '../types/loans'

const httpLink = createHttpLink({
    uri: 'http://localhost:8000/graphql'
})

const authLink = setContext((_, { headers }) => {
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NCIsImNvbXBhbnlJZCI6InZvcyIsImlzU3Vic2NyaWJlZCI6ZmFsc2UsInJlZ3VsYXJQYXltZW50RGF0ZSI6bnVsbCwic3Vic2NyaXB0aW9uVHlwZSI6Iuq4sOyXheygle2ajOybkCIsImlzUmVhbEVzdGF0ZUFnZW50IjpmYWxzZSwiaXNGaW5hbmNpYWxJbnN0aXR1dGlvblVzZXIiOmZhbHNlLCJkZXZpY2VJZCI6IjY1NTY4NmE1OTlhMyIsImlzVm9zIjp0cnVlLCJpYXQiOjE3MzE1NTE3MzgsImV4cCI6MTczMTU1MjYzOCwiaXNzIjoidmFsdWVvZnNwYWNlIn0.Qg5roLbq6OAf1BgU6BDHwfDu0UK3dKUYT7lDut2FmTU'

    return {
        headers: {
            ...headers,
            authorization: `Bearer ${token}`
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
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
