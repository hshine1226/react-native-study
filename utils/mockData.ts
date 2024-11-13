import { Loan } from '@/services/types/loans'

export const mockLoans: Loan[] = [
    {
        id: '1',
        applicantName: '김철수',
        applicationDate: '2024-03-20',
        amount: 30000000,
        status: 'PENDING',
        phoneNumber: '010-1234-5678',
        purpose: '사업자금'
    },
    {
        id: '2',
        applicantName: '이영희',
        applicationDate: '2024-03-19',
        amount: 50000000,
        status: 'APPROVED',
        phoneNumber: '010-2345-6789',
        purpose: '주택구입'
    },
    {
        id: '3',
        applicantName: '박지민',
        applicationDate: '2024-03-18',
        amount: 20000000,
        status: 'REJECTED',
        phoneNumber: '010-3456-7890',
        purpose: '생활자금'
    }
    // ... 더 많은 목업 데이터 추가
]
