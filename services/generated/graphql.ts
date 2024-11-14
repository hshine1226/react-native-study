import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AcceptScreeningInput = {
  /** 스크리닝 담당자가 입력하는 코멘트 */
  comment?: InputMaybe<Scalars['String']['input']>;
  /** 대출신청 ID */
  loanRequestId: Scalars['String']['input'];
  /** 스크리닝 담당자 토큰 */
  vosAccessToken: Scalars['String']['input'];
};

/** 단기연체정보 계정과목별 정보 */
export type AccountSubject = {
  __typename?: 'AccountSubject';
  /** 거래금액 */
  accamt?: Maybe<Scalars['String']['output']>;
  /** 계정과목코드 */
  acccd?: Maybe<Scalars['String']['output']>;
  /** 계정과목명 */
  accname?: Maybe<Scalars['String']['output']>;
  /** 한국신용정보원 만기코드명 */
  category?: Maybe<Scalars['String']['output']>;
  /** 한국신용정보원 만기코드 */
  categorycd?: Maybe<Scalars['String']['output']>;
  /** 계정과목 대과목명 */
  kind1?: Maybe<Scalars['String']['output']>;
  /** 계정과목 중과목명 */
  kind2?: Maybe<Scalars['String']['output']>;
  /** 계정과목 대과목 코드 */
  kindcode1?: Maybe<Scalars['String']['output']>;
  /** 계정과목 중과목 코드 */
  kindcode2?: Maybe<Scalars['String']['output']>;
};

export type Asset = {
  address: Scalars['String']['input'];
  assetHoPk?: InputMaybe<Scalars['String']['input']>;
  assetPnu?: InputMaybe<Scalars['String']['input']>;
  buildingUseDetailList?: InputMaybe<Array<LandDetail>>;
  dongBpk?: InputMaybe<Scalars['String']['input']>;
  dongName?: InputMaybe<Scalars['String']['input']>;
  estimatePrice?: InputMaybe<Scalars['Float']['input']>;
  hoName?: InputMaybe<Scalars['String']['input']>;
  isWholeCollectiveBuilding?: InputMaybe<Scalars['Boolean']['input']>;
  /** 지목 */
  jimok?: InputMaybe<Scalars['String']['input']>;
  landUseList?: InputMaybe<Array<LandUse>>;
  /** 주용도 */
  mainUse?: InputMaybe<Scalars['String']['input']>;
  /** 주용도 면적 */
  mainUseArea?: InputMaybe<Scalars['Float']['input']>;
  unitArea?: InputMaybe<Scalars['Float']['input']>;
  useName?: InputMaybe<Scalars['String']['input']>;
};

export type AssetDetail = {
  __typename?: 'AssetDetail';
  address?: Maybe<Scalars['String']['output']>;
  assetHoPk?: Maybe<Scalars['String']['output']>;
  assetPnu?: Maybe<Scalars['String']['output']>;
  buildingUseDetailList?: Maybe<Array<AssetDetailLandDetail>>;
  createdAt: Scalars['String']['output'];
  dongBpk?: Maybe<Scalars['String']['output']>;
  dongName?: Maybe<Scalars['String']['output']>;
  estimatePrice?: Maybe<Scalars['Float']['output']>;
  hoName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isWholeCollectiveBuilding?: Maybe<Scalars['Boolean']['output']>;
  jimok?: Maybe<Scalars['String']['output']>;
  landUseList?: Maybe<Array<AssetDetailLandUse>>;
  loanRequestId: Scalars['String']['output'];
  /** 주용도 */
  mainUse?: Maybe<Scalars['String']['output']>;
  /** 주용도 면적 */
  mainUseArea?: Maybe<Scalars['Float']['output']>;
  unitArea?: Maybe<Scalars['Float']['output']>;
  useName?: Maybe<Scalars['String']['output']>;
};

export type AssetDetailLandDetail = {
  __typename?: 'AssetDetailLandDetail';
  buildingUseDetailName: Scalars['String']['output'];
  totalBuildingUseDetailArea: Scalars['Float']['output'];
};

export type AssetDetailLandUse = {
  __typename?: 'AssetDetailLandUse';
  landUseArea: Scalars['Float']['output'];
  landUseName: Scalars['String']['output'];
};

export type AssetGeometry = {
  __typename?: 'AssetGeometry';
  assetPnu?: Maybe<Scalars['String']['output']>;
  boundRect?: Maybe<BoundRect>;
  centroid?: Maybe<Centroid>;
  polygon?: Maybe<GeojsonPolygonFeature>;
};

export type AuctionInfo = {
  /** 경매 감정가 */
  auctionAppraisalValue: Scalars['Float']['input'];
  /** 경매 낙찰일 */
  auctionWinningDate?: InputMaybe<Scalars['String']['input']>;
  /** 경매 낙찰가 */
  auctionWinningPrice: Scalars['Float']['input'];
  /** 경매 낙찰대금 지급기한 */
  auctionWinningPriceDueDate?: InputMaybe<Scalars['String']['input']>;
  /** 경매 사건 번호 */
  caseNumber: Scalars['String']['input'];
  /** 경매 사건 연도 */
  caseYear: Scalars['String']['input'];
  /** 경매 법원 */
  courtName: Scalars['String']['input'];
  /** 매각허가결정전 체크박스 */
  isBeforeSaleApproval?: InputMaybe<Scalars['Boolean']['input']>;
  /** 경매 신청 출처 */
  origin: AuctionOrigin;
  /** 경매 사건 번호 */
  sagunId?: InputMaybe<Scalars['String']['input']>;
};

export type AuctionInfoResponse = {
  __typename?: 'AuctionInfoResponse';
  /** 경매 감정가 */
  auctionAppraisalValue?: Maybe<Scalars['Float']['output']>;
  /** 경매 낙찰일 */
  auctionWinningDate?: Maybe<Scalars['String']['output']>;
  /** 경매 낙찰가 */
  auctionWinningPrice?: Maybe<Scalars['Float']['output']>;
  /** 경매 낙찰대금 지급기한 */
  auctionWinningPriceDueDate?: Maybe<Scalars['String']['output']>;
  /** 경매 사건 번호 */
  caseNumber?: Maybe<Scalars['String']['output']>;
  /** 경매 사건 연도 */
  caseYear?: Maybe<Scalars['String']['output']>;
  /** 경매 법원 */
  courtName?: Maybe<Scalars['String']['output']>;
  /** 매각허가결정전 체크박스 */
  isBeforeSaleApproval?: Maybe<Scalars['Boolean']['output']>;
  /** 경매 신청 출처 */
  origin: AuctionOrigin;
  /**
   * 경매 사건 번호
   * @deprecated 법원+연도+타경으로 나누어서 받도록 변경
   */
  sagunId?: Maybe<Scalars['String']['output']>;
};

/** 경매 신청 출처 */
export enum AuctionOrigin {
  /** 옥션원 */
  Auction1 = 'AUCTION1',
  /** 지지옥션 */
  Ggi = 'GGI',
  /** 파이퍼 */
  Piper = 'PIPER'
}

export type BoundRect = {
  __typename?: 'BoundRect';
  coordinates?: Maybe<Array<Maybe<Array<Maybe<Array<Maybe<Scalars['Float']['output']>>>>>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type CenterPoint = {
  __typename?: 'CenterPoint';
  coordinates: Array<Scalars['Float']['output']>;
  type: Scalars['String']['output'];
};

export type Centroid = {
  __typename?: 'Centroid';
  coordinates?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ChangePasswordInput = {
  v1: ChangePasswordInputV1;
};

export type ChangePasswordInputV1 = {
  newPassword: Scalars['String']['input'];
  niceCertResponseId: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
};

export type CheckPiperUser = {
  __typename?: 'CheckPiperUser';
  isKakao: Scalars['Boolean']['output'];
  isNaver: Scalars['Boolean']['output'];
  isTraditional: Scalars['Boolean']['output'];
};

export type CloseLoanConsultationData = {
  __typename?: 'CloseLoanConsultationData';
  /** 대출상담 아이디 */
  loanConsultationId: Scalars['String']['output'];
  /** 메시지 */
  message: Scalars['String']['output'];
};

export type CloseLoanConsultationResult = {
  __typename?: 'CloseLoanConsultationResult';
  data: CloseLoanConsultationData;
};

export type CloseLoanContractData = {
  __typename?: 'CloseLoanContractData';
  /** 대출계약 아이디 */
  loanContractId: Scalars['String']['output'];
  /** 메시지 */
  message: Scalars['String']['output'];
};

export type CloseLoanContractResult = {
  __typename?: 'CloseLoanContractResult';
  data: CloseLoanContractData;
};

export type CloseLoanProposalData = {
  __typename?: 'CloseLoanProposalData';
  /** 대출제안 아이디 */
  loanProposalId: Scalars['String']['output'];
  /** 메시지 */
  message: Scalars['String']['output'];
};

export type CloseLoanProposalResult = {
  __typename?: 'CloseLoanProposalResult';
  data: CloseLoanProposalData;
};

export type CreateLoanConsultationResult = {
  __typename?: 'CreateLoanConsultationResult';
  /** 에러발생 여부 */
  error: Scalars['Boolean']['output'];
  /** 대출상담 아이디 */
  loanConsultationId: Scalars['String']['output'];
  /** 대출제안 아이디 */
  loanProposalId: Scalars['String']['output'];
  /** 응답 메시지 */
  message: Scalars['String']['output'];
};

export type CreateLoanContractData = {
  __typename?: 'CreateLoanContractData';
  /** 대출계약 아이디 */
  loanContractId: Scalars['String']['output'];
  /** 메시지 */
  message: Scalars['String']['output'];
};

export type CreateLoanContractResult = {
  __typename?: 'CreateLoanContractResult';
  data: CreateLoanContractData;
};

export type CreationResult = {
  __typename?: 'CreationResult';
  error: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** 신용도판단정보(한국신용정보원 제공) */
export type CreditNegativeInfo = {
  __typename?: 'CreditNegativeInfo';
  /** 구분(예 : 채무불이행, 금융질서문란, 공공기록정보, 특수기록정보) */
  gubn?: Maybe<Scalars['String']['output']>;
  /** 유형구분코드(BB : 신용도판단정보(채무불이행), FD : 금융질서문란, PB : 공공기록정보, SB : 특수기록정보) */
  typecode?: Maybe<Scalars['String']['output']>;
  /** 유형구분명(예 : 채무불이행, 금융질서문란, 공공기록정보, 특수기록정보) */
  typename?: Maybe<Scalars['String']['output']>;
};

/** 신용도판단정보(신용정보사 제공) */
export type CreditNegativeInfoCb = {
  __typename?: 'CreditNegativeInfoCB';
  /** 등록사유명 */
  causename?: Maybe<Scalars['String']['output']>;
  /** 유형구분코드(CB : 신용도판단정보(신용정보사)) */
  typecode?: Maybe<Scalars['String']['output']>;
  /** 유형구분명(예 : 신용도판단정보(신용정보사)) */
  typename?: Maybe<Scalars['String']['output']>;
};

/** 기업평가등급 */
export type CreditRating = {
  __typename?: 'CreditRating';
  /** 기업평가등급 */
  crgrade?: Maybe<Scalars['String']['output']>;
  /** 등급평가일자(조회기준일자) */
  grdBaseDate?: Maybe<Scalars['String']['output']>;
  /** 등급종료일자 */
  grdEndDate?: Maybe<Scalars['String']['output']>;
  /** 업체코드 */
  upchecd?: Maybe<Scalars['String']['output']>;
};

/** 기업신용공여 단기연체 */
export type CreditShorttermOverdue = {
  __typename?: 'CreditShorttermOverdue';
  /** 기준일자 */
  basedate?: Maybe<Scalars['String']['output']>;
  /** 단기연체정보 건수 */
  count?: Maybe<Scalars['Float']['output']>;
  /** 기관명 */
  name?: Maybe<Scalars['String']['output']>;
  /** 단기연체정보 기관별 정보 */
  organnizationsList?: Maybe<Array<ShorttermOverdueOrganization>>;
  /** 차주대상번호 */
  rcno?: Maybe<Scalars['String']['output']>;
  /** 차주대상구분(2: 사업자등록번호, 3: 법인등록번호) */
  rcnoKind?: Maybe<Scalars['String']['output']>;
  /** 요청일자 */
  reqdate?: Maybe<Scalars['String']['output']>;
};

/** 법정관리/워크아웃 */
export type CreditWorkout = {
  __typename?: 'CreditWorkout';
  /** 사건번호 */
  hngno?: Maybe<Scalars['String']['output']>;
  /** 업체명 */
  korentrnm?: Maybe<Scalars['String']['output']>;
  /** 법정관리관계일자 */
  lglmgmtRldDate?: Maybe<Scalars['String']['output']>;
  /** 법정관리유형코드 */
  lglmgmtdivcd?: Maybe<Scalars['String']['output']>;
  /** 법정관리유형명 */
  lglmgmtdivnm?: Maybe<Scalars['String']['output']>;
  /** 법원코드 */
  lwccd?: Maybe<Scalars['String']['output']>;
  /** 법원명 */
  lwcnm?: Maybe<Scalars['String']['output']>;
  /** 업체코드 */
  upchecd?: Maybe<Scalars['String']['output']>;
};

export type DeleteFileResult = {
  __typename?: 'DeleteFileResult';
  error: Scalars['Boolean']['output'];
  /** 삭제 요청한 파일 아이디 */
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type DeleteResult = {
  __typename?: 'DeleteResult';
  error: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type DesktopAppraisal = {
  __typename?: 'DesktopAppraisal';
  acceptedAt?: Maybe<Scalars['String']['output']>;
  appraiser?: Maybe<DesktopAppraisalAppraiser>;
  assignedAt?: Maybe<Scalars['String']['output']>;
  canceledAt?: Maybe<Scalars['String']['output']>;
  clientMemo?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  desktopAppraisalAssets?: Maybe<Array<Maybe<DesktopAppraisalAsset>>>;
  finishedAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isReportCreated?: Maybe<Scalars['Boolean']['output']>;
  memoRoomId?: Maybe<Scalars['String']['output']>;
  rejectedAt?: Maybe<Scalars['String']['output']>;
  requestedAt?: Maybe<Scalars['String']['output']>;
  requester?: Maybe<DesktopAppraisalRequester>;
  unassignedAt?: Maybe<Scalars['String']['output']>;
};

export type DesktopAppraisalAppraiser = {
  __typename?: 'DesktopAppraisalAppraiser';
  appraiserCompanyId?: Maybe<Scalars['String']['output']>;
  appraiserCompanyName?: Maybe<Scalars['String']['output']>;
  appraiserId?: Maybe<Scalars['String']['output']>;
  appraiserName?: Maybe<Scalars['String']['output']>;
};

export type DesktopAppraisalAsset = {
  __typename?: 'DesktopAppraisalAsset';
  address?: Maybe<Scalars['String']['output']>;
  area?: Maybe<Scalars['Float']['output']>;
  assetPnu?: Maybe<Scalars['String']['output']>;
  assetType?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  dashboardAssetId?: Maybe<Scalars['String']['output']>;
  desktopAppraisalValue?: Maybe<Scalars['Float']['output']>;
  dong?: Maybe<Scalars['String']['output']>;
  estimatePrice?: Maybe<Scalars['Float']['output']>;
  ho?: Maybe<Scalars['String']['output']>;
  jimok?: Maybe<Scalars['String']['output']>;
  pnu?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  useName?: Maybe<Scalars['String']['output']>;
};

export type DesktopAppraisalRequester = {
  __typename?: 'DesktopAppraisalRequester';
  companyId?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  requesterEmail?: Maybe<Scalars['String']['output']>;
  requesterId?: Maybe<Scalars['String']['output']>;
  requesterName?: Maybe<Scalars['String']['output']>;
  requesterPhoneNumber?: Maybe<Scalars['String']['output']>;
};

/** 경매 타입 */
export enum EAuctionType {
  /** 경매 */
  Auction = 'AUCTION',
  /** 공매 */
  PublicAuction = 'PUBLIC_AUCTION'
}

/** 차주 유형 */
export enum EDebtorOccupation {
  /** 법인사업자 */
  CorporateBusiness = 'CORPORATE_BUSINESS',
  /** 직장인 */
  Employee = 'EMPLOYEE',
  /** 개인사업자 */
  IndividualBusiness = 'INDIVIDUAL_BUSINESS',
  /** 기타 */
  Other = 'OTHER',
  /** 공무원 */
  PublicOfficial = 'PUBLIC_OFFICIAL'
}

/** 대출상담 상태 */
export enum ELoanConsultationStateId {
  /** 대출상담(상담중) */
  LoanConsultationConsulting = 'LOAN_CONSULTATION_CONSULTING',
  /** 대출상담(계약없이종결) */
  LoanConsultationNoContractClosed = 'LOAN_CONSULTATION_NO_CONTRACT_CLOSED'
}

/** 대출계약 상태 */
export enum ELoanContractStateId {
  /** 대출계약(계약체결) */
  LoanContractContract = 'LOAN_CONTRACT_CONTRACT',
  /** 대출계약(계약완료) */
  LoanContractFinish = 'LOAN_CONTRACT_FINISH',
  /** 대출계약(실행없이종결) */
  LoanContractNoExecutionClosed = 'LOAN_CONTRACT_NO_EXECUTION_CLOSED'
}

/** 대출제안 상태 */
export enum ELoanProposalStateId {
  LoanProposalNoConsultationClosed = 'LOAN_PROPOSAL_NO_CONSULTATION_CLOSED',
  /** 대출제안(선택없이종결) */
  LoanProposalNoSelectionClosed = 'LOAN_PROPOSAL_NO_SELECTION_CLOSED',
  /** 대출제안(제안) */
  LoanProposalPropose = 'LOAN_PROPOSAL_PROPOSE',
  /** 대출제안(제안수락) */
  LoanProposalProposeAccept = 'LOAN_PROPOSAL_PROPOSE_ACCEPT'
}

/** 대출목적 */
export enum ELoanPurpose {
  /** 경락잔금 */
  Auction = 'AUCTION',
  /** 건축자금 */
  Construction = 'CONSTRUCTION',
  /** 운영자금 */
  Operating = 'OPERATING',
  /** 구입자금 */
  Purchase = 'PURCHASE'
}

/** 대출신청 상태 */
export enum ELoanRequestStateId {
  /** 대출신청(신청) */
  LoanRequestApply = 'LOAN_REQUEST_APPLY',
  /** 대출신청(신청거절) */
  LoanRequestApplyReject = 'LOAN_REQUEST_APPLY_REJECT',
  /** 대출신청(스크리닝진행) */
  LoanRequestScreening = 'LOAN_REQUEST_SCREENING',
  /** 대출신청(스크리닝반려) */
  LoanRequestScreeningReject = 'LOAN_REQUEST_SCREENING_REJECT',
  /** 대출신청(스크리닝재진행) */
  LoanRequestScreeningRetry = 'LOAN_REQUEST_SCREENING_RETRY',
  /** 대출신청(임시저장) */
  LoanRequestTemporarySave = 'LOAN_REQUEST_TEMPORARY_SAVE'
}

/** 대출신청, 제안 상태 */
export enum ELoanStateId {
  /** 대출상담(상담중) */
  LoanConsultationConsulting = 'LOAN_CONSULTATION_CONSULTING',
  /** 대출상담(계약없이종결) */
  LoanConsultationNoContractClosed = 'LOAN_CONSULTATION_NO_CONTRACT_CLOSED',
  /** 대출계약(계약체결) */
  LoanContractContract = 'LOAN_CONTRACT_CONTRACT',
  /** 대출계약(계약완료) */
  LoanContractFinish = 'LOAN_CONTRACT_FINISH',
  /** 대출계약(실행없이종결) */
  LoanContractNoExecutionClosed = 'LOAN_CONTRACT_NO_EXECUTION_CLOSED',
  /** 대출제안(상담없이종결) */
  LoanProposalNoConsultationClosed = 'LOAN_PROPOSAL_NO_CONSULTATION_CLOSED',
  /** 대출제안(선택없이종결) */
  LoanProposalNoSelectionClosed = 'LOAN_PROPOSAL_NO_SELECTION_CLOSED',
  /** 대출제안(제안) */
  LoanProposalPropose = 'LOAN_PROPOSAL_PROPOSE',
  /** 대출제안(제안수락) */
  LoanProposalProposeAccept = 'LOAN_PROPOSAL_PROPOSE_ACCEPT',
  /** 대출신청(신청) */
  LoanRequestApply = 'LOAN_REQUEST_APPLY',
  /** 대출신청(신청거절) */
  LoanRequestApplyReject = 'LOAN_REQUEST_APPLY_REJECT',
  /** 대출신청(스크리닝진행) */
  LoanRequestScreening = 'LOAN_REQUEST_SCREENING',
  /** 대출신청(스크리닝반려) */
  LoanRequestScreeningReject = 'LOAN_REQUEST_SCREENING_REJECT',
  /** 대출신청(스크리닝재진행) */
  LoanRequestScreeningRetry = 'LOAN_REQUEST_SCREENING_RETRY',
  /** 대출신청(임시저장) */
  LoanRequestTemporarySave = 'LOAN_REQUEST_TEMPORARY_SAVE'
}

/** 회원가입 채널 */
export enum ESignupChannel {
  /** 옥션원 */
  Auction1 = 'AUCTION1',
  /** 지지옥션 */
  Ggi = 'GGI',
  /** 파이퍼 */
  Piper = 'PIPER'
}

/** 오늘의딜 리스트 조회 타입 */
export enum ETodayDealListType {
  Auction = 'AUCTION',
  Available = 'AVAILABLE',
  Proposed = 'PROPOSED'
}

/** 대출계약, 대출실행 최종 업데이트 주체 */
export enum EUpdatedBy {
  /** 금융기관 */
  FinancialInstitution = 'FINANCIAL_INSTITUTION',
  /** 스크리닝 */
  Screening = 'SCREENING'
}

export type ExistingLoan = {
  /** 회사 아이디 키 */
  companyGroup?: InputMaybe<Scalars['String']['input']>;
  /** 채권최고액 */
  debtCeiling: Scalars['Float']['input'];
  /** 금융기관명 */
  financialInstitutionName: Scalars['String']['input'];
  /** 자금용도 */
  fundPurpose: Scalars['String']['input'];
  /** 기존대출 테이블 PK */
  id?: InputMaybe<Scalars['String']['input']>;
  /** 삭제 여부 */
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  /** 대출금 */
  loanAmount: Scalars['Float']['input'];
  /** 대환필요 */
  refinancingRequired: Scalars['Boolean']['input'];
};

export type ExpectedLoanAmountRequestInput = {
  v1: ExpectedLoanAmountRequestInputV1;
};

export type ExpectedLoanAmountRequestInputV1 = {
  /** 대표자산 pnu */
  assetPnu: Scalars['String']['input'];
  /** 집합건물 hopk */
  hoPk?: InputMaybe<Scalars['String']['input']>;
  /** 선순위채권 */
  ltvPriorBondSum: Scalars['Float']['input'];
};

export enum ExpectedLoanAmountRequestStatusEnum {
  Completed = 'COMPLETED',
  OnProgress = 'ON_PROGRESS'
}

export type ExpectedLoanAmountResponseV2 = {
  __typename?: 'ExpectedLoanAmountResponseV2';
  assetPnu: Scalars['String']['output'];
  estimatePrice: Scalars['Float']['output'];
  expectedLoanAmount: Scalars['Float']['output'];
  expectedLoanAmountRequestStatus?: Maybe<ExpectedLoanAmountRequestStatusEnum>;
  expectedLoanRateRange: ExpectedLoanRateRange;
  hoPk?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  loanDifficultyRank: LoanDifficultyRankEnum;
  loanProductType: Scalars['String']['output'];
  ltvPriorBondSum: Scalars['Float']['output'];
};

export type ExpectedLoanRateRange = {
  __typename?: 'ExpectedLoanRateRange';
  max: Scalars['Float']['output'];
  min: Scalars['Float']['output'];
};

export type File = {
  __typename?: 'File';
  error: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type FilterArgs = {
  /** 현재 페이지 */
  currentPage: Scalars['Int']['input'];
  /** 페이지당 행 개수 */
  itemPerPage: Scalars['Int']['input'];
};

export type FinishLoanContractData = {
  __typename?: 'FinishLoanContractData';
  /** 대출계약 아이디 */
  loanContractId: Scalars['String']['output'];
  /** 메시지 */
  message: Scalars['String']['output'];
};

export type FinishLoanContractResult = {
  __typename?: 'FinishLoanContractResult';
  data: FinishLoanContractData;
};

export type GeojsonPolygonFeature = {
  __typename?: 'GeojsonPolygonFeature';
  geometry?: Maybe<GeojsonPolygonGeometry>;
  type?: Maybe<Scalars['String']['output']>;
};

export type GeojsonPolygonGeometry = MultiPolygonGeometry | PolygonGeometry;

export type KakaoAuthResponse = {
  __typename?: 'KakaoAuthResponse';
  createdAt?: Maybe<Scalars['String']['output']>;
};

export type LandDetail = {
  buildingUseDetailName: Scalars['String']['input'];
  totalBuildingUseDetailArea: Scalars['Float']['input'];
};

export type LandUse = {
  landUseArea: Scalars['Float']['input'];
  landUseName: Scalars['String']['input'];
};

export type LeaseContract = {
  __typename?: 'LeaseContract';
  /** 상호명 */
  businessName?: Maybe<Scalars['String']['output']>;
  /** 보증금 */
  deposit: Scalars['Float']['output'];
  /** LeaseContract 테이블 PK */
  id: Scalars['String']['output'];
  /** 보증금 상환 목적 여부 */
  isDepositRepaymentPurpose?: Maybe<Scalars['Boolean']['output']>;
  /** 월 임대료 */
  monthlyRent: Scalars['Float']['output'];
  /** 임차인 명 */
  tenantName?: Maybe<Scalars['String']['output']>;
};

export type LeaseContractInput = {
  /** 상호명 */
  businessName?: InputMaybe<Scalars['String']['input']>;
  /** 보증금 */
  deposit: Scalars['Float']['input'];
  /** LeaseContract 테이블 PK */
  id?: InputMaybe<Scalars['String']['input']>;
  /** 삭제 여부 */
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  /** 보증금 상환 목적 여부 */
  isDepositRepaymentPurpose: Scalars['Boolean']['input'];
  /** 월 임대료 */
  monthlyRent: Scalars['Float']['input'];
  /** 임차인 명 */
  tenantName?: InputMaybe<Scalars['String']['input']>;
};

export type LoanConsultationCount = {
  __typename?: 'LoanConsultationCount';
  /** 상담중 상태 개수 */
  consulting: Scalars['Int']['output'];
  /** 계약없이 종결 상태 개수 */
  noContractClosed: Scalars['Int']['output'];
  /** 대출상담 전체 상태 개수 */
  total: Scalars['Int']['output'];
};

export type LoanConsultationSchema = {
  __typename?: 'LoanConsultationSchema';
  /** 계약없이 종결 일자 */
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  /** 대출상담 계약없이 종결 코멘트 */
  canceledReason?: Maybe<Scalars['String']['output']>;
  finishedAt?: Maybe<Scalars['DateTime']['output']>;
  loanConsultationId: Scalars['String']['output'];
  loanContract?: Maybe<LoanContractSchema>;
  loanState?: Maybe<LoanState>;
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LoanContractCount = {
  __typename?: 'LoanContractCount';
  /** 대출계약 계약체결 상태 개수 */
  contract: Scalars['Int']['output'];
  /** 대출계약 실행완료 상태 개수 */
  finish: Scalars['Int']['output'];
  /** 대출계약 실행없이종결 상태 개수 */
  noExecutionClosed: Scalars['Int']['output'];
  /** 대출계약 전체 상태 개수 */
  total: Scalars['Int']['output'];
};

export type LoanContractSchema = {
  __typename?: 'LoanContractSchema';
  /** 청구서 수신 이메일 */
  billingEmail?: Maybe<Scalars['String']['output']>;
  /** 실행없이 종결 사유 */
  closedReason?: Maybe<Scalars['String']['output']>;
  /** 계약일 */
  contractDate?: Maybe<Scalars['String']['output']>;
  /** 실행일 */
  executionDate?: Maybe<Scalars['String']['output']>;
  /** 실행예정일 */
  executionExpectedDate?: Maybe<Scalars['String']['output']>;
  /** 계약 예정일 */
  expectedContractDate?: Maybe<Scalars['String']['output']>;
  /** 대출 예정액 */
  expectedLoanAmount?: Maybe<Scalars['Float']['output']>;
  /** 대출액 */
  loanAmount?: Maybe<Scalars['Float']['output']>;
  /** 최초 계약체결시각 */
  loanContractCreatedAt?: Maybe<Scalars['String']['output']>;
  /** 대출계약 ID */
  loanContractId: Scalars['String']['output'];
  /** 최종 계약체결시각 */
  loanContractUpdatedAt?: Maybe<Scalars['String']['output']>;
  /** 대출계약 최종 업데이트 주체 */
  loanContractUpdatedBy?: Maybe<EUpdatedBy>;
  /** 최초 실행완료시각 */
  loanExecutionCreatedAt?: Maybe<Scalars['String']['output']>;
  /** 최종 실행완료시각 */
  loanExecutionUpdatedAt?: Maybe<Scalars['String']['output']>;
  /** 대출실행 최종 업데이트 주체 */
  loanExecutionUpdatedBy?: Maybe<EUpdatedBy>;
  /** 대출계약 상태 */
  loanState?: Maybe<LoanState>;
  /** 마지막 업데이트 일자 */
  updatedAt?: Maybe<Scalars['String']['output']>;
};

/** 대출등급("A: 대부분의 금융기관에서 대출 가능한 자산","B: 제한된 금융기관에서 대출 가능한 자산","C: 제한된 금융기관에서 제한된 조건 하에 대출 가능한 자산" */
export enum LoanDifficultyRankEnum {
  A = 'A',
  B = 'B',
  C = 'C'
}

export type LoanProduct = {
  __typename?: 'LoanProduct';
  bankCompanyId: Scalars['String']['output'];
  bankName: Scalars['String']['output'];
  products?: Maybe<Array<Maybe<Product>>>;
};

export type LoanProposal = {
  __typename?: 'LoanProposal';
  acceptedAt?: Maybe<Scalars['String']['output']>;
  /** 대출가능금액 */
  availableLimit?: Maybe<Scalars['Float']['output']>;
  /** 은행 company ID */
  bankCompanyId: Scalars['String']['output'];
  /** 은행 이름 */
  bankName: Scalars['String']['output'];
  /** 대출상품 ID */
  bankProductId: Scalars['String']['output'];
  /** 대출상품 이름 */
  bankProductName?: Maybe<Scalars['String']['output']>;
  /** 은행 담당자가 입력하는 코멘트 */
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['String']['output']>;
  /** 조기상환수수료 추가정보 */
  earlyRepaymentFeeDesc?: Maybe<Scalars['String']['output']>;
  /** 조기상환수수료 */
  earlyRepaymentFeeRate?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  loanConsultation?: Maybe<LoanConsultationSchema>;
  /** 대출기간 */
  loanDuration?: Maybe<Scalars['String']['output']>;
  /** 대출기간 추가정보 */
  loanDurationDesc?: Maybe<Scalars['String']['output']>;
  /** 대출신청 ID */
  loanRequestId: Scalars['String']['output'];
  loanState?: Maybe<LoanState>;
  /** 은행 담당자 정보 ID */
  managerId: Scalars['String']['output'];
  /** 은행 담당자 이름 */
  managerName: Scalars['String']['output'];
  /** 대출금리 */
  rate?: Maybe<Scalars['Float']['output']>;
  /** 금리주기 */
  rateDuration?: Maybe<Scalars['String']['output']>;
  /** 상환방법 */
  repaymentType?: Maybe<Scalars['String']['output']>;
};

export type LoanProposalCount = {
  __typename?: 'LoanProposalCount';
  /** 상담없이 종결 개수 */
  noConsultationClosed: Scalars['Int']['output'];
  /** 선택없이 종결 개수 */
  noSelectionClosed: Scalars['Int']['output'];
  /** 제안 상태 개수 */
  propose: Scalars['Int']['output'];
  /** 제안수락 상태 개수 */
  proposeAccept: Scalars['Int']['output'];
  /** 대출제안 전체 상태 가수 */
  total: Scalars['Int']['output'];
};

export type LoanProposalInput = {
  v1: LoanProposalInputV1;
};

export type LoanProposalInputV1 = {
  /** 대출가능금액 */
  availableLimit?: InputMaybe<Scalars['Float']['input']>;
  /** 은행 company ID */
  bankCompanyId?: InputMaybe<Scalars['String']['input']>;
  /** 대출상품 ID */
  bankProductId?: InputMaybe<Scalars['String']['input']>;
  /** 대출상품 이름 */
  bankProductName?: InputMaybe<Scalars['String']['input']>;
  /** 은행 담당자가 입력하는 코멘트 */
  comment?: InputMaybe<Scalars['String']['input']>;
  /** 조기상환수수료 추가정보 */
  earlyRepaymentFeeDesc?: InputMaybe<Scalars['String']['input']>;
  /** 조기상환수수료 */
  earlyRepaymentFeeRate?: InputMaybe<Scalars['Float']['input']>;
  /** 대출기간 */
  loanDuration?: InputMaybe<Scalars['String']['input']>;
  /** 대출기간 추가정보 */
  loanDurationDesc?: InputMaybe<Scalars['String']['input']>;
  /** 대출신청 ID */
  loanRequestId: Scalars['String']['input'];
  /** 대출금리 */
  rate?: InputMaybe<Scalars['Float']['input']>;
  /** 금리주기 */
  rateDuration?: InputMaybe<Scalars['String']['input']>;
  /** 상환방법 */
  repaymentType?: InputMaybe<Scalars['String']['input']>;
};

export type LoanRequest = {
  __typename?: 'LoanRequest';
  /** 잔금납입일자 */
  assetBalanceDueDate?: Maybe<Scalars['String']['output']>;
  /** 계약일자 */
  assetContractDate?: Maybe<Scalars['String']['output']>;
  /** 자산 상세정보 */
  assetDetail?: Maybe<AssetDetail>;
  /** 대출신청 HoPk */
  assetHoPk?: Maybe<Scalars['String']['output']>;
  /** 소유자법인직접입력여부 */
  assetOwnerCorpDirectInputFlag?: Maybe<Scalars['Boolean']['output']>;
  /** 담보부동산 소유자 법인여부 */
  assetOwnerCorpFlag?: Maybe<Scalars['Boolean']['output']>;
  /** 법인사업자번호(소유자) */
  assetOwnerCorpId?: Maybe<Scalars['String']['output']>;
  /** 법인명(소유자) */
  assetOwnerCorpName?: Maybe<Scalars['String']['output']>;
  /** 담보부동산 소유형태 공동명의 여부 */
  assetOwnerMultiFlag?: Maybe<Scalars['Boolean']['output']>;
  /** 소유자명 */
  assetOwnerName?: Maybe<Scalars['String']['output']>;
  /** 대출신청 assetPnu */
  assetPnu?: Maybe<Scalars['String']['output']>;
  /** 경락 잔금 정보 */
  auctionInfo?: Maybe<AuctionInfoResponse>;
  /** 경매 타입(공매/경매) */
  auctionType?: Maybe<EAuctionType>;
  /** 대출신청서 카운트(조회수, 대출제안수, 선택된대출제안수) */
  count?: Maybe<LoanRequestCountObject>;
  /** 대출신청서 생성일자(대출신청서 최초 작성 일자) */
  createdAt: Scalars['String']['output'];
  /** 법인개설일(채무자) */
  debtorCorpCreateDate?: Maybe<Scalars['String']['output']>;
  /** 채무자 법인여부 */
  debtorCorpFlag?: Maybe<Scalars['Boolean']['output']>;
  /** 법인사업자번호(채무자) */
  debtorCorpId?: Maybe<Scalars['String']['output']>;
  /** 법인명(채무자) */
  debtorCorpName?: Maybe<Scalars['String']['output']>;
  /** 법인대표자명(채무자) */
  debtorCorpRepName?: Maybe<Scalars['String']['output']>;
  /** 신용점수 */
  debtorCreditRating?: Maybe<Scalars['Float']['output']>;
  /** 채무자 담보소유자 동일여부 */
  debtorEqualsAssetOwnerFlag?: Maybe<Scalars['Boolean']['output']>;
  /** 채무자 신청자 동일여부 */
  debtorEqualsRequesterFlag?: Maybe<Scalars['Boolean']['output']>;
  /** 채무자 지역의료보험료(월) */
  debtorHealthInsur?: Maybe<Scalars['Float']['output']>;
  /** 채무자 연소득 */
  debtorIncome?: Maybe<Scalars['Float']['output']>;
  /** 채무자명 */
  debtorName?: Maybe<Scalars['String']['output']>;
  /** 채무자 직업 */
  debtorOccupation?: Maybe<Scalars['String']['output']>;
  /** 대출신청서 삭제 일자 */
  deletedAt?: Maybe<Scalars['String']['output']>;
  /** 대출신청 자산 예상감정 정보 */
  desktopAppraisal?: Maybe<DesktopAppraisal>;
  /** 예정공사비 */
  expectedConstructionCost?: Maybe<Scalars['Float']['output']>;
  /** 대출신청서 아이디 */
  id: Scalars['String']['output'];
  /** 기존 임대차계약 목록 */
  leaseContracts?: Maybe<Array<LeaseContract>>;
  /** 대출신청금액 */
  loanAmount?: Maybe<Scalars['Float']['output']>;
  /** 대출실행희망일 */
  loanExecDate?: Maybe<Scalars['String']['output']>;
  /** 대출제안서 만료 일자(대출선택 가능일자) */
  loanProposalExpireDate?: Maybe<Scalars['String']['output']>;
  /** 대출제안 */
  loanProposals?: Maybe<Array<LoanProposal>>;
  /** 대출용도 '건축자금' / '시설자금' / '운영자금 */
  loanPurpose?: Maybe<Scalars['String']['output']>;
  /** 대출용도금액(e.g. 부동산구입가격) */
  loanPurposePrice?: Maybe<Scalars['Float']['output']>;
  /** 대출신청서 접근 이력 */
  loanRequestAccessHistories?: Maybe<Array<LoanRequestAccessHistory>>;
  /** 대출신청서 만료일자(대출제안 가능일자) */
  loanRequestExpireDate?: Maybe<Scalars['String']['output']>;
  /** 대출신청서 첨부파일 */
  loanRequestFiles?: Maybe<LoanRequestFilesObjectType>;
  /** 대출신청 상태 */
  loanState?: Maybe<LoanState>;
  /** 기존 대출 목록 */
  ltvExistingLoans?: Maybe<Array<LtvExistingLoan>>;
  /** LTV 기존채무합계 */
  ltvPriorBondSum?: Maybe<Scalars['Float']['output']>;
  /** LTV 기존대출합계 */
  ltvPriorLoanSum?: Maybe<Scalars['Float']['output']>;
  /** 직접입력 주소(부동산 추가시) */
  manuallyInputAssetAddress?: Maybe<Scalars['String']['output']>;
  /** 나이스 업체코드 */
  niceUpchecd?: Maybe<Scalars['String']['output']>;
  /** 개인정보 삭제일 */
  personalDataDeletionDate?: Maybe<Scalars['String']['output']>;
  /** 공매 경락 잔금 정보 */
  publicAuctionInfo?: Maybe<PublicAuctionInfoResponse>;
  /** 추천인 코드 */
  referralCode?: Maybe<Scalars['String']['output']>;
  /** 신청자 파이퍼 유저 ID */
  requester?: Maybe<Requester>;
  /** 대출신청서 코멘트 */
  requesterComment?: Maybe<Scalars['String']['output']>;
  /** 스크리닝 정보 */
  screening?: Maybe<Screening>;
  /** 스크리닝 채팅방 roomId */
  screeningRoomId?: Maybe<Scalars['String']['output']>;
  /** 대출신청서 단순화 일련번호 */
  serialNumber?: Maybe<Scalars['String']['output']>;
  /** 대출신청서 최종 제출일자 */
  submissionUpdatedAt?: Maybe<Scalars['String']['output']>;
  /** 대출신청서 최종 변경 일자 */
  updatedAt: Scalars['String']['output'];
};

export type LoanRequestAccessHistory = {
  __typename?: 'LoanRequestAccessHistory';
  /** 회사 아이디 */
  companyId?: Maybe<Scalars['String']['output']>;
  /** 회사 이름 */
  companyName?: Maybe<Scalars['String']['output']>;
  /** 히스토리 로그 생성 일자 */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** 대출신청접근로그 테이블 PK */
  id: Scalars['String']['output'];
  /** 대출신청서 아이디 */
  loanRequestId?: Maybe<Scalars['String']['output']>;
  /** 유저 이름 */
  userName?: Maybe<Scalars['String']['output']>;
  /** 유저 아이디 */
  vosUserId?: Maybe<Scalars['String']['output']>;
};

export type LoanRequestCount = {
  __typename?: 'LoanRequestCount';
  /** 신청 상태 개수 */
  apply: Scalars['Int']['output'];
  /** 신청거절 상태 개수 */
  applyReject: Scalars['Int']['output'];
  /** 스크리닝진행 상태 개수 */
  screening: Scalars['Int']['output'];
  /** 스크리닝반려 상태 개수 */
  screeningReject: Scalars['Int']['output'];
  /** 스크리닝재진행 상태 개수 */
  screeningRetry: Scalars['Int']['output'];
  /** 임시저장 상태 개수 */
  temporarySave: Scalars['Int']['output'];
  /** 대출신청 전체 상태 개수 */
  total: Scalars['Int']['output'];
};

export type LoanRequestCountObject = {
  __typename?: 'LoanRequestCountObject';
  /** 대출 제안수(모든 금융기관 카운트) */
  totalProposalCount?: Maybe<Scalars['Int']['output']>;
  /** 선택된 대출제안수(모든 금융기관 카운트) */
  totalSelectedProposalCount?: Maybe<Scalars['Int']['output']>;
  /** 대출신청서 전체 조회수(모든 금융기관 카운트) */
  totalViewCount?: Maybe<Scalars['Int']['output']>;
};

export type LoanRequestFilesObjectType = {
  __typename?: 'LoanRequestFilesObjectType';
  /** 입찰보증금납부영수증 */
  bidSecurityReceipts?: Maybe<Array<LoanRequestFilesOutput>>;
  /** 건축도면 */
  buildingBlueprints?: Maybe<Array<LoanRequestFilesOutput>>;
  /** 건축허가서 */
  buildingPermits?: Maybe<Array<LoanRequestFilesOutput>>;
  /** 사업계획서 */
  businessPlans?: Maybe<Array<LoanRequestFilesOutput>>;
  /** 사업자등록증명원또는사업자등록증사본 */
  businessRegistrationCertificates?: Maybe<Array<LoanRequestFilesOutput>>;
  /** 도급공사계약서 */
  constructionContracts?: Maybe<Array<LoanRequestFilesOutput>>;
  /** 재직증명서 */
  employmentCertificates?: Maybe<Array<LoanRequestFilesOutput>>;
  /** 결산재무제표 */
  financialStatements?: Maybe<Array<LoanRequestFilesOutput>>;
  /** 금융거래확인서 */
  financialTransactionCertificates?: Maybe<Array<LoanRequestFilesOutput>>;
  /** 소득금액증명원 */
  incomeCertificates?: Maybe<Array<LoanRequestFilesOutput>>;
  /** 근로소득원천징수영수증 */
  incomeTaxWithholdingStatements?: Maybe<Array<LoanRequestFilesOutput>>;
  /** 임대차계약서사본 */
  leaseAgreementCopies?: Maybe<Array<LoanRequestFilesOutput>>;
  /** 기타 */
  others?: Maybe<Array<LoanRequestFilesOutput>>;
  /** 대리신청동의서 */
  proxyApplicationAgreements?: Maybe<Array<LoanRequestFilesOutput>>;
  /** 주민등록등본 */
  residentRegistrationCertificates?: Maybe<Array<LoanRequestFilesOutput>>;
  /** 매매분양계약서사본 */
  saleAndPurchaseAgreementCopies?: Maybe<Array<LoanRequestFilesOutput>>;
  /** 주주명부TBD */
  shareholderRegisterTbds?: Maybe<Array<LoanRequestFilesOutput>>;
  /** 부가가치세과세표준확인원 */
  valueAddedTaxAssessmentCertificates?: Maybe<Array<LoanRequestFilesOutput>>;
};

export type LoanRequestFilesOutput = {
  __typename?: 'LoanRequestFilesOutput';
  createdAt: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  isScreeningAdminUploaded: Scalars['Boolean']['output'];
  loanRequestFileId: Scalars['String']['output'];
};

export type LoanRequestInput = {
  v1: LoanRequestInputV1;
};

export type LoanRequestInputV1 = {
  /** annualBusinessIncome */
  annualBusinessIncome?: InputMaybe<Scalars['Float']['input']>;
  /** 연소득 */
  annualIncome?: InputMaybe<Scalars['Float']['input']>;
  /** 신청인코멘트 */
  applicantComment?: InputMaybe<Scalars['String']['input']>;
  /** 신청인이메일 */
  applicantEmail?: InputMaybe<Scalars['String']['input']>;
  /** 신청인 */
  applicantName?: InputMaybe<Scalars['String']['input']>;
  /** 신청인연락처 */
  applicantPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** 소유자법인직접입력여부 */
  assetOwnerCorpDirectInputFlag?: InputMaybe<Scalars['Boolean']['input']>;
  assets?: InputMaybe<Array<InputMaybe<Asset>>>;
  /** 경매 정보 */
  auctionInfo?: InputMaybe<AuctionInfo>;
  /** 잔금일 */
  balanceDueDate?: InputMaybe<Scalars['String']['input']>;
  /** 계약일 */
  contractDate?: InputMaybe<Scalars['String']['input']>;
  /** 신용점수 */
  creditScore?: InputMaybe<Scalars['String']['input']>;
  /** 채무자법인개설일 */
  debtorCorporateEstablishmentDate?: InputMaybe<Scalars['String']['input']>;
  /** 채무자법인명 */
  debtorCorporateName?: InputMaybe<Scalars['String']['input']>;
  /** 채무자법인등록번호 */
  debtorCorporateRegistrationNumber?: InputMaybe<Scalars['String']['input']>;
  /** 채무자법인대표자명 */
  debtorCorporateRepresentativeName?: InputMaybe<Scalars['String']['input']>;
  /** 채무자근무형태 */
  debtorEmploymentStatus?: InputMaybe<Scalars['String']['input']>;
  /** 채무자이름 */
  debtorName?: InputMaybe<Scalars['String']['input']>;
  /** 채무자대리인 */
  debtorRepresentative?: InputMaybe<Scalars['Boolean']['input']>;
  estimatePrice?: InputMaybe<Scalars['Float']['input']>;
  /** 기존대출 */
  existingLoans?: InputMaybe<Array<InputMaybe<ExistingLoan>>>;
  /** 예정공사비 */
  expectedConstructionCost?: InputMaybe<Scalars['Float']['input']>;
  /** 선순위채권합계 */
  firstPriorityDebtTotal?: InputMaybe<Scalars['Float']['input']>;
  /** 선순위대출합계 */
  firstPriorityLoanTotal?: InputMaybe<Scalars['Float']['input']>;
  isDraft: Scalars['Boolean']['input'];
  /** 소유자와채무자가같은가 */
  isOwnerDebtor?: InputMaybe<Scalars['Boolean']['input']>;
  /** 개인정보수집및이용동의 */
  isPiConsent?: InputMaybe<Scalars['Boolean']['input']>;
  /** 임대차 정보 */
  leaseContracts?: InputMaybe<Array<InputMaybe<LeaseContractInput>>>;
  /** 대출신청액 */
  loanApplicationAmount?: InputMaybe<Scalars['Float']['input']>;
  /** 대출실행일 */
  loanDisbursementDate?: InputMaybe<Scalars['String']['input']>;
  /** 대출목적 */
  loanPurpose?: InputMaybe<ELoanPurpose>;
  loanRequestId: Scalars['String']['input'];
  /** 주소를 수동으로 입력하는 경우 */
  manuallyInputAssetAddress?: InputMaybe<Scalars['String']['input']>;
  /** 지역의료보험료 */
  medicalInsurancePremium?: InputMaybe<Scalars['Float']['input']>;
  /** 명의유형 */
  nameType?: InputMaybe<Scalars['String']['input']>;
  /** 나이스 업체코드 */
  niceUpchecd?: InputMaybe<Scalars['String']['input']>;
  /** 소유자개인사업자번호 */
  ownerBusinessRegistrationNumber?: InputMaybe<Scalars['String']['input']>;
  /** 소유자법인명 */
  ownerCorporateName?: InputMaybe<Scalars['String']['input']>;
  /** 소유자법인등록번호 */
  ownerCorporateRegistrationNumber?: InputMaybe<Scalars['String']['input']>;
  /** 소유자근무형태 */
  ownerEmploymentStatus?: InputMaybe<Scalars['String']['input']>;
  /** 소유자이름 */
  ownerName?: InputMaybe<Scalars['String']['input']>;
  /** 공매 정보 */
  publicAuctionInfo?: InputMaybe<PublicAuctionInfo>;
  /** 부동산 구입 가격 */
  purchasePrice?: InputMaybe<Scalars['Float']['input']>;
  /** 추천인 코드 */
  referralCode?: InputMaybe<Scalars['String']['input']>;
};

export type LoanState = {
  __typename?: 'LoanState';
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  event: Scalars['String']['output'];
  stateId: Scalars['Int']['output'];
};

export type LtvExistingLoan = {
  __typename?: 'LtvExistingLoan';
  /** 회사 아이디 키 */
  companyGroup?: Maybe<Scalars['String']['output']>;
  /** 채권최고액 */
  debtCeiling: Scalars['Float']['output'];
  /** 금융기관명 */
  financialInstitutionName: Scalars['String']['output'];
  /** 자금목적 */
  fundPurpose: Scalars['String']['output'];
  /** 기존대출 테이블 PK */
  id?: Maybe<Scalars['String']['output']>;
  /** 대출금 */
  loanAmount: Scalars['Float']['output'];
  /** 대환필요 */
  refinancingRequired: Scalars['Boolean']['output'];
};

export type MultiPolygonGeometry = {
  __typename?: 'MultiPolygonGeometry';
  multiPolygonCoordinates?: Maybe<Array<Maybe<Array<Maybe<Array<Maybe<Array<Maybe<Scalars['Float']['output']>>>>>>>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** 대출상담을 계약없이 종결 시킵니다. */
  closeLoanConsultation: CloseLoanConsultationResult;
  /** 대출계약을 실행없이 종결 합니다. */
  closeLoanContract: CloseLoanContractResult;
  /** 대출제안을 상담없이 종결 시킵니다. */
  closeLoanProposalWithoutConsultation: CloseLoanProposalResult;
  /** 특정 대출제안에 대해서 대출상담을 생성한다.(금융기관) */
  createLoanConsultationByLoanManager: CreateLoanConsultationResult;
  /** 대출계약을 생성합니다.(계약 체결 or 계약없이 실행완료) */
  createLoanContract: CreateLoanContractResult;
  /** 대출계약을 실행 완료시킵니다. */
  finishLoanContract: FinishLoanContractResult;
  mutAcceptLoanProposal: CreationResult;
  mutAcceptScreening: CreationResult;
  mutChangePassword: UpdateResult;
  mutCreateExpectedLoanAmountRequest: CreationResult;
  mutCreateLoanProposal: CreationResult;
  mutCreateLoanRequest: CreationResult;
  mutCreateLoanRequestId: CreationResult;
  mutDeleteLoanAtchFile: DeleteFileResult;
  mutDeleteLoanProposal: DeleteResult;
  mutDeleteLoanRequest: DeleteResult;
  mutLoginWithKakaoAuthResponse: PiperLoginResult;
  mutLoginWithNaverAuthResponse: PiperLoginResult;
  mutRefreshPiperAccessToken: PiperLoginResult;
  mutRejectScreening: CreationResult;
  mutSaveFileKey: CreationResult;
  mutSaveKakaoAuthResponse: CreationResult;
  mutSaveNaverAuthResponse: CreationResult;
  mutSaveNiceCertSuccessResult: SaveNiceCertSuccessResultResponse;
  mutSignInPiperCustom: PiperLoginResult;
  mutSignUpPiperSocial: PiperLoginResult;
  mutUpdateLoanProposal: UpdateResult;
  mutUpdatePiperUser: UpdateResult;
  /** 특정 대출상담 상태를 변경한다.(금융기관) */
  updateLoanConsultationByLoanManager: UpdateLoanConsultationResult;
  /** 대출계약 테이블을 업데이트 합니다. */
  updateLoanContract: UpdateLoanContractResult;
  /** 특정 대출신청서 대출제안 선택마감일을 변경한다.(스크리닝 담당자) */
  updateLoanProposalSelectDeadline: UpdateLoanProposalSelectDeadlineResult;
  /** 특정 대출신청서 제안마감일을 변경한다.(스크리닝 담당자) */
  updateLoanRequestProposeDeadline: UpdateLoanRequestProposeDeadlineResult;
};


export type MutationCloseLoanConsultationArgs = {
  closedReason?: InputMaybe<Scalars['String']['input']>;
  loanConsultationId: Scalars['String']['input'];
};


export type MutationCloseLoanContractArgs = {
  closedReason?: InputMaybe<Scalars['String']['input']>;
  loanContractId: Scalars['String']['input'];
};


export type MutationCloseLoanProposalWithoutConsultationArgs = {
  loanProposalId: Scalars['String']['input'];
};


export type MutationCreateLoanConsultationByLoanManagerArgs = {
  loanProposalId: Scalars['String']['input'];
};


export type MutationCreateLoanContractArgs = {
  billingEmail?: InputMaybe<Scalars['String']['input']>;
  contractDate?: InputMaybe<Scalars['DateTime']['input']>;
  executionDate?: InputMaybe<Scalars['DateTime']['input']>;
  executionExpectedDate?: InputMaybe<Scalars['DateTime']['input']>;
  expectedContractDate?: InputMaybe<Scalars['DateTime']['input']>;
  expectedLoanAmount?: InputMaybe<Scalars['Float']['input']>;
  loanAmount?: InputMaybe<Scalars['Float']['input']>;
  loanConsultationId: Scalars['String']['input'];
};


export type MutationFinishLoanContractArgs = {
  billingEmail: Scalars['String']['input'];
  contractDate: Scalars['DateTime']['input'];
  executionDate: Scalars['DateTime']['input'];
  loanAmount: Scalars['Float']['input'];
  loanContractId: Scalars['String']['input'];
};


export type MutationMutAcceptLoanProposalArgs = {
  loanProposalId: Scalars['String']['input'];
};


export type MutationMutAcceptScreeningArgs = {
  acceptScreeningInput: AcceptScreeningInput;
};


export type MutationMutChangePasswordArgs = {
  changePasswordInput: ChangePasswordInput;
};


export type MutationMutCreateExpectedLoanAmountRequestArgs = {
  expectedLoanAmountRequestInput: ExpectedLoanAmountRequestInput;
};


export type MutationMutCreateLoanProposalArgs = {
  loanProposalInput?: InputMaybe<LoanProposalInput>;
  vosAccessToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationMutCreateLoanRequestArgs = {
  loanRequestInput: LoanRequestInput;
};


export type MutationMutDeleteLoanAtchFileArgs = {
  loanAtchFileId: Scalars['String']['input'];
};


export type MutationMutDeleteLoanProposalArgs = {
  loanProposalId?: InputMaybe<Scalars['String']['input']>;
  vosAccessToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationMutDeleteLoanRequestArgs = {
  loanRequestId: Scalars['String']['input'];
};


export type MutationMutLoginWithKakaoAuthResponseArgs = {
  kakaoAuthResponseId: Scalars['String']['input'];
  kakaoUserId: Scalars['String']['input'];
};


export type MutationMutLoginWithNaverAuthResponseArgs = {
  naverAuthResponseId: Scalars['String']['input'];
  naverUserId: Scalars['String']['input'];
};


export type MutationMutRefreshPiperAccessTokenArgs = {
  piperAccessToken: Scalars['String']['input'];
};


export type MutationMutRejectScreeningArgs = {
  rejectScreeningInput: RejectScreeningInput;
};


export type MutationMutSaveFileKeyArgs = {
  fileKey: Scalars['String']['input'];
};


export type MutationMutSaveKakaoAuthResponseArgs = {
  kakaoAuthResponse: Scalars['String']['input'];
  kakaoUserId: Scalars['String']['input'];
};


export type MutationMutSaveNaverAuthResponseArgs = {
  naverAuthResponse: Scalars['String']['input'];
  naverUserId: Scalars['String']['input'];
};


export type MutationMutSaveNiceCertSuccessResultArgs = {
  sEncData: Scalars['String']['input'];
};


export type MutationMutSignInPiperCustomArgs = {
  signInPiperCustomInput: SignInPiperCustomInput;
};


export type MutationMutSignUpPiperSocialArgs = {
  signUpPiperSocialInput: SignUpPiperSocialInput;
};


export type MutationMutUpdateLoanProposalArgs = {
  loanProposalId?: InputMaybe<Scalars['String']['input']>;
  loanProposalInput?: InputMaybe<LoanProposalInput>;
  vosAccessToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationMutUpdatePiperUserArgs = {
  updatePiperUserInput: UpdatePiperUserInput;
};


export type MutationUpdateLoanConsultationByLoanManagerArgs = {
  loanConsultationId: Scalars['String']['input'];
  loanConsultationStateId?: InputMaybe<ELoanConsultationStateId>;
};


export type MutationUpdateLoanContractArgs = {
  billingEmail?: InputMaybe<Scalars['String']['input']>;
  contractDate?: InputMaybe<Scalars['DateTime']['input']>;
  executionDate?: InputMaybe<Scalars['DateTime']['input']>;
  executionExpectedDate?: InputMaybe<Scalars['DateTime']['input']>;
  expectedContractDate?: InputMaybe<Scalars['DateTime']['input']>;
  expectedLoanAmount?: InputMaybe<Scalars['Float']['input']>;
  loanAmount?: InputMaybe<Scalars['Float']['input']>;
  loanContractId: Scalars['String']['input'];
};


export type MutationUpdateLoanProposalSelectDeadlineArgs = {
  deadline: Scalars['DateTime']['input'];
  loanRequestId: Scalars['String']['input'];
};


export type MutationUpdateLoanRequestProposeDeadlineArgs = {
  deadline: Scalars['DateTime']['input'];
  loanRequestId: Scalars['String']['input'];
};

export type NaverAuthResponse = {
  __typename?: 'NaverAuthResponse';
  createdAt?: Maybe<Scalars['String']['output']>;
};

export type NiceCertRequestCodeResponse = {
  __typename?: 'NiceCertRequestCodeResponse';
  sEncData: Scalars['String']['output'];
  sRtnMSG: Scalars['String']['output'];
};

export type NiceCertResponse = {
  __typename?: 'NiceCertResponse';
  createdAt?: Maybe<Scalars['String']['output']>;
};

/** 기업 신용정보 */
export type NiceCompanyCreditRatingReturn = {
  __typename?: 'NiceCompanyCreditRatingReturn';
  /** 신용도판단정보(신용정보사 제공) */
  creditNegativeInfoCBList?: Maybe<Array<CreditNegativeInfoCb>>;
  /** 신용도판단정보(한국신용정보원 제공) */
  creditNegativeInfoList?: Maybe<Array<CreditNegativeInfo>>;
  /** 기업평가등급 */
  creditRatingList?: Maybe<Array<CreditRating>>;
  /** 기업신용공여 단기연체 */
  creditShorttermOverdueList?: Maybe<Array<CreditShorttermOverdue>>;
  /** 법정관리/워크아웃 */
  creditWorkoutList?: Maybe<Array<CreditWorkout>>;
};

/** 기업 주요경영지표 */
export type NiceCompanyKeyIndicatorsReturn = {
  __typename?: 'NiceCompanyKeyIndicatorsReturn';
  /** 자산총액 */
  aettamt?: Maybe<Scalars['Float']['output']>;
  /** 부채총계 */
  dbtTtlFvl?: Maybe<Scalars['Float']['output']>;
  /** 자본총계 */
  fdsTtlFvl?: Maybe<Scalars['Float']['output']>;
  /** 순이익 */
  nrf?: Maybe<Scalars['Float']['output']>;
  /** 매출액 */
  salesFvl?: Maybe<Scalars['Float']['output']>;
  /** 영업이익 */
  slsprftFvl?: Maybe<Scalars['Float']['output']>;
  /** 재무결산일자 */
  stacDate?: Maybe<Scalars['String']['output']>;
};

export type NiceCompanyProfileReturn = {
  __typename?: 'NiceCompanyProfileReturn';
  /** 법인등록번호 */
  crpno?: Maybe<Scalars['String']['output']>;
  /** 영문 산업코드명 */
  engIdscdnm?: Maybe<Scalars['String']['output']>;
  /** 영문 기업명 */
  engentrnm?: Maybe<Scalars['String']['output']>;
  /** 영문 대표자명 */
  engreprnm?: Maybe<Scalars['String']['output']>;
  /** 설립등기일자 */
  etbDate?: Maybe<Scalars['String']['output']>;
  /** 본점 사업자등록번호 */
  hofBizno?: Maybe<Scalars['String']['output']>;
  /** 산업코드 */
  idscd?: Maybe<Scalars['String']['output']>;
  /** 산업코드 대분류 */
  idscdcg?: Maybe<Scalars['String']['output']>;
  /** 산업코드명 */
  korIdscdnm?: Maybe<Scalars['String']['output']>;
  /** 기업명 */
  korentrnm?: Maybe<Scalars['String']['output']>;
  /** 대표자명 */
  korreprnm?: Maybe<Scalars['String']['output']>;
  /** 설립일자 */
  sbnDate?: Maybe<Scalars['String']['output']>;
  /** 사업장 정보 목록 */
  siteInfoList: Array<SiteInfo>;
  /** 업체코드 */
  upchecd?: Maybe<Scalars['String']['output']>;
};

export type PiperLoginResult = {
  __typename?: 'PiperLoginResult';
  email?: Maybe<Scalars['String']['output']>;
  error: Scalars['Boolean']['output'];
  message: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  piperAccessToken: Scalars['String']['output'];
  vosUserId?: Maybe<Scalars['String']['output']>;
};

export type PiperUser = {
  __typename?: 'PiperUser';
  checkItems?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  createdAt: Scalars['String']['output'];
  deactivatedAt?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  expectedLoanAmountRequests?: Maybe<Array<Maybe<ExpectedLoanAmountResponseV2>>>;
  hasPassword?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['String']['output'];
  kakaoAuthResponse?: Maybe<KakaoAuthResponse>;
  kakaoAuthResponseId?: Maybe<Scalars['String']['output']>;
  lastLoginAt?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  naverAuthResponse?: Maybe<NaverAuthResponse>;
  naverAuthResponseId?: Maybe<Scalars['String']['output']>;
  niceCertResponse?: Maybe<NiceCertResponse>;
  niceCertResponseId?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  vosUserId?: Maybe<Scalars['String']['output']>;
};

export type PolygonGeometry = {
  __typename?: 'PolygonGeometry';
  polygonCoordinates?: Maybe<Array<Maybe<Array<Maybe<Array<Maybe<Scalars['Float']['output']>>>>>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Product = {
  __typename?: 'Product';
  productId?: Maybe<Scalars['String']['output']>;
};

export type PublicAuctionInfo = {
  /** 공매 감정가 */
  appraisalValue: Scalars['Float']['input'];
  /** 매각허가결정전 체크박스 */
  isBeforeSaleApproval?: InputMaybe<Scalars['Boolean']['input']>;
  /** 공매 물건관리번호 */
  propertyManagementNumber: Scalars['String']['input'];
  /** 공매 낙찰일 */
  winningDate?: InputMaybe<Scalars['String']['input']>;
  /** 공매 낙찰가 */
  winningPrice: Scalars['Float']['input'];
  /** 공매 낙찰대금 지급기한 */
  winningPriceDueDate?: InputMaybe<Scalars['String']['input']>;
};

export type PublicAuctionInfoResponse = {
  __typename?: 'PublicAuctionInfoResponse';
  /** 공매 감정가 */
  appraisalValue: Scalars['Float']['output'];
  /** 매각허가결정전 체크박스 */
  isBeforeSaleApproval?: Maybe<Scalars['Boolean']['output']>;
  /** 공매 물건관리번호 */
  propertyManagementNumber?: Maybe<Scalars['String']['output']>;
  /** 공매 낙찰일 */
  winningDate?: Maybe<Scalars['String']['output']>;
  /** 공매 낙찰가 */
  winningPrice: Scalars['Float']['output'];
  /** 공매 낙찰대금 지급기한 */
  winningPriceDueDate?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getAssetSearchResult: Array<SearchResultAsset>;
  queryAssets: QueryAssetsResponse;
  queryAssetsAggregations: QueryAssetsAggregationsResponse;
  queryFileKey: File;
  queryFileKeyAdmin: File;
  queryGeometries: AssetGeometry;
  queryGeometriesPnu: AssetGeometry;
  /** 오늘의딜 카운트를 조회한다. */
  queryGetTodayDealCount: QueryGetTodayDealCountReturn;
  /** 오늘의딜 리스트를 조회한다. */
  queryGetTodayDealList: QueryGetTodayDealListReturn;
  queryLoanCount: QueryLoanCountReturn;
  queryLoanCountClient: QueryLoanCountReturn;
  queryLoanProducts: LoanProduct;
  queryLoanProposalById: LoanProposal;
  queryLoanRequest: LoanRequest;
  queryLoanRequests: QueryLoanRequestsReturn;
  queryMe: PiperUser;
  queryMyLoanProposals: Array<LoanProposal>;
  queryMyLoanRequestById: LoanRequest;
  queryMyLoanRequests: Array<LoanRequest>;
  queryNiceCertRequestCode: NiceCertRequestCodeResponse;
  queryNiceCompanyCreditRating: NiceCompanyCreditRatingReturn;
  queryNiceCompanyKeyIndicators: Array<NiceCompanyKeyIndicatorsReturn>;
  queryNiceCompanyProfile?: Maybe<NiceCompanyProfileReturn>;
  queryPiperUserExistsWithPhoneNumber: CheckPiperUser;
  querySsgAssets: QuerySsgAssetsResponse;
  queryUserBySocialUserId: PiperUser;
  queryUsersAdmin: Array<PiperUser>;
  queryWholeAggregation: QueryWholeAggregationResponse;
};


export type QueryGetAssetSearchResultArgs = {
  keyword?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQueryAssetsArgs = {
  pnu?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQueryAssetsAggregationsArgs = {
  hoPk?: InputMaybe<Scalars['String']['input']>;
  pnu?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQueryFileKeyArgs = {
  id: Scalars['String']['input'];
};


export type QueryQueryFileKeyAdminArgs = {
  id: Scalars['String']['input'];
};


export type QueryQueryGeometriesArgs = {
  lat?: InputMaybe<Scalars['String']['input']>;
  lng?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQueryGeometriesPnuArgs = {
  pnu?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQueryGetTodayDealListArgs = {
  filter?: InputMaybe<FilterArgs>;
  type: ETodayDealListType;
};


export type QueryQueryLoanProductsArgs = {
  vosAccessToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQueryLoanProposalByIdArgs = {
  loanProposalId: Scalars['String']['input'];
  vosAccessToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQueryLoanRequestArgs = {
  isInitialRequest?: InputMaybe<Scalars['Boolean']['input']>;
  serialNumber: Scalars['String']['input'];
};


export type QueryQueryLoanRequestsArgs = {
  filters: QueryLoanRequestsFiltersInput;
};


export type QueryQueryMyLoanRequestByIdArgs = {
  serialNumber: Scalars['String']['input'];
};


export type QueryQueryMyLoanRequestsArgs = {
  loanStateIdList?: InputMaybe<Array<ELoanStateId>>;
};


export type QueryQueryNiceCompanyCreditRatingArgs = {
  loanRequestId: Scalars['String']['input'];
};


export type QueryQueryNiceCompanyKeyIndicatorsArgs = {
  loanRequestId: Scalars['String']['input'];
};


export type QueryQueryNiceCompanyProfileArgs = {
  loanRequestId: Scalars['String']['input'];
};


export type QueryQueryPiperUserExistsWithPhoneNumberArgs = {
  phoneNumber: Scalars['String']['input'];
};


export type QueryQuerySsgAssetsArgs = {
  itemPerPage: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
  sido: Scalars['String']['input'];
  type: Scalars['String']['input'];
};


export type QueryQueryUserBySocialUserIdArgs = {
  socialType: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type QueryQueryUsersAdminArgs = {
  vosAccessToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQueryWholeAggregationArgs = {
  assetPnu: Scalars['String']['input'];
  dongBpk?: InputMaybe<Scalars['String']['input']>;
};

export type QueryAssetsAggregationsResponse = {
  __typename?: 'QueryAssetsAggregationsResponse';
  assetPnu?: Maybe<Scalars['String']['output']>;
  buildingEfficiencyRatio?: Maybe<Scalars['Float']['output']>;
  dongName?: Maybe<Scalars['String']['output']>;
  estimateUnitPrice?: Maybe<Scalars['Float']['output']>;
  floor?: Maybe<Scalars['Int']['output']>;
  hoName?: Maybe<Scalars['String']['output']>;
  unitArea?: Maybe<Scalars['Float']['output']>;
  useName?: Maybe<Scalars['String']['output']>;
};

export type QueryAssetsAssetAddress = {
  __typename?: 'QueryAssetsAssetAddress';
  dl?: Maybe<Scalars['String']['output']>;
  emd?: Maybe<Scalars['String']['output']>;
  ji?: Maybe<Scalars['String']['output']>;
  sgg?: Maybe<Scalars['String']['output']>;
  sido?: Maybe<Scalars['String']['output']>;
  simpleSgg?: Maybe<Scalars['String']['output']>;
  simpleSido?: Maybe<Scalars['String']['output']>;
};

export type QueryAssetsBuildingUseDetail = {
  __typename?: 'QueryAssetsBuildingUseDetail';
  buildingUseDetailName?: Maybe<Scalars['String']['output']>;
  totalBuildingUseDetailArea?: Maybe<Scalars['Float']['output']>;
};

export type QueryAssetsDongData = {
  __typename?: 'QueryAssetsDongData';
  dongBpk?: Maybe<Scalars['String']['output']>;
  dongName?: Maybe<Scalars['String']['output']>;
  hoList?: Maybe<Array<QueryAssetsHoData>>;
};

export type QueryAssetsHoData = {
  __typename?: 'QueryAssetsHoData';
  hoName?: Maybe<Scalars['String']['output']>;
  hoPk?: Maybe<Scalars['String']['output']>;
};

export type QueryAssetsLanduseData = {
  __typename?: 'QueryAssetsLanduseData';
  landUseArea?: Maybe<Scalars['Float']['output']>;
  landUseName?: Maybe<Scalars['String']['output']>;
};

export type QueryAssetsMainUse = {
  __typename?: 'QueryAssetsMainUse';
  maxBldArea?: Maybe<Scalars['Float']['output']>;
  maxBldMainUse?: Maybe<Scalars['String']['output']>;
};

export type QueryAssetsResponse = {
  __typename?: 'QueryAssetsResponse';
  address?: Maybe<QueryAssetsAssetAddress>;
  buildingPkList?: Maybe<Array<Scalars['String']['output']>>;
  buildingType?: Maybe<Scalars['String']['output']>;
  buildingUseDetailList?: Maybe<Array<QueryAssetsBuildingUseDetail>>;
  dongHoList?: Maybe<Array<QueryAssetsDongData>>;
  estimateBaseDate?: Maybe<Scalars['String']['output']>;
  estimatePrice?: Maybe<Scalars['Float']['output']>;
  jimok?: Maybe<Scalars['String']['output']>;
  landArea?: Maybe<Scalars['Float']['output']>;
  landUseList?: Maybe<Array<QueryAssetsLanduseData>>;
  lotCount?: Maybe<Scalars['Int']['output']>;
  mainUse?: Maybe<QueryAssetsMainUse>;
  totalGroundFloorArea?: Maybe<Scalars['Float']['output']>;
};

export type QueryGetTodayDealCountReturn = {
  __typename?: 'QueryGetTodayDealCountReturn';
  data: QueryGetTodayDealCountReturnData;
};

export type QueryGetTodayDealCountReturnData = {
  __typename?: 'QueryGetTodayDealCountReturnData';
  /** 경락 */
  auctionCount: Scalars['Int']['output'];
  /** 제안가능 */
  proposeAvailableCount: Scalars['Int']['output'];
  /** 제안함 */
  proposeCount: Scalars['Int']['output'];
  /** 경락 */
  todayAuctionCount: Scalars['Int']['output'];
  /** 신규 */
  todayNewCount: Scalars['Int']['output'];
  /** 운영 */
  todayOperatingCount: Scalars['Int']['output'];
  /** 구입 */
  todayPurchaseCount: Scalars['Int']['output'];
};

export type QueryGetTodayDealListLtvExistingLoan = {
  __typename?: 'QueryGetTodayDealListLtvExistingLoan';
  /** 채권최고액 */
  debtCeiling?: Maybe<Scalars['Float']['output']>;
  /** 금융기관명 */
  financialInstitutionName?: Maybe<Scalars['String']['output']>;
  /** 자금용도 */
  fundPurpose?: Maybe<Scalars['String']['output']>;
  /** 대출금 */
  loanAmount?: Maybe<Scalars['Float']['output']>;
  /** 대환필요 */
  refinancingRequired?: Maybe<Scalars['Boolean']['output']>;
};

export type QueryGetTodayDealListReturn = {
  __typename?: 'QueryGetTodayDealListReturn';
  data: Array<QueryGetTodayDealListReturnData>;
  meta: QueryGetTodayDealListReturnMeta;
};

export type QueryGetTodayDealListReturnDashboardAsset = {
  __typename?: 'QueryGetTodayDealListReturnDashboardAsset';
  /** 주소 */
  address: Scalars['String']['output'];
  /** 면적 */
  area?: Maybe<Scalars['Float']['output']>;
  /** 자산 PNU */
  assetPnu?: Maybe<Scalars['String']['output']>;
  /** 자산 타입 */
  assetType: Scalars['String']['output'];
  /** 예상감정가 */
  desktopAppraisalValue?: Maybe<Scalars['Float']['output']>;
  /** 동 */
  dong?: Maybe<Scalars['String']['output']>;
  /** 추정가 */
  estimatePrice?: Maybe<Scalars['Float']['output']>;
  /** 호 */
  ho?: Maybe<Scalars['String']['output']>;
  /** PNU */
  pnu?: Maybe<Scalars['String']['output']>;
  /** 용도 */
  useName?: Maybe<Scalars['String']['output']>;
};

export type QueryGetTodayDealListReturnData = {
  __typename?: 'QueryGetTodayDealListReturnData';
  /** 경매 정보 */
  auction?: Maybe<QueryGetTodayDealListReturnDataAuction>;
  /** 중심좌표 */
  centerPoint?: Maybe<CenterPoint>;
  /** 대시보드 자산 정보 */
  dashboardAssets?: Maybe<Array<QueryGetTodayDealListReturnDashboardAsset>>;
  /** 채무자직업(개인사업자|직장인 etc) */
  debtorOccupation?: Maybe<Scalars['String']['output']>;
  /** 추정가 */
  estimatePrice?: Maybe<Scalars['Float']['output']>;
  /** 기존대출 */
  leaseContracts?: Maybe<Array<QueryGetTodayDealListReturnDataLtvExistingBond>>;
  /** 대출신청액 */
  loanAmount?: Maybe<Scalars['Float']['output']>;
  /** 대출유형(구입자금|운영자금|경락잔금|건축자금) */
  loanPurpose?: Maybe<Scalars['String']['output']>;
  /** 대출신청 아이디 */
  loanRequestId?: Maybe<Scalars['String']['output']>;
  /** 대출신청 제출일 */
  loanRequestSubmissionCreatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 대출신청 수정일 */
  loanRequestSubmissionUpdatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기존대출 */
  ltvExistingLoans?: Maybe<Array<QueryGetTodayDealListLtvExistingLoan>>;
  /** PNU */
  pnu?: Maybe<Scalars['String']['output']>;
  /** 부동산 구입 가격 */
  purchasePrice?: Maybe<Scalars['Float']['output']>;
  /** 대출신청 간소화 일련번호 */
  serialNumber?: Maybe<Scalars['String']['output']>;
  /** 용도(다세대, 공동주택, etc.) */
  useName?: Maybe<Scalars['String']['output']>;
};

export type QueryGetTodayDealListReturnDataAuction = {
  __typename?: 'QueryGetTodayDealListReturnDataAuction';
  /** 경매 감정가 */
  appraisalValue?: Maybe<Scalars['Float']['output']>;
  /** 경매 낙찰가 */
  winningPrice?: Maybe<Scalars['Float']['output']>;
};

export type QueryGetTodayDealListReturnDataLtvExistingBond = {
  __typename?: 'QueryGetTodayDealListReturnDataLtvExistingBond';
  /** 상호명 */
  businessName?: Maybe<Scalars['String']['output']>;
  /** 보증금 */
  deposit?: Maybe<Scalars['Float']['output']>;
  /** 보증금 상환 목적 여부 */
  isDepositRepaymentPurpose?: Maybe<Scalars['Boolean']['output']>;
  /** 월 임대료 */
  monthlyRent?: Maybe<Scalars['Float']['output']>;
  /** 임차인 명 */
  tenantName?: Maybe<Scalars['String']['output']>;
};

export type QueryGetTodayDealListReturnMeta = {
  __typename?: 'QueryGetTodayDealListReturnMeta';
  /** 현재 페이지 */
  currentPage: Scalars['Int']['output'];
  /** 현재 페이지의 개수 */
  itemCount: Scalars['Int']['output'];
  /** 페이지당 행 개수 */
  itemPerPage: Scalars['Int']['output'];
  /** 전체 개수 */
  totalCount: Scalars['Int']['output'];
  /** 전체 페이지 수 */
  totalPages?: Maybe<Scalars['Int']['output']>;
  /** 타입(제안가능 | 제안함 | 경락) */
  type: Scalars['String']['output'];
};

export type QueryLoanCountReturn = {
  __typename?: 'QueryLoanCountReturn';
  /** 대출상담 상태별 개수 */
  loanConsultationCount: LoanConsultationCount;
  /** 대출계약 상태별 개수 */
  loanContractCount: LoanContractCount;
  /** 대출제안서 상태별 개수 */
  loanProposalCount: LoanProposalCount;
  /** 대출신청서 상태별 개수 */
  loanRequestCount: LoanRequestCount;
  /** 대출 상태별 전체 개수 */
  totalCount: Scalars['Int']['output'];
};

export type QueryLoanRequestsFiltersInput = {
  /** 주소 필터 리스트 */
  addressList?: InputMaybe<Array<Scalars['String']['input']>>;
  /** 대시보드를 조회할 현재 페이지 */
  currentPage: Scalars['Int']['input'];
  /** 차주 유형 필터 */
  debtorOccupationList?: InputMaybe<Array<EDebtorOccupation>>;
  /** 조회시작 시점 */
  from?: InputMaybe<Scalars['DateTime']['input']>;
  /** 페이지당 대시보드 행 개수 */
  itemPerPage: Scalars['Int']['input'];
  /** 대출상담 상태 필터 */
  loanConsultationStateIdList?: InputMaybe<Array<ELoanConsultationStateId>>;
  /** 대출계약 상태 필터 */
  loanContractStateIdList?: InputMaybe<Array<ELoanContractStateId>>;
  /** 대출제안 상태 필터 */
  loanProposalStateIdList?: InputMaybe<Array<ELoanProposalStateId>>;
  /** 대출유형(목적) 필터 */
  loanPurposeList?: InputMaybe<Array<ELoanPurpose>>;
  /** 대출신청 상태 필터 */
  loanRequestStateIdList?: InputMaybe<Array<ELoanRequestStateId>>;
  /** 최대 대출 신청액 */
  maxLoanApplicationAmount?: InputMaybe<Scalars['Float']['input']>;
  /** 최소 대출 신청액 */
  minLoanApplicationAmount?: InputMaybe<Scalars['Float']['input']>;
  /** 신청자 이름 */
  requesterName?: InputMaybe<Scalars['String']['input']>;
  /** 신청자 휴대폰 번호 */
  requesterPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** 대출신청 간소화 일련번호 */
  serialNumber?: InputMaybe<Scalars['String']['input']>;
  /** 대출 프로세스 상태 필터 */
  stateFilterList?: InputMaybe<Array<StateFilter>>;
  /** 조회종료 시점 */
  until?: InputMaybe<Scalars['DateTime']['input']>;
};

export type QueryLoanRequestsMeta = {
  __typename?: 'QueryLoanRequestsMeta';
  currentPage: Scalars['Int']['output'];
  itemCount: Scalars['Int']['output'];
  itemPerPage: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type QueryLoanRequestsReturn = {
  __typename?: 'QueryLoanRequestsReturn';
  data: Array<LoanRequest>;
  meta: QueryLoanRequestsMeta;
};

export type QuerySsgAssetsResponse = {
  __typename?: 'QuerySsgAssetsResponse';
  assets: Array<SsgAsset>;
  page: SsgPage;
  sido: SsgSido;
};

export type QueryWholeAggregationData = {
  __typename?: 'QueryWholeAggregationData';
  area?: Maybe<Scalars['Float']['output']>;
  assetPnu?: Maybe<Scalars['String']['output']>;
  assetType?: Maybe<Scalars['String']['output']>;
  dongName?: Maybe<Scalars['String']['output']>;
  estimatePrice?: Maybe<Scalars['Float']['output']>;
  hoName?: Maybe<Scalars['String']['output']>;
  useName?: Maybe<Scalars['String']['output']>;
};

export type QueryWholeAggregationResponse = {
  __typename?: 'QueryWholeAggregationResponse';
  data?: Maybe<Array<QueryWholeAggregationData>>;
};

export type RejectScreeningInput = {
  /** 스크리닝 담당자가 입력하는 코멘트 */
  comment?: InputMaybe<Scalars['String']['input']>;
  /** 대출신청 ID */
  loanRequestId: Scalars['String']['input'];
  /** 스크리닝 담당자 토큰 */
  vosAccessToken: Scalars['String']['input'];
};

export type Requester = {
  __typename?: 'Requester';
  checkItems?: Maybe<Array<Scalars['String']['output']>>;
  createdAt: Scalars['String']['output'];
  deactivatedAt?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  kakaoAuthResponse?: Maybe<KakaoAuthResponse>;
  kakaoAuthResponseId?: Maybe<Scalars['String']['output']>;
  lastLoginAt?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  naverAuthResponse?: Maybe<NaverAuthResponse>;
  naverAuthResponseId?: Maybe<Scalars['String']['output']>;
  niceCertResponse?: Maybe<NiceCertResponse>;
  niceCertResponseId?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  vosUserId?: Maybe<Scalars['String']['output']>;
};

export type SaveNiceCertSuccessResultResponse = {
  __typename?: 'SaveNiceCertSuccessResultResponse';
  error?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  niceCertResponseId: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
};

export type Screening = {
  __typename?: 'Screening';
  comment?: Maybe<Scalars['String']['output']>;
  passedAt?: Maybe<Scalars['String']['output']>;
  rejectedAt?: Maybe<Scalars['String']['output']>;
  reviewerName?: Maybe<Scalars['String']['output']>;
  reviewerPhoneNumber?: Maybe<Scalars['String']['output']>;
};

export type SearchResultAsset = {
  __typename?: 'SearchResultAsset';
  addressName?: Maybe<Scalars['String']['output']>;
  addressRoadName?: Maybe<Scalars['String']['output']>;
  assetName?: Maybe<Scalars['String']['output']>;
  assetPnu?: Maybe<Scalars['String']['output']>;
  estimatePrice?: Maybe<Scalars['String']['output']>;
};

/** 단기연체정보 기관별 정보 */
export type ShorttermOverdueOrganization = {
  __typename?: 'ShorttermOverdueOrganization';
  /** 단기연체정보 계정과목별 정보 */
  accountSubjectsList?: Maybe<Array<AccountSubject>>;
  /** 이자연체여부(계정과목코드: 6909) */
  interestOduYn?: Maybe<Scalars['String']['output']>;
  /** 한국신용정보원 기관코드 */
  orgcd?: Maybe<Scalars['String']['output']>;
  /** 한국신용정보원 기관명 */
  orgname?: Maybe<Scalars['String']['output']>;
  /** 한국신용정보원 기관영문명 */
  orgnameEng?: Maybe<Scalars['String']['output']>;
  /** 연체금액여부(계정과목코드: 6907) */
  principalOduYn?: Maybe<Scalars['String']['output']>;
  /** 보고서코드 */
  rptcd?: Maybe<Scalars['String']['output']>;
};

export type SignInPiperCustomInput = {
  v1: SignInPiperCustomInputV1;
};

export type SignInPiperCustomInputV1 = {
  email?: InputMaybe<Scalars['String']['input']>;
  isSignUp?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  niceCertResponseId?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  signUpCheckList?: InputMaybe<Array<InputMaybe<SignUpCheckList>>>;
  /** 회원가입 채널 (기본값: piper) */
  signupChannel?: InputMaybe<ESignupChannel>;
  /** SSO 로그인 시 클라이언트 유저 아이디 */
  ssoId?: InputMaybe<Scalars['String']['input']>;
};

/** 회원동의 */
export enum SignUpCheckList {
  LocationBasedTermsOfUse = 'LOCATION_BASED_TERMS_OF_USE',
  MarketingOptIn = 'MARKETING_OPT_IN',
  PrivateInfo = 'PRIVATE_INFO',
  TermsOfUse = 'TERMS_OF_USE'
}

export type SignUpPiperSocialInput = {
  v1: SignUpPiperSocialInputV1;
};

export type SignUpPiperSocialInputV1 = {
  email?: InputMaybe<Scalars['String']['input']>;
  kakaoUserId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  naverUserId?: InputMaybe<Scalars['String']['input']>;
  niceCertResponseId?: InputMaybe<Scalars['String']['input']>;
  phoneNumber: Scalars['String']['input'];
  signUpCheckList?: InputMaybe<Array<InputMaybe<SignUpCheckList>>>;
};

export type SiteInfo = {
  __typename?: 'SiteInfo';
  /** 업종명 */
  btpnm?: Maybe<Scalars['String']['output']>;
  /** 업태명 */
  bzdnm?: Maybe<Scalars['String']['output']>;
  /** 도로명 영문주소 */
  engaddr?: Maybe<Scalars['String']['output']>;
  /** 도로명 한글주소 */
  koraddr?: Maybe<Scalars['String']['output']>;
  /** 지번 영문주소 */
  noltEngaddr?: Maybe<Scalars['String']['output']>;
  /** 지번 한글주소 */
  noltKoraddr?: Maybe<Scalars['String']['output']>;
  /** 휴폐업구분코드 */
  ntsSbqcdivcd?: Maybe<Scalars['String']['output']>;
  /** 휴폐업구분명 */
  ntsSbqcdivnm?: Maybe<Scalars['String']['output']>;
  /** 개업일자 */
  obzDate?: Maybe<Scalars['String']['output']>;
  /** 폐업일자 */
  sbqcDate?: Maybe<Scalars['String']['output']>;
  /** 구 우편번호 */
  zcd?: Maybe<Scalars['String']['output']>;
};

export type SsgAsset = {
  __typename?: 'SsgAsset';
  assetPnu: Scalars['String']['output'];
  hoPk?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type SsgPage = {
  __typename?: 'SsgPage';
  currentItem: Scalars['Int']['output'];
  currentPage: Scalars['Int']['output'];
  itemPerPage: Scalars['Int']['output'];
  maxPage: Scalars['Int']['output'];
  totalItem: Scalars['Int']['output'];
};

export type SsgSido = {
  __typename?: 'SsgSido';
  sidoCode: Scalars['String']['output'];
  sidoName: Scalars['String']['output'];
};

export type StateFilter = {
  /** 대출 프로세스 단계 */
  filter?: InputMaybe<Scalars['String']['input']>;
  /** 종결건 포함 여부 */
  includeClosed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateLoanConsultationResult = {
  __typename?: 'UpdateLoanConsultationResult';
  error: Scalars['Boolean']['output'];
  /** 대출상담 아이디 */
  loanConsultationId: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type UpdateLoanContractData = {
  __typename?: 'UpdateLoanContractData';
  /** 대출계약 아이디 */
  loanContractId: Scalars['String']['output'];
  /** 메시지 */
  message: Scalars['String']['output'];
};

export type UpdateLoanContractResult = {
  __typename?: 'UpdateLoanContractResult';
  data: UpdateLoanContractData;
};

export type UpdateLoanProposalSelectDeadlineResult = {
  __typename?: 'UpdateLoanProposalSelectDeadlineResult';
  error: Scalars['Boolean']['output'];
  loanRequestId: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type UpdateLoanRequestProposeDeadlineResult = {
  __typename?: 'UpdateLoanRequestProposeDeadlineResult';
  error: Scalars['Boolean']['output'];
  loanRequestId: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type UpdatePiperUserInput = {
  v1: UpdatePiperUserInputV1;
};

export type UpdatePiperUserInputV1 = {
  isDeleting?: InputMaybe<Scalars['Boolean']['input']>;
  newEmail?: InputMaybe<Scalars['String']['input']>;
  newNickname?: InputMaybe<Scalars['String']['input']>;
  newPassword?: InputMaybe<Scalars['String']['input']>;
  originPassword?: InputMaybe<Scalars['String']['input']>;
  signUpCheckList?: InputMaybe<Array<InputMaybe<SignUpCheckList>>>;
};

export type UpdateResult = {
  __typename?: 'UpdateResult';
  error: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type QueryLoanRequestsQueryVariables = Exact<{
  filters: QueryLoanRequestsFiltersInput;
}>;


export type QueryLoanRequestsQuery = { __typename?: 'Query', queryLoanRequests: { __typename?: 'QueryLoanRequestsReturn', data: Array<{ __typename?: 'LoanRequest', id: string, serialNumber?: string | null, loanAmount?: number | null, loanPurpose?: string | null, createdAt: string, updatedAt: string, requester?: { __typename?: 'Requester', name?: string | null, phoneNumber?: string | null } | null, loanState?: { __typename?: 'LoanState', stateId: number, category: string, event: string, description: string } | null }>, meta: { __typename?: 'QueryLoanRequestsMeta', totalCount: number, totalPages: number, itemPerPage: number, currentPage: number, itemCount: number } } };


export const QueryLoanRequestsDocument = gql`
    query QueryLoanRequests($filters: QueryLoanRequestsFiltersInput!) {
  queryLoanRequests(filters: $filters) {
    data {
      id
      serialNumber
      requester {
        name
        phoneNumber
      }
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
    `;

/**
 * __useQueryLoanRequestsQuery__
 *
 * To run a query within a React component, call `useQueryLoanRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryLoanRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryLoanRequestsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useQueryLoanRequestsQuery(baseOptions: Apollo.QueryHookOptions<QueryLoanRequestsQuery, QueryLoanRequestsQueryVariables> & ({ variables: QueryLoanRequestsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryLoanRequestsQuery, QueryLoanRequestsQueryVariables>(QueryLoanRequestsDocument, options);
      }
export function useQueryLoanRequestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryLoanRequestsQuery, QueryLoanRequestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryLoanRequestsQuery, QueryLoanRequestsQueryVariables>(QueryLoanRequestsDocument, options);
        }
export function useQueryLoanRequestsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<QueryLoanRequestsQuery, QueryLoanRequestsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<QueryLoanRequestsQuery, QueryLoanRequestsQueryVariables>(QueryLoanRequestsDocument, options);
        }
export type QueryLoanRequestsQueryHookResult = ReturnType<typeof useQueryLoanRequestsQuery>;
export type QueryLoanRequestsLazyQueryHookResult = ReturnType<typeof useQueryLoanRequestsLazyQuery>;
export type QueryLoanRequestsSuspenseQueryHookResult = ReturnType<typeof useQueryLoanRequestsSuspenseQuery>;
export type QueryLoanRequestsQueryResult = Apollo.QueryResult<QueryLoanRequestsQuery, QueryLoanRequestsQueryVariables>;