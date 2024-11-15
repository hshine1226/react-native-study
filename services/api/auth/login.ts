import { tokenStorage } from '../utils/tokenStorage'

interface LoginResponse {
    access_token: string
    message: string
}

const LOGIN_API_URL = 'http://localhost:8001/auth/login'

export const login = async (phoneNumber: string, password: string) => {
    try {
        // 로그인 API 호출
        const response = await fetch(LOGIN_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ phoneNumber, password })
        })

        const data: LoginResponse = await response.json()

        // 토큰 저장
        if (data.access_token) {
            await tokenStorage.saveToken(data.access_token)
        }

        return data
    } catch (error) {
        console.error('로그인 실패:', error)
        throw error
    }
}
