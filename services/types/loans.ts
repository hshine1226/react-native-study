export type LoanStatus = 'PENDING' | 'APPROVED' | 'REJECTED'

export interface LoanRequest {
    id: string
    serialNumber: string
    requester: {
        name: string
        phoneNumber: string
    }
    loanAmount: number
    loanPurpose: string
    createdAt: string
    updatedAt: string
    loanState: {
        loanRequestStateId: string
        loanRequestStateName: string
    }
}

export interface QueryLoanRequestsResponse {
    data: LoanRequest[]
    meta: {
        totalCount: number
        totalPages: number
        itemPerPage: number
        currentPage: number
        itemCount: number
    }
}

export interface QueryLoanRequestsFilters {
    currentPage: number
    itemPerPage: number
    requesterName?: string
    requesterPhoneNumber?: string
    loanRequestStateIdList?: string[]
    from?: string
    until?: string
}
