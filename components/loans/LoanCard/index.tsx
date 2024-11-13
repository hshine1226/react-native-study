import { View, Text, Pressable } from 'react-native'
import { useRouter } from 'expo-router'
import tw from '@/utils/tw'
import { Loan } from '@/services/types/loans'
import { formatAmount, formatDate } from '@/utils/format'

interface LoanCardProps {
    loan: Loan
}

export function LoanCard({ loan }: LoanCardProps) {
    const router = useRouter()

    const statusColors = {
        PENDING: 'bg-yellow-100 text-yellow-800',
        APPROVED: 'bg-green-100 text-green-800',
        REJECTED: 'bg-red-100 text-red-800'
    }

    const statusText = {
        PENDING: '심사중',
        APPROVED: '승인',
        REJECTED: '거절'
    }

    return (
        <Pressable
            style={tw`p-4 bg-white mb-4 rounded-xl shadow-sm`}
            onPress={() =>
                router.push({
                    pathname: '/loans/[id]',
                    params: {
                        id: loan.id
                    }
                })
            }
        >
            <View style={tw`flex-row justify-between items-center mb-2`}>
                <Text style={tw`text-lg font-bold`}>{loan.applicantName}</Text>
                <View
                    style={tw`${statusColors[loan.status]} px-2 py-1 rounded`}
                >
                    <Text style={tw`text-sm`}>{statusText[loan.status]}</Text>
                </View>
            </View>

            <View style={tw`space-y-1`}>
                <Text style={tw`text-gray-600`}>
                    신청금액: {formatAmount(loan.amount)}원
                </Text>
                <Text style={tw`text-gray-600`}>
                    신청일자: {formatDate(loan.applicationDate)}
                </Text>
                <Text style={tw`text-gray-600`}>용도: {loan.purpose}</Text>
            </View>
        </Pressable>
    )
}
