import { TextInput, View, TextInputProps } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import tw from '@/utils/tw'

interface SearchBarProps extends TextInputProps {
    style?: any
}

export function SearchBar({ style, ...props }: SearchBarProps) {
    return (
        <View
            style={[
                tw`flex-row items-center bg-white rounded-lg px-4 h-12`,
                style
            ]}
        >
            <Ionicons name="search" size={20} color="#9CA3AF" />
            <TextInput
                {...props}
                style={tw`flex-1 ml-2 text-base`}
                placeholderTextColor="#9CA3AF"
            />
        </View>
    )
}
