import {PostService} from "@/service/PostService";
import {NextResponse} from "next/server";

/**
 * STUDY 블로그 APIs
 * @constructor
 */
export async function GET() {
    /**
     * 게시글 조회 API
     */
    // const result = await
    console.log('Study API');
    const posts = await PostService.getAllPosts();
    console.log('posts', posts);

    return NextResponse.json({posts});

}