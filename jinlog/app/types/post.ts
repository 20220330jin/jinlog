export interface PostRequestParam {
    title: string;
    content: string;
    userId: string | undefined;
    type: string;
}

/**
 * 포스트 글 조회 응답 타입
 */
export interface PostResponse {
    id: number;
    title: string;
    content: string;
    userId: string;
    type: string;
    createdAt: string;
    updatedAt: string;
}