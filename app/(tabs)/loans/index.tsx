import { View, FlatList, ActivityIndicator } from 'react-native'
import { useState } from 'react'
import tw from '@/utils/tw'
import { LoanCard } from '@/components/loans/LoanCard'
import { SearchBar } from '@/components/ui/SearchBar'
import { useLoanList } from '@/hooks/useLoanList'

export default function LoansScreen() {
    const [searchQuery, setSearchQuery] = useState('')
    const { data, isLoading, fetchNextPage, hasNextPage } = useLoanList({
        requesterName: searchQuery || undefined
    })

    const loans = data?.pages.flatMap(page => page.data) ?? []

    if (isLoading) {
        return (
            <View style={tw`flex-1 justify-center items-center`}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    return (
        <View style={tw`flex-1 bg-gray-50`}>
            <SearchBar
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder="신청자 이름으로 검색"
                style={tw`mx-4 my-2`}
            />

            <FlatList
                data={loans}
                renderItem={({ item }) => (
                    <LoanCard
                        loan={{
                            id: item.id,
                            serialNumber: item.serialNumber || '',
                            applicantName: item.debtorName || null,
                            applicationDate: item.createdAt,
                            amount: item.loanAmount || null,
                            stateId: item.loanState?.stateId ?? 140,
                            phoneNumber: item.requester?.phoneNumber || null,
                            purpose: item.loanPurpose || null
                        }}
                    />
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={tw`p-4`}
                onEndReached={() => {
                    if (hasNextPage) {
                        fetchNextPage()
                    }
                }}
                onEndReachedThreshold={0.5}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
