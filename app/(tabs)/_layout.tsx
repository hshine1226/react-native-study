import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#007AFF',
                tabBarInactiveTintColor: 'gray'
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: '홈',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="loans"
                options={{
                    title: '대출',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="cash" size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: '프로필',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" size={size} color={color} />
                    )
                }}
            />
        </Tabs>
    )
}
