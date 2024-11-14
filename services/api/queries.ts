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
