/**
 * 블로그 API
 * - 전체 블로그 글 조회 등
 */
import {NextRequest, NextResponse} from "next/server";
import {PostService} from "@/service/PostService";

export async function GET(req: NextRequest){
    // 블로그 카테고리와 관계없이 모든 포스트를 가져온다
    // TODO (확인필요) (20240808/x) 이 곳에서 async/await를 사용하지 않아도 되는지 확인 필요

    // parameter 추출
    const {searchParams} = new URL(req.url);
    const category = searchParams.get('category') || '';
    const posts = await PostService.getAllPosts(category);

    return NextResponse.json({posts});
}

export async function POST(){

}