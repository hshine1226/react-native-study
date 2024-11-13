export function formatAmount(amount: number): string {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function formatDate(dateString: string): string {
    const date = new Date(dateString)
    return date.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}
