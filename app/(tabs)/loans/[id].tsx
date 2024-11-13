import { View, Text, ScrollView } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import tw from '@/utils/tw'
import { mockLoans } from '@/utils/mockData'
import { formatAmount, formatDate } from '@/utils/format'

export default function LoanDetailScreen() {
    const { id } = useLocalSearchParams<{ id: string }>()
    const loan = mockLoans.find(loan => loan.id === id)

    if (!loan) {
        return (
            <View style={tw`flex-1 justify-center items-center`}>
                <Text style={tw`text-lg text-gray-600`}>
                    대출 신청 정보를 찾을 수 없습니다.
                </Text>
            </View>
        )
    }

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
        <ScrollView style={tw`flex-1 bg-gray-50`}>
            {/* 상태 표시 헤더 */}
            <View style={tw`bg-white px-4 py-6 mb-4`}>
                <View style={tw`flex-row justify-between items-center`}>
                    <Text style={tw`text-2xl font-bold`}>
                        {loan.applicantName}
                    </Text>
                    <View
                        style={tw`${
                            statusColors[loan.status]
                        } px-3 py-1.5 rounded-lg`}
                    >
                        <Text style={tw`text-sm font-medium`}>
                            {statusText[loan.status]}
                        </Text>
                    </View>
                </View>
            </View>

            {/* 신청 정보 섹션 */}
            <View style={tw`bg-white px-4 py-5 mb-4`}>
                <Text style={tw`text-lg font-bold mb-4`}>신청 정보</Text>
                <View style={tw`space-y-4`}>
                    <InfoRow
                        label="신청 금액"
                        value={`${formatAmount(loan.amount)}원`}
                    />
                    <InfoRow
                        label="신청 일자"
                        value={formatDate(loan.applicationDate)}
                    />
                    <InfoRow label="대출 용도" value={loan.purpose} />
                </View>
            </View>

            {/* 신청자 정보 섹션 */}
            <View style={tw`bg-white px-4 py-5 mb-4`}>
                <Text style={tw`text-lg font-bold mb-4`}>신청자 정보</Text>
                <View style={tw`space-y-4`}>
                    <InfoRow label="이름" value={loan.applicantName} />
                    <InfoRow label="연락처" value={loan.phoneNumber} />
                </View>
            </View>

            {/* 처리 현황 섹션 */}
            <View style={tw`bg-white px-4 py-5 mb-4`}>
                <Text style={tw`text-lg font-bold mb-4`}>처리 현황</Text>
                <View style={tw`space-y-4`}>
                    <ProcessTimeline
                        status={loan.status}
                        applicationDate={loan.applicationDate}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

// 정보 행 컴포넌트
function InfoRow({ label, value }: { label: string; value: string }) {
    return (
        <View style={tw`flex-row justify-between items-center`}>
            <Text style={tw`text-gray-600`}>{label}</Text>
            <Text style={tw`font-medium`}>{value}</Text>
        </View>
    )
}

// 처리 현황 타임라인 컴포넌트
function ProcessTimeline({
    status,
    applicationDate
}: {
    status: string
    applicationDate: string
}) {
    const steps = [
        {
            title: '신청 접수',
            date: applicationDate,
            completed: true
        },
        {
            title: '서류 검토',
            date: status !== 'PENDING' ? '2024-03-21' : '',
            completed: status !== 'PENDING'
        },
        {
            title: '심사 완료',
            date:
                status === 'APPROVED' || status === 'REJECTED'
                    ? '2024-03-22'
                    : '',
            completed: status === 'APPROVED' || status === 'REJECTED'
        }
    ]

    return (
        <View style={tw`space-y-4`}>
            {steps.map((step, index) => (
                <View
                    key={step.title}
                    style={tw`flex-row items-start space-x-3`}
                >
                    <View
                        style={tw`w-6 h-6 rounded-full ${
                            step.completed ? 'bg-blue-500' : 'bg-gray-200'
                        } items-center justify-center mt-0.5`}
                    >
                        <Text style={tw`text-white text-xs font-bold`}>
                            {index + 1}
                        </Text>
                    </View>
                    <View style={tw`flex-1`}>
                        <Text style={tw`font-medium`}>{step.title}</Text>
                        {step.date && (
                            <Text style={tw`text-sm text-gray-500 mt-1`}>
                                {formatDate(step.date)}
                            </Text>
                        )}
                    </View>
                </View>
            ))}
        </View>
    )
}
