/**
 * 날짜 타입 변환
 * - YYYY-MM-DD
 * - 2024-08-06T20:17:16.000Z => 2024-08-06
 */
export const formatDate = (date: string) => {
    let dateFormat = new Date(date);
    const pad = (num: number) => (num < 10 ? '0' + num : num);

    const year = dateFormat.getFullYear();
    const month = pad(dateFormat.getMonth() + 1);
    const day = pad(dateFormat.getDate());
    const hours = pad(dateFormat.getHours());
    const minutes = pad(dateFormat.getMinutes());
    const seconds = pad(dateFormat.getSeconds());

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

/**
 * 날짜 타입 변환
 * - YYYY-MM-DD HH:mm:ss
 * - 2024-08-06T20:17:16.000Z => 2024-08-06 20:17:16
 */
export const formatDateTime = (date: string) => {
    let dateFormat = new Date(date);
    const pad = (num: number) => (num < 10 ? '0' + num : num);

    const year = dateFormat.getFullYear();
    const month = pad(dateFormat.getMonth() + 1);
    const day = pad(dateFormat.getDate());
    const hours = pad(dateFormat.getHours());
    const minutes = pad(dateFormat.getMinutes());
    const seconds = pad(dateFormat.getSeconds());

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

}

/**
 * TODO (구현필요) (20240818/x) -hjkim
 * - 1시간 전, 1일 전 등
 * - 주어진 시간이 1시간 이내일 경우 => 최소 0분 전 ~ 최대 59분 전
 * - 주어진 시간이 24시간 이내일 경우 => 최소 1시간 전 ~ 최대 23시간 전
 * - 주어진 시간이 24시간 초과 1달 이내일 경우 => 최소 1일 전 ~ 최대 30일 전
 * - 주어진 시간이 1달 초과 1년 이내일 경우 => 최소 1달 전 ~ 최대 11달 전
 * - 주어진 시간이 1년 초과일 경우 => n년 전
 */
export const formatDateTimeAgo = (date: string) => {
    let koreanTime = convertKoreanTime(date);
    let today = new Date();
    // 오늘(24시간이내) 판단
    const inDay = (koreanTime.getFullYear() - today.getFullYear() === 0) && (koreanTime.getDate() - today.getDate() === 0);
    // 1달 이내 판단
    const inMonth = (koreanTime.getFullYear() - today.getFullYear() === 0) && (today.getMonth() - koreanTime.getMonth() === 0);

    // 주어진 시간이 1일이내이며, 1시간 이내일 경우 => 최소 0분 전 ~ 최대 59분 전으로 표시
    if (inDay && today.getHours() - koreanTime.getHours() === 0 && today.getMinutes() - koreanTime.getMinutes() > 0) {
        return `${today.getMinutes() - koreanTime.getMinutes()}분 전`;
    }
    // 주어진 시간이 1시간 초과이며, 24시간 이내일 경우 => 최소 1시간 전 ~ 최대 23시간 전으로 표시
    if (inDay && today.getHours() - koreanTime.getHours() > 0 && today.getHours() - koreanTime.getHours() < 24) {
        return `${today.getHours() - koreanTime.getHours()}시간 전`;
    }
    // 주어진 시간이 24시간 초과 1달 이내일 경우 => 최소 1일 전 ~ 최대 30일 전으로 표시
    if (inMonth && today.getDate() - koreanTime.getDate() < 30) {
        return `${today.getDate() - koreanTime.getDate()}일 전`;
    } else {
        return `새로운 타입 필요`;
    }
}


/**
 * 한국시간 변환기
 */
const convertKoreanTime = (date: string) => {
    const koreanDate = date.slice(0, -1); // Remove the 'Z'
    return new Date(koreanDate);
}