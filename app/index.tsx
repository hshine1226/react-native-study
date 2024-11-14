import { View, Text, Image } from 'react-native'
import { useEffect } from 'react'
import { useRouter } from 'expo-router'
import tw from '@/utils/tw'
import { LinearGradient } from 'expo-linear-gradient'

export default function SplashScreen() {
    const router = useRouter()

    useEffect(() => {
        // 2초 후에 홈 화면으로 이동
        const timer = setTimeout(() => {
            router.replace('/(tabs)')
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <LinearGradient
            colors={['#3B82F6', '#2563EB']} // blue-500 to blue-600
            style={tw`flex-1 justify-center items-center`}
        >
            {/* 로고 이미지가 있다면 Image 컴포넌트로 교체 */}
            <View style={tw`items-center`}>
                <Text style={tw`text-4xl font-bold text-white mb-2`}>
                    파이퍼 대시보드
                </Text>
                <Text style={tw`text-white text-lg`}>
                    금융기관 파이퍼 대시보드
                </Text>
            </View>
        </LinearGradient>
    )
}
