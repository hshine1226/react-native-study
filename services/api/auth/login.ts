import { tokenStorage } from '../utils/tokenStorage'

interface LoginResponse {
    token: string
    // 기타 응답 데이터...
}

export const login = async (username: string, password: string) => {
    try {
        // 로그인 API 호출
        const response = await fetch('YOUR_LOGIN_API_URL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })

        const data: LoginResponse = await response.json()

        // 토큰 저장
        if (data.token) {
            await tokenStorage.saveToken(data.token)
        }

        return data
    } catch (error) {
        console.error('로그인 실패:', error)
        throw error
    }
}
