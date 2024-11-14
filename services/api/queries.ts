import { gql } from '@apollo/client'

export const QUERY_LOAN_REQUESTS = gql`
    query QueryLoanRequests($filters: QueryLoanRequestsFiltersInput!) {
        queryLoanRequests(filters: $filters) {
            data {
                id
                serialNumber
                requester {
                    name
                    phoneNumber
                }
                debtorName
                debtorCorpName
                loanAmount
                loanPurpose
                createdAt
                updatedAt
                loanState {
                    stateId
                    category
                    event
                    description
                }
            }
            meta {
                totalCount
                totalPages
                itemPerPage
                currentPage
                itemCount
            }
        }
    }
`

export const QUERY_LOAN_REQUEST = gql`
    query QueryLoanRequest($serialNumber: String!, $isInitialRequest: Boolean) {
        queryLoanRequest(
            serialNumber: $serialNumber
            isInitialRequest: $isInitialRequest
        ) {
            id
            serialNumber
            createdAt
            updatedAt
            submissionUpdatedAt
            loanRequestExpireDate
            loanProposalExpireDate
            loanPurpose
            loanAmount
            loanExecDate

            # 채무자 정보
            debtorCorpFlag
            debtorName
            debtorCorpName
            debtorCorpRepName
            debtorCorpId
            debtorCorpCreateDate
            debtorOccupation
            debtorIncome
            debtorHealthInsur
            debtorCreditRating

            # 담보 자산 정보
            assetPnu
            assetHoPk
            assetOwnerMultiFlag
            assetOwnerCorpFlag
            assetOwnerName
            assetOwnerCorpName
            assetOwnerCorpDirectInputFlag
            assetOwnerCorpId
            assetContractDate
            assetBalanceDueDate

            ltvPriorLoanSum

            ltvPriorBondSum

            # 신청자 정보
            requester {
                name
                phoneNumber
            }

            # 상태 및 카운트 정보
            loanState {
                stateId
                category
                event
                description
            }

            requesterComment
            referralCode
        }
    }
`
