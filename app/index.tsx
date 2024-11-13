import { View, FlatList } from 'react-native'
import { useState } from 'react'
import tw from '@/utils/tw'
import { LoanCard } from '@/components/loans/LoanCard'
import { mockLoans } from '@/utils/mockData'
import { SearchBar } from '@/components/ui/SearchBar'

export default function LoansScreen() {
    const [searchQuery, setSearchQuery] = useState('')

    const filteredLoans = mockLoans.filter(
        loan =>
            loan.applicantName.includes(searchQuery) ||
            loan.purpose.includes(searchQuery)
    )

    return (
        <View style={tw`flex-1 bg-gray-50`}>
            <SearchBar
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder="이름 또는 용도로 검색"
                style={tw`mx-4 my-2`}
            />

            <FlatList
                data={filteredLoans}
                renderItem={({ item }) => <LoanCard loan={item} />}
                keyExtractor={item => item.id}
                contentContainerStyle={tw`p-4`}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
