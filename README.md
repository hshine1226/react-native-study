

# 대출신청서 조회 앱 PRD

## 1. 프로젝트 개요
### 목적
- 대출신청서 정보를 조회하고 관리하는 모바일 앱 개발
- 기존 백엔드 API를 활용한 프론트엔드 개발

### 개발 환경
```plaintext
- React Native + Expo
- TypeScript
- React Query (상태관리)
- Axios (API 통신)
- TWRNC (Tailwind React Native Classnames)
```

## 2. 디렉토리 구조
```plaintext
.
├── app/
│   ├── screens/                # 각 화면별 컴포넌트
│   │   ├── LoanListScreen.tsx
│   │   └── LoanDetailScreen.tsx
│   └── navigation/             # 라우팅 및 네비게이션 설정
│       └── AppNavigator.tsx
├── components/
│   ├── loans/                  # 대출 관련 컴포넌트
│   │   ├── LoanCard/
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   └── LoanFilter.tsx
│   └── ui/                     # 공통 UI 컴포넌트
│       ├── Button.tsx
│       └── Input.tsx
├── context/                    # 컨텍스트 관리
│   └── AuthContext.tsx
├── hooks/                      # 커스텀 훅
│   ├── useLoanList.ts
│   └── useLoanDetail.ts
├── services/                   # API와 타입 정의
│   ├── api/
│   │   └── loans.ts
│   └── types/
│       └── loans.ts
├── utils/                      # 유틸리티 함수 및 설정
│   ├── tw.ts
│   ├── format.ts
│   └── constants.ts
└── tailwind.config.js          # TWRNC 설정
```

## 3. 주요 파일별 구현 내용

### 스크린 컴포넌트
```typescript:app/screens/LoanListScreen.tsx
import { useLoanList } from '@/hooks/useLoanList';
import { LoanCard } from '@/components/loans/LoanCard';
import { LoanFilter } from '@/components/loans/LoanFilter';

export function LoanListScreen() {
  const { data, isLoading, fetchNextPage } = useLoanList();

  return (
    <View style={tw`flex-1 bg-white`}>
      <LoanFilter />
      <FlatList
        data={data?.pages.flat()}
        renderItem={({ item }) => <LoanCard loan={item} />}
        onEndReached={fetchNextPage}
      />
    </View>
  );
}
```

### 컴포넌트
```typescript:components/loans/LoanCard/index.tsx
import tw from '@/utils/tw';
import { styles } from './styles';
import { Loan } from '@/services/types/loans';

export function LoanCard({ loan }: { loan: Loan }) {
  return (
    <Pressable style={[tw`p-4 bg-white rounded-xl`, styles.container]}>
      <Text style={tw`text-lg font-bold`}>{loan.applicantName}</Text>
      {/* ... */}
    </Pressable>
  );
}
```

### API 서비스
```typescript:services/api/loans.ts
import axios from 'axios';
import { Loan, LoanDetail } from '../types/loans';

const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

export const loanAPI = {
  getLoans: async (params: LoanListParams) => {
    const response = await axios.get<Loan[]>(`${BASE_URL}/loans`, { params });
    return response.data;
  },
  
  getLoanDetail: async (id: string) => {
    const response = await axios.get<LoanDetail>(`${BASE_URL}/loans/${id}`);
    return response.data;
  }
};
```

### 타입 정의
```typescript:services/types/loans.ts
export interface Loan {
  id: string;
  applicantName: string;
  applicationDate: string;
  amount: number;
  status: LoanStatus;
}

export interface LoanListParams {
  page?: number;
  limit?: number;
  status?: LoanStatus;
  search?: string;
}

export type LoanStatus = 'PENDING' | 'APPROVED' | 'REJECTED';
```

### 커스텀 훅
```typescript:hooks/useLoanList.ts
import { useInfiniteQuery } from '@tanstack/react-query';
import { loanAPI } from '@/services/api/loans';

export function useLoanList(params: LoanListParams = {}) {
  return useInfiniteQuery({
    queryKey: ['loans', params],
    queryFn: ({ pageParam = 1 }) => 
      loanAPI.getLoans({ ...params, page: pageParam }),
    getNextPageParam: (lastPage, allPages) => 
      lastPage.length ? allPages.length + 1 : undefined,
  });
}
```

### 스타일링
```typescript:components/loans/LoanCard/styles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  }
});
```

## 4. 주요 기능 구현

### 대출신청서 목록
- 무한 스크롤 목록 뷰
- 상태별 필터링
- 검색 기능
- Pull-to-refresh

### 대출신청서 상세
- 신청자 정보 표시
- 대출 상세 정보
- 첨부서류 목록

## 5. 상태 관리
- React Query를 사용한 서버 상태 관리
- Context API를 활용한 인증 상태 관리

## 6. 성능 최적화
- 컴포넌트 메모이제이션
- 이미지 최적화
- 무한 스크롤 구현
- API 응답 캐싱

## 7. 개발 일정
1. 초기 설정 (1일)
   - 프로젝트 구조 설정
   - 기본 패키지 설치
   - 타입 정의

2. 컴포넌트 개발 (3일)
   - 공통 UI 컴포넌트
   - 대출 관련 컴포넌트
   - 스크린 컴포넌트

3. API 연동 (2일)
   - API 서비스 구현
   - React Query 설정
   - 에러 처리

4. 기능 구현 (2일)
   - 필터링/검색
   - 무한 스크롤
   - 상세 페이지

5. 테스트/최적화 (2일)
   - 단위 테스트
   - 성능 최적화
   - 버그 수정

총 예상 개발기간: 2주

## 8. 테스트 전략
- Jest + React Native Testing Library
- 컴포넌트 단위 테스트
- API 통신 테스트

## 9. 향후 개선사항
- 오프라인 지원
- 푸시 알림
- 생체인증
- 다크모드