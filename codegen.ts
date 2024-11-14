import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: 'http://localhost:8000/graphql', // GraphQL 서버 엔드포인트
    documents: ['services/**/*.ts'], // GraphQL 쿼리가 있는 파일들
    generates: {
        './generated/graphql.ts': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo'
            ],
            config: {
                withHooks: true
            }
        }
    }
}

export default config
