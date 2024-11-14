# endpoint

http://localhost:8000/graphql

# GraphQL Query

queryLoanRequests

## Filters

@InputType()
export class QueryLoanRequestsFiltersInput {
@Field(() => [StateFilter], {
nullable: true,
description: '대출 프로세스 상태 필터'
})
stateFilterList?: StateFilter[]

    @Field(() => String, {
        nullable: true,
        description: '대출신청 간소화 일련번호'
    })
    serialNumber?: string

    @Field(() => String, {
        nullable: true,
        description: '신청자 휴대폰 번호'
    })
    requesterPhoneNumber?: string

    @Field(() => String, {
        nullable: true,
        description: '신청자 이름'
    })
    requesterName?: string

    @Field(() => [String], {
        nullable: true,
        description: '주소 필터 리스트'
    })
    addressList?: string[]

    @Field(() => Number, {
        nullable: true,
        description: '최소 대출 신청액'
    })
    minLoanApplicationAmount?: number

    @Field(() => Number, {
        nullable: true,
        description: '최대 대출 신청액'
    })
    maxLoanApplicationAmount?: number

    @Field(() => [EDebtorOccupation], {
        nullable: true,
        description: '차주 유형 필터'
    })
    debtorOccupationList?: EDebtorOccupation[]

    @Field(() => [ELoanPurpose], {
        nullable: true,
        description: '대출유형(목적) 필터'
    })
    loanPurposeList?: ELoanPurpose[]

    @Field(() => GraphQLISODateTime, {
        nullable: true,
        description: '조회시작 시점'
    })
    from?: string

    @Field(() => GraphQLISODateTime, {
        nullable: true,
        description: '조회종료 시점'
    })
    until?: string

    @Field(() => Int, {
        nullable: false,
        description: '대시보드를 조회할 현재 페이지'
    })
    currentPage: number

    @Field(() => Int, {
        nullable: false,
        description: '페이지당 대시보드 행 개수'
    })
    itemPerPage: number

    @Field(() => [ELoanRequestStateId], {
        nullable: true,
        description: '대출신청 상태 필터'
    })
    loanRequestStateIdList?: ELoanRequestStateId[] | null

    @Field(() => [ELoanProposalStateId], {
        nullable: true,
        description: '대출제안 상태 필터'
    })
    loanProposalStateIdList?: ELoanProposalStateId[] | null

    @Field(() => [ELoanConsultationStateId], {
        nullable: true,
        description: '대출상담 상태 필터'
    })
    loanConsultationStateIdList?: ELoanConsultationStateId[] | null

    @Field(() => [ELoanContractStateId], {
        nullable: true,
        description: '대출계약 상태 필터'
    })
    loanContractStateIdList?: ELoanContractStateId[] | null

}

## Response

@ObjectType()
export class QueryLoanRequestsReturn {
@Field(type => [LoanRequest], { nullable: false })
data: LoanRequest[]

    @Field(() => QueryLoanRequestsMeta, { nullable: false })
    meta: QueryLoanRequestsMeta

}

@ObjectType()
export class LoanRequest {
// @Field({ nullable: false })
// error: boolean

    // @Field({ nullable: false })
    // message: string

    @Field(() => String, {
        nullable: true,
        description: '개인정보 삭제일'
    })
    personalDataDeletionDate: string | null

    @Field(() => LoanRequestCountObject, {
        nullable: true,
        description: '대출신청서 카운트(조회수, 대출제안수, 선택된대출제안수)'
    })
    count: LoanRequestCountObject

    @Field(() => Number, { nullable: true, description: '예정공사비' })
    expectedConstructionCost: number | null

    @Field(() => EAuctionType, {
        nullable: true,
        description: '경매 타입(공매/경매)'
    })
    auctionType: EAuctionType | null

    @Field(() => AuctionInfoResponse, {
        nullable: true,
        description: '경락 잔금 정보'
    })
    auctionInfo: AuctionInfoResponse | null

    @Field(() => PublicAuctionInfoResponse, {
        nullable: true,
        description: '공매 경락 잔금 정보'
    })
    publicAuctionInfo: PublicAuctionInfoResponse | null

    @Field({ nullable: false, description: '대출신청서 아이디' })
    id: string

    @Field(() => String, {
        nullable: true,
        description: '대출신청서 단순화 일련번호'
    })
    serialNumber: string

    @Field(() => String, {
        nullable: true,
        description: '스크리닝 채팅방 roomId'
    })
    screeningRoomId: string | null

    @Field(() => String, {
        nullable: true,
        description: '대출신청서 최종 제출일자'
    })
    submissionUpdatedAt: string | null

    @Field(() => String, {
        nullable: true,
        description: '대출신청서 만료일자(대출제안 가능일자)'
    })
    loanRequestExpireDate: string | null

    @Field(() => String, {
        nullable: true,
        description: '대출제안서 만료 일자(대출선택 가능일자)'
    })
    loanProposalExpireDate: string | null

    @Field({
        nullable: false,
        description: '대출신청서 생성일자(대출신청서 최초 작성 일자)'
    })
    createdAt: string

    @Field({ nullable: false, description: '대출신청서 최종 변경 일자' })
    updatedAt: string

    @Field(type => String, {
        nullable: true,
        description: '대출신청서 삭제 일자'
    })
    deletedAt: string | null

    @Field(type => String, { nullable: true, description: '대출신청 assetPnu' })
    assetPnu: string | null

    @Field(type => String, { nullable: true, description: '대출신청 HoPk' })
    assetHoPk: string | null

    @Field(type => Boolean, {
        nullable: true,
        description: '담보부동산 소유형태 공동명의 여부'
    })
    assetOwnerMultiFlag: boolean | null

