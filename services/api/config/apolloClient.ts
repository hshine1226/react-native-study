import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { tokenStorage } from '../utils/tokenStorage'
import { login } from '../auth/login'

const httpLink = createHttpLink({
    uri: 'http://localhost:8000/graphql'
})

const authLink = setContext(async (_, { headers }) => {
    try {
        // 저장된 토큰 가져오기
        let token = await tokenStorage.getToken()

        // 토큰이 없거나 만료된 경우 로그인 시도
        if (!token || (token && tokenStorage.isTokenExpired(token))) {
            console.log('토큰 없음 또는 만료됨. 재로그인 시도...')
            const loginResponse = await login('01066621488', 'rhdrksdmlrkcl!')
            token = loginResponse.access_token
        }

        console.log('🚀 ~ authLink ~ token:', token)
        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : ''
            }
        }
    } catch (error) {
        console.error('인증 처리 실패:', error)
        // 토큰 관련 에러 발생 시 기존 토큰 제거
        await tokenStorage.removeToken()
        return {
            headers: {
                ...headers
            }
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
