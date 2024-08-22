import {NextRequest, NextResponse} from "next/server";
import {PostService} from "@/service/PostService";

/**
 * 게시글 상세 조회 API
 * @param req
 * @constructor
 */
export async function GET(req: NextRequest, {params}: { params: { postId: number } }) {
    const postId = params.postId;
    const post = await PostService.getPost(postId);
    return NextResponse.json({post});
}