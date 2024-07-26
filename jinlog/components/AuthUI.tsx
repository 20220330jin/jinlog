'use client'
import {Auth} from "@supabase/auth-ui-react";
import {createSupabaseBrowserClient} from "@/lib/client/supabase";
import {ThemeSupa} from "@supabase/auth-ui-shared";
import useHydrate from "@/hooks/useHydrate";
import {useCallback, useEffect, useState} from "react";
import {User} from "@supabase/auth-js";

const AuthUI = () => {
    const supabase = createSupabaseBrowserClient()
    const isMount = useHydrate();
    /** 유저정보 state **/
    const [user, setUser] = useState<User>();

    /**
     * 유저정보 가져오기
     * - 구글로그인 후 성공시 유저정보가져오기
     */
    const getUserInfo = useCallback(
        async () => {
            const result = await supabase.auth.getUser();
            console.log(result)
            if (result?.data?.user) setUser(result?.data?.user);
        }, [supabase])

    /**
     * 로그아웃
     */
    const handleLogout = async () => {
        await supabase.auth.signOut();
        window.location.reload();
    }

    useEffect(() => {
        getUserInfo();
    }, [getUserInfo]);

    if (!isMount) return null;

    return (
        <section className='w-full p-10'>
            <div>{user ? `로그인 됨 ${user?.email}` : '로그아웃됨'}</div>
            <>
                {user && <button onClick={handleLogout} className='border-2 border-black'>로그아웃</button>}
            </>
            <div className='mx-auto max-w-[500px]'>
                <Auth
                    redirectTo={process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO}
                    supabaseClient={supabase} appearance={{
                    theme: ThemeSupa
                }}
                    onlyThirdPartyProviders
                    providers={['google', 'github']}
                />
            </div>
        </section>
    )
}

export default AuthUI;