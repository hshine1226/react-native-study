import * as SecureStore from 'expo-secure-store'

const TOKEN_KEY = 'your_token_key'

export const tokenStorage = {
    async saveToken(token: string) {
        try {
            await SecureStore.setItemAsync(TOKEN_KEY, token)
        } catch (error) {
            console.error('Token 저장 실패:', error)
        }
    },

    async getToken(): Promise<string | null> {
        try {
            return await SecureStore.getItemAsync(TOKEN_KEY)
        } catch (error) {
            console.error('Token 조회 실패:', error)
            return null
        }
    },

    async removeToken() {
        try {
            await SecureStore.deleteItemAsync(TOKEN_KEY)
        } catch (error) {
            console.error('Token 삭제 실패:', error)
        }
    }
}
