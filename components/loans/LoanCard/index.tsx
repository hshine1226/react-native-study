import { View, Text, Pressable } from 'react-native'
import { useRouter } from 'expo-router'
import tw from '@/utils/tw'
import { formatAmount, formatDate } from '@/utils/format'

interface LoanRequest {
    id: string
    applicantName: string | null
    applicationDate: string | null
    amount: number | null
    stateId: number
    phoneNumber: string | null
    purpose: string | null
}

interface LoanCardProps {
    loan: LoanRequest
}

export enum ELoanStateId {
    /**
     * 대출신청,임시저장
     * */
    'LOAN_REQUEST_TEMPORARY_SAVE' = 100,
    /**
     * 대출신청,스크리닝통과
     */
    'LOAN_REQUEST_APPLY' = 110,
    /**
     * 대출신청,제안없이종료
     */
    'LOAN_REQUEST_APPLY_REJECT' = 120,
    /**
     * 대출신청,스크리닝진행
     */
    'LOAN_REQUEST_SCREENING' = 140,
    /**
     * 대출신청,스크리닝반려
     */
    'LOAN_REQUEST_SCREENING_REJECT' = 150,
    /**
     * 대출신청,스크리닝재진행
     */
    'LOAN_REQUEST_SCREENING_RETRY' = 160,
    /**
     * 대출제안,제안
     */
    'LOAN_PROPOSAL_PROPOSE' = 210,
    /**
     * 대출제안,선택없이종결
     */
    'LOAN_PROPOSAL_NO_SELECTION_CLOSED' = 220,
    /**
     * 대출제안,선택함
     */
    'LOAN_PROPOSAL_PROPOSE_ACCEPT' = 230,
    /**
     * 대출제안,상담없이종결
     */
    'LOAN_PROPOSAL_NO_CONSULTATION_CLOSED' = 240,
    /**
     * 대출상담,상담중
     */
    'LOAN_CONSULTATION_CONSULTING' = 310,
    /**
     * 대출상담,계약없이종결
     */
    'LOAN_CONSULTATION_NO_CONTRACT_CLOSED' = 320,
    /**
     * 대출계약,계약체결
     */
    'LOAN_CONTRACT_CONTRACT' = 400,
    /**
     * 대출계약,실행없이종결
     */
    'LOAN_CONTRACT_NO_EXECUTION_CLOSED' = 410,
    /**
     * 대출계약,실행완료
     */
    'LOAN_CONTRACT_FINISH' = 500
}

export function LoanCard({ loan }: LoanCardProps) {
    const router = useRouter()

    const statusColors = {
        [ELoanStateId.LOAN_REQUEST_SCREENING]: 'bg-yellow-100 text-yellow-800',
        [ELoanStateId.LOAN_REQUEST_APPLY]: 'bg-green-100 text-green-800',
        [ELoanStateId.LOAN_REQUEST_SCREENING_REJECT]: 'bg-red-100 text-red-800',
        [ELoanStateId.LOAN_REQUEST_TEMPORARY_SAVE]: 'bg-gray-100 text-gray-800',
        [ELoanStateId.LOAN_REQUEST_APPLY_REJECT]: 'bg-red-100 text-red-800',
        [ELoanStateId.LOAN_REQUEST_SCREENING_RETRY]:
            'bg-yellow-100 text-yellow-800',
        [ELoanStateId.LOAN_PROPOSAL_PROPOSE]: 'bg-blue-100 text-blue-800',
        [ELoanStateId.LOAN_PROPOSAL_PROPOSE_ACCEPT]:
            'bg-blue-100 text-blue-800',
        [ELoanStateId.LOAN_PROPOSAL_NO_SELECTION_CLOSED]:
            'bg-gray-100 text-gray-800',
        [ELoanStateId.LOAN_PROPOSAL_NO_CONSULTATION_CLOSED]:
            'bg-gray-100 text-gray-800',
        [ELoanStateId.LOAN_CONSULTATION_CONSULTING]:
            'bg-yellow-100 text-yellow-800',
        [ELoanStateId.LOAN_CONSULTATION_NO_CONTRACT_CLOSED]:
            'bg-red-100 text-red-800',
        [ELoanStateId.LOAN_CONTRACT_CONTRACT]: 'bg-green-100 text-green-800',
        [ELoanStateId.LOAN_CONTRACT_NO_EXECUTION_CLOSED]:
            'bg-red-100 text-red-800',
        [ELoanStateId.LOAN_CONTRACT_FINISH]: 'bg-green-100 text-green-800'
    }

    const statusText = {
        [ELoanStateId.LOAN_REQUEST_SCREENING]: '심사중',
        [ELoanStateId.LOAN_REQUEST_APPLY]: '승인',
        [ELoanStateId.LOAN_REQUEST_SCREENING_REJECT]: '거절',
        [ELoanStateId.LOAN_REQUEST_TEMPORARY_SAVE]: '임시저장',
        [ELoanStateId.LOAN_REQUEST_APPLY_REJECT]: '거절',
        [ELoanStateId.LOAN_REQUEST_SCREENING_RETRY]: '재진행',
        [ELoanStateId.LOAN_PROPOSAL_PROPOSE]: '제안',
        [ELoanStateId.LOAN_PROPOSAL_PROPOSE_ACCEPT]: '선택함',
        [ELoanStateId.LOAN_PROPOSAL_NO_SELECTION_CLOSED]: '선택없이종결',
        [ELoanStateId.LOAN_CONSULTATION_CONSULTING]: '상담중',
        [ELoanStateId.LOAN_CONSULTATION_NO_CONTRACT_CLOSED]: '계약없이종결',
        [ELoanStateId.LOAN_CONTRACT_CONTRACT]: '계약체결',
        [ELoanStateId.LOAN_CONTRACT_NO_EXECUTION_CLOSED]: '실행없이종결',
        [ELoanStateId.LOAN_PROPOSAL_NO_CONSULTATION_CLOSED]: '상담없이종결',
        [ELoanStateId.LOAN_CONTRACT_FINISH]: '실행완료'
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
                    style={tw`${
                        statusColors[loan.stateId as ELoanStateId]
                    } px-2 py-1 rounded`}
                >
                    <Text style={tw`text-sm`}>
                        {statusText[loan.stateId as ELoanStateId]}
                    </Text>
                </View>
            </View>

            <View style={tw`space-y-1`}>
                <Text style={tw`text-gray-600`}>
                    신청금액: {loan.amount ? formatAmount(loan.amount) : '미정'}
                    원
                </Text>
                <Text style={tw`text-gray-600`}>
                    신청일자:{' '}
                    {loan.applicationDate
                        ? formatDate(loan.applicationDate)
                        : '미정'}
                </Text>
                <Text style={tw`text-gray-600`}>용도: {loan.purpose}</Text>
            </View>
        </Pressable>
    )
}
