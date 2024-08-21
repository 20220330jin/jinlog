import {NextRequest, NextResponse} from "next/server";
import {PostService} from "@/service/PostService";

/**
 * 블로그 작성 공통 APIs
 * @param req
 * @constructor
 */

export async function POST(req: NextRequest){
    const body = await req.json();

    const result = await PostService.createPost(body);

    return NextResponse.json({result});
}