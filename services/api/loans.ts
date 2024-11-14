import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { QUERY_LOAN_REQUESTS } from './queries'
import {
    QueryLoanRequestsFiltersInput,
    QueryLoanRequestsReturn
} from '../generated/graphql'

const httpLink = createHttpLink({
    uri: 'http://localhost:8000/graphql'
})

const authLink = setContext((_, { headers }) => {
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NCIsImNvbXBhbnlJZCI6InZvcyIsImlzU3Vic2NyaWJlZCI6ZmFsc2UsInJlZ3VsYXJQYXltZW50RGF0ZSI6bnVsbCwic3Vic2NyaXB0aW9uVHlwZSI6Iuq4sOyXheygle2ajOybkCIsImlzUmVhbEVzdGF0ZUFnZW50IjpmYWxzZSwiaXNGaW5hbmNpYWxJbnN0aXR1dGlvblVzZXIiOmZhbHNlLCJkZXZpY2VJZCI6IjY1NTY4NmE1OTlhMyIsImlzVm9zIjp0cnVlLCJpYXQiOjE3MzE1NTI2MzgsImV4cCI6MTczMTU1MzUzOCwiaXNzIjoidmFsdWVvZnNwYWNlIn0.r7PxrZjxmsVUzECFdGFHq-TiFkmH-THnYFDnq-WFLic'

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
    getLoans: async (filters: QueryLoanRequestsFiltersInput) => {
        try {
            const { data } = await client.query<{
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
    }
}
