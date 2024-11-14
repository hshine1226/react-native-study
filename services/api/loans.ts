import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { QUERY_LOAN_REQUESTS, QUERY_LOAN_REQUEST } from './queries'
import {
    QueryLoanRequestsFiltersInput,
    QueryLoanRequestsReturn
} from '../generated/graphql'

const httpLink = createHttpLink({
    uri: 'http://localhost:8000/graphql'
})

const authLink = setContext((_, { headers }) => {
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NCIsImNvbXBhbnlJZCI6InZvcyIsImlzU3Vic2NyaWJlZCI6ZmFsc2UsInJlZ3VsYXJQYXltZW50RGF0ZSI6bnVsbCwic3Vic2NyaXB0aW9uVHlwZSI6Iuq4sOyXheygle2ajOybkCIsImlzUmVhbEVzdGF0ZUFnZW50IjpmYWxzZSwiaXNGaW5hbmNpYWxJbnN0aXR1dGlvblVzZXIiOmZhbHNlLCJkZXZpY2VJZCI6IjY1NTY4NmE1OTlhMyIsImlzVm9zIjp0cnVlLCJpYXQiOjE3MzE1NjExOTYsImV4cCI6MTczMTU2MjA5NiwiaXNzIjoidmFsdWVvZnNwYWNlIn0.YNeHq0asOjBryQhW77eitxGFh-JlBSi6g_jxJL5ZyTQ'

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
    },
    getLoanDetail: async (serialNumber: string) => {
        try {
            const { data } = await client.query<{
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
