import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
    uri: 'http://localhost:8000/graphql'
})

const authLink = setContext((_, { headers }) => {
    // TODO: 실제 환경에서는 안전한 토큰 관리 방식으로 변경 필요
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NCIsImNvbXBhbnlJZCI6InZvcyIsImlzU3Vic2NyaWJlZCI6ZmFsc2UsInJlZ3VsYXJQYXltZW50RGF0ZSI6bnVsbCwic3Vic2NyaXB0aW9uVHlwZSI6Iuq4sOyXheygle2ajOybkCIsImlzUmVhbEVzdGF0ZUFnZW50IjpmYWxzZSwiaXNGaW5hbmNpYWxJbnN0aXR1dGlvblVzZXIiOmZhbHNlLCJkZXZpY2VJZCI6IjY1NTY4NmE1OTlhMyIsImlzVm9zIjp0cnVlLCJpYXQiOjE3MzE1NjU4MzcsImV4cCI6MTczMTU2NjczNywiaXNzIjoidmFsdWVvZnNwYWNlIn0.N3AVhTMKRiJ9rx-8X5ot3Y67TIQRnbp3pk8xTh8AX1c'

    return {
        headers: {
            ...headers,
            authorization: `Bearer ${token}`
        }
    }
})

export const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    // 필요한 경우 캐시 정책 설정
                }
            }
        }
    })
})
