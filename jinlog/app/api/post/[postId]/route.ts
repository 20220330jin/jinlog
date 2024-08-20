import {NextRequest} from "next/server";

/**
 * 게시글 상세 조회 API
 * @param req
 * @constructor
 */
export async function GET(req: NextRequest, {params}: { params: { postId: number } }) {
    const postId = params.postId;
    console.log('postId', postId);
}