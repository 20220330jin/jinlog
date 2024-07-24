import {NextResponse} from "next/server";
import {createServerSideClient} from "@/lib/supabase";

export async function GET(request: Request) {
    /** 로그인 실패시 리다이렉트 주소 **/
    const overrideOrigin = process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO_HOME

    const {searchParams, origin} = new URL(request.url)
    console.log(searchParams, origin)

    console.log('-----')

    const code = searchParams.get('code')
    const next = searchParams.get('next')

    console.log(code, next)

    if(code){
        const supabase = await createServerSideClient()
        const {error} = await supabase.auth.exchangeCodeForSession(code);
        if(error) return NextResponse.redirect(`${overrideOrigin}`)
        return NextResponse.redirect(`${overrideOrigin}${next}`)
    }

    return NextResponse.redirect(`${overrideOrigin}`)

}