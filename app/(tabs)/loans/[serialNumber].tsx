import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import tw from '@/utils/tw'
import { useLoanDetail } from '@/hooks/useLoanDetail'
import { formatAmount, formatDate } from '@/utils/format'

export default function LoanDetailScreen() {
    const { serialNumber } = useLocalSearchParams<{ serialNumber: string }>()
    const { data: loan, isLoading, error } = useLoanDetail(serialNumber)

    if (isLoading) {
        return (
            <View style={tw`flex-1 justify-center items-center`}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    if (error || !loan) {
        return (
            <View style={tw`flex-1 justify-center items-center`}>
                <Text style={tw`text-lg text-gray-600`}>
                    대출 신청 정보를 찾을 수 없습니다.
                </Text>
            </View>
        )
    }

    const getStatusColor = (stateId: string) => {
        switch (stateId) {
            case 'SCREENING':
                return 'bg-yellow-100 text-yellow-800'
            case 'APPROVED':
                return 'bg-green-100 text-green-800'
            case 'REJECTED':
                return 'bg-red-100 text-red-800'
            default:
                return 'bg-gray-100 text-gray-800'
        }
    }

    return (
        <ScrollView style={tw`flex-1 bg-gray-50`}>
            {/* 상태 표시 헤더 */}
            <View style={tw`bg-white px-4 py-6 mb-4`}>
                <View style={tw`flex-row justify-between items-center`}>
                    <Text style={tw`text-2xl font-bold`}>
                        {loan.requester.name}
                    </Text>
                    <View
                        style={tw`${getStatusColor(
                            loan.loanState.stateId
                        )} px-3 py-1.5 rounded-lg`}
                    >
                        <Text style={tw`text-sm font-medium`}>
                            {loan.loanState.description}
                        </Text>
                    </View>
                </View>
                <Text style={tw`text-gray-500 mt-1`}>
                    신청번호: {loan.serialNumber}
                </Text>
            </View>

            {/* 신청 정보 섹션 */}
            <View style={tw`bg-white px-4 py-5 mb-4`}>
                <Text style={tw`text-lg font-bold mb-4`}>신청 정보</Text>
                <View style={tw`space-y-4`}>
                    <InfoRow
                        label="신청 금액"
                        value={`${formatAmount(loan.loanAmount)}원`}
                    />
                    <InfoRow
                        label="신청 일자"
                        value={formatDate(loan.createdAt)}
                    />
                    <InfoRow label="대출 용도" value={loan.loanPurpose} />
                    {loan.loanExecDate && (
                        <InfoRow
                            label="실행희망일"
                            value={formatDate(loan.loanExecDate)}
                        />
                    )}
                </View>
            </View>

            {/* 신청자 정보 섹션 */}
            <View style={tw`bg-white px-4 py-5 mb-4`}>
                <Text style={tw`text-lg font-bold mb-4`}>신청자 정보</Text>
                <View style={tw`space-y-4`}>
                    <InfoRow label="이름" value={loan.requester.name} />
                    <InfoRow
                        label="연락처"
                        value={loan.requester.phoneNumber}
                    />
                </View>
            </View>

            {/* 차주 정보 섹션 */}
            <View style={tw`bg-white px-4 py-5 mb-4`}>
                <Text style={tw`text-lg font-bold mb-4`}>차주 정보</Text>
                <View style={tw`space-y-4`}>
                    {loan.debtorCorpFlag ? (
                        <>
                            <InfoRow
                                label="법인명"
                                value={loan.debtorCorpName || '-'}
                            />
                            <InfoRow
                                label="대표자명"
                                value={loan.debtorCorpRepName || '-'}
                            />
                            <InfoRow
                                label="사업자번호"
                                value={loan.debtorCorpId || '-'}
                            />
                            {loan.debtorCorpCreateDate && (
                                <InfoRow
                                    label="설립일"
                                    value={formatDate(
                                        loan.debtorCorpCreateDate
                                    )}
                                />
                            )}
                        </>
                    ) : (
                        <>
                            <InfoRow
                                label="이름"
                                value={loan.debtorName || '-'}
                            />
                            <InfoRow
                                label="연소득"
                                value={
                                    loan.debtorIncome
                                        ? `${formatAmount(loan.debtorIncome)}원`
                                        : '-'
                                }
                            />
                            {loan.debtorCreditRating && (
                                <InfoRow
                                    label="신용점수"
                                    value={loan.debtorCreditRating.toString()}
                                />
                            )}
                        </>
                    )}
                    <InfoRow
                        label="직업"
                        value={loan.debtorOccupation || '-'}
                    />
                </View>
            </View>

            {/* 담보물건 정보 섹션 */}
            <View style={tw`bg-white px-4 py-5 mb-4`}>
                <Text style={tw`text-lg font-bold mb-4`}>담보물건 정보</Text>
                <View style={tw`space-y-4`}>
                    <InfoRow
                        label="소유자"
                        value={
                            loan.assetOwnerCorpFlag
                                ? loan.assetOwnerCorpName
                                : loan.assetOwnerName
                        }
                    />
                    {loan.assetOwnerCorpFlag && (
                        <InfoRow
                            label="사업자번호"
                            value={loan.assetOwnerCorpId || '-'}
                        />
                    )}
                    {loan.assetContractDate && (
                        <InfoRow
                            label="계약일자"
                            value={formatDate(loan.assetContractDate)}
                        />
                    )}
                    {loan.assetBalanceDueDate && (
                        <InfoRow
                            label="잔금납입일"
                            value={formatDate(loan.assetBalanceDueDate)}
                        />
                    )}
                </View>
            </View>

            {/* 기타 정보 섹션 */}
            <View style={tw`bg-white px-4 py-5 mb-4`}>
                <Text style={tw`text-lg font-bold mb-4`}>기타 정보</Text>
                <View style={tw`space-y-4`}>
                    <InfoRow
                        label="기존대출금액"
                        value={
                            loan.ltvPriorLoanSum
                                ? `${formatAmount(loan.ltvPriorLoanSum)}원`
                                : '-'
                        }
                    />
                    <InfoRow
                        label="선순위채권"
                        value={
                            loan.ltvPriorBondSum
                                ? `${formatAmount(loan.ltvPriorBondSum)}원`
                                : '-'
                        }
                    />
                    {loan.requesterComment && (
                        <InfoRow label="코멘트" value={loan.requesterComment} />
                    )}
                </View>
            </View>
        </ScrollView>
    )
}

function InfoRow({ label, value }: { label: string; value: string }) {
    return (
        <View style={tw`flex-row justify-between items-center`}>
            <Text style={tw`text-gray-600`}>{label}</Text>
            <Text style={tw`font-medium`}>{value}</Text>
        </View>
    )
}
