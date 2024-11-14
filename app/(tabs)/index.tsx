import { View, Text } from 'react-native'
import tw from '@/utils/tw'

export default function HomeScreen() {
    return (
        <View style={tw`flex-1 justify-center items-center`}>
            <Text style={tw`text-xl font-bold`}>홈 화면</Text>
        </View>
    )
}
