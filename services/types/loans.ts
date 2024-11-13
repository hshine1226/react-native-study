export type LoanStatus = 'PENDING' | 'APPROVED' | 'REJECTED'

export interface Loan {
    id: string
    applicantName: string
    applicationDate: string
    amount: number
    status: LoanStatus
    phoneNumber: string
    purpose: string
}