    @Field(type => Boolean, {
        nullable: true,
        description: '담보부동산 소유자 법인여부'
    })
    assetOwnerCorpFlag: boolean | null

    @Field(type => String, { nullable: true, description: '소유자명' })
    assetOwnerName: string | null

    @Field(type => String, { nullable: true, description: '법인명(소유자)' })
    assetOwnerCorpName: string | null

    @Field(type => Boolean, {
        nullable: true,
        description: '소유자법인직접입력여부'
    })
    assetOwnerCorpDirectInputFlag: boolean

    @Field(type => String, {
        nullable: true,
        description: '법인사업자번호(소유자)'
    })
    assetOwnerCorpId: string | null

    @Field(type => String, { nullable: true, description: '계약일자' })
    assetContractDate: string | null

    @Field(type => String, { nullable: true, description: '잔금납입일자' })
    assetBalanceDueDate: string | null

    @Field(type => String, {
        nullable: true,
        description: "대출용도 '건축자금' / '시설자금' / '운영자금"
    })
    loanPurpose: string | null

    @Field(() => Float, {
        nullable: true,
        description: '대출용도금액(e.g. 부동산구입가격)'
    })
    loanPurposePrice: number | null

    @Field(() => Float, { nullable: true, description: '대출신청금액' })
    loanAmount: number | null

    @Field(type => String, { nullable: true, description: '대출실행희망일' })
    loanExecDate: string | null

    @Field(type => [LtvExistingLoan], {
        nullable: true,
        description: '기존 대출 목록'
    })
    ltvExistingLoans: LtvExistingLoan[] | null

    @Field(() => Float, { nullable: true, description: 'LTV 기존대출합계' })
    ltvPriorLoanSum: number | null

    @Field(() => [LeaseContract], {
        nullable: true,
        description: '기존 임대차계약 목록'
    })
    leaseContracts: LeaseContract[]

    @Field(() => Float, { nullable: true, description: 'LTV 기존채무합계' })
    ltvPriorBondSum: number | null

    @Field(type => Boolean, { nullable: true, description: '채무자 법인여부' })
    debtorCorpFlag: boolean | null

    @Field(type => String, { nullable: true, description: '채무자명' })
    debtorName: string | null

    @Field(type => String, {
        nullable: true,
        description: '법인대표자명(채무자)'
    })
    debtorCorpRepName: string | null

    @Field(type => String, { nullable: true, description: '법인명(채무자)' })
    debtorCorpName: string | null

    @Field(type => String, {
        nullable: true,
        description: '법인사업자번호(채무자)'
    })
    debtorCorpId: string | null

    @Field(type => String, {
        nullable: true,
        description: '법인개설일(채무자)'
    })
    debtorCorpCreateDate: string | null

    @Field(type => String, { nullable: true, description: '채무자 직업' })
    debtorOccupation: string | null

    @Field(() => Float, {
        nullable: true,
        description: '채무자 연소득'
    })
    debtorIncome: number | null

    @Field(() => Float, {
        nullable: true,
        description: '채무자 지역의료보험료(월)'
    })
    debtorHealthInsur: number | null

    @Field(() => Boolean, {
        nullable: true,
        description: '채무자 신청자 동일여부'
    })
    debtorEqualsRequesterFlag: boolean | null

    @Field(() => Boolean, {
        nullable: true,
        description: '채무자 담보소유자 동일여부'
    })
    debtorEqualsAssetOwnerFlag: boolean | null

    @Field(type => Requester, {
        nullable: true,
        description: '신청자 파이퍼 유저 ID'
    })
    requester: Requester | null

    @Field(type => AssetDetail, {
        nullable: true,
        description: '자산 상세정보'
    })
    assetDetail: AssetDetail | null

    @Field(() => Number, { nullable: true, description: '신용점수' })
    debtorCreditRating: number | null

    @Field(type => LoanState, { nullable: true, description: '대출신청 상태' })
    loanState: LoanState | null

    @Field(type => [LoanProposal], { nullable: true, description: '대출제안' })
    loanProposals: LoanProposal[]

    @Field(() => LoanRequestFilesObjectType, {
        nullable: true,
        description: '대출신청서 첨부파일'
    })
    loanRequestFiles: LoanRequestFilesObjectType

    @Field(() => String, { nullable: true, description: '대출신청서 코멘트' })
    requesterComment: string | null

    @Field(type => Screening, { nullable: true, description: '스크리닝 정보' })
    screening: Screening | null

    @Field(type => DesktopAppraisal, {
        nullable: true,
        description: '대출신청 자산 예상감정 정보'
    })
    desktopAppraisal: DesktopAppraisal | null

    @Field(type => String, { nullable: true, description: '추천인 코드' })
    referralCode: string | null

    @Field(type => String, {
        nullable: true,
        description: '직접입력 주소(부동산 추가시)'
    })
    manuallyInputAssetAddress: string | null

    @Field(() => [LoanRequestAccessHistory], {
        nullable: true,
        description: '대출신청서 접근 이력'
    })
    loanRequestAccessHistories: LoanRequestAccessHistory[]

    @Field(() => String, { nullable: true, description: '나이스 업체코드' })
    niceUpchecd: string | null

}

@ObjectType()
export class QueryLoanRequestsMeta {
@Field(() => Int, { nullable: false })
totalCount: number

    @Field(() => Int, { nullable: false })
    totalPages: number

    @Field(() => Int, { nullable: false })
    itemPerPage: number

    @Field(() => Int, { nullable: false })
    currentPage: number

    @Field(() => Int, { nullable: false })
    itemCount: number

}
