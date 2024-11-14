import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { tokenStorage } from '../utils/tokenStorage'

const httpLink = createHttpLink({
    uri: 'http://localhost:8000/graphql'
})

const authLink = setContext(async (_, { headers }) => {
    await tokenStorage.saveToken(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NCIsImNvbXBhbnlJZCI6InZvcyIsImlzU3Vic2NyaWJlZCI6ZmFsc2UsInJlZ3VsYXJQYXltZW50RGF0ZSI6bnVsbCwic3Vic2NyaXB0aW9uVHlwZSI6Iuq4sOyXheygle2ajOybkCIsImlzUmVhbEVzdGF0ZUFnZW50IjpmYWxzZSwiaXNGaW5hbmNpYWxJbnN0aXR1dGlvblVzZXIiOmZhbHNlLCJkZXZpY2VJZCI6IjY1NTY4NmE1OTlhMyIsImlzVm9zIjp0cnVlLCJpYXQiOjE3MzE1Njk0OTgsImV4cCI6MTczMTU3MDM5OCwiaXNzIjoidmFsdWVvZnNwYWNlIn0.9m7aLdSTZ4ZKbYWZQIDBceFhMuSpyia3V-LojNiPOLo'
    )
    // 저장된 토큰 가져오기
    const token = await tokenStorage.getToken()

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
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
