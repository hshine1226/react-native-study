import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Stack, Tabs } from 'expo-router'

// Create a client
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5, // 5분
            retry: 1
        }
    }
})

export default function RootLayout() {
    return (
        <QueryClientProvider client={queryClient}>
            <Stack>
                <Stack.Screen
                    name="(tabs)"
                    options={{
                        headerShown: false
                    }}
                />
            </Stack>
        </QueryClientProvider>
    )
}
