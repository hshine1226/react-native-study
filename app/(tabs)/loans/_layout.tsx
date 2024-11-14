import { Stack } from 'expo-router'

export default function LoansLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: '대출신청서 목록',
                    headerShown: true
                }}
            />
            <Stack.Screen
                name="[id]"
                options={{
                    title: '대출신청서 상세',
                    headerShown: true
                }}
            />
        </Stack>
    )
}
