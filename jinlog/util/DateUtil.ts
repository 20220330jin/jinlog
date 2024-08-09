/**
 * 날짜 타입 변환
 * - YYYY-MM-DD
 * - 2024-08-06T20:17:16.000Z => 2024-08-06
 */
export const formatDate = (date: string) => {
    let dateFormat = new Date(date);

    return dateFormat.toISOString().split('T')[0];
}

/**
 * 날짜 타입 변환
 * - YYYY-MM-DD HH:mm:ss
 * - 2024-08-06T20:17:16.000Z => 2024-08-06 20:17:16
 */
export const formatDateTime = (date: string) => {
    let dateFormat = new Date(date);

    return dateFormat.toISOString().replace('T', ' ').split('.')[0];
}
