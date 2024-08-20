import {PostService} from "@/service/PostService";
import {NextRequest, NextResponse} from "next/server";

/**
 * STUDY 블로그 APIs
 * @constructor
 */
export async function GET(req: NextRequest) {
    /**
     * 게시글 조회 API
     */
    // parameter 추출
    const {searchParams} = new URL(req.url);
    const category = searchParams.get('category') || '';
    // const result = await
    const posts = await PostService.getAllPosts(category);

    return NextResponse.json({posts});

}
