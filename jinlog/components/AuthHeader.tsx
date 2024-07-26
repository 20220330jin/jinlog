'use client'

import {User} from "@supabase/auth-js";
import {createSupabaseBrowserClient} from "@/lib/client/supabase";
import {useRouter} from "next/navigation";
import {FcGoogle, FcTodoList} from "react-icons/fc";
import {AiOutlineLogout} from "react-icons/ai";

interface AuthHeaderProps {
    user?: User | null;
}

const AuthHeader = ({user}: AuthHeaderProps) => {

    const isLoggedIn = !!user?.email;
    const supabase = createSupabaseBrowserClient();
    const router = useRouter();

    /**
     * 홈으로 이동
     */
    const goToHome = () => {
        router.push('/');
    }

    /**
     * 구글 로그인
     */
    const handleGoogleLogin = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO
            }
        });
    }

    /**
     * 로그아웃
     */
    const handleLogout = async () => {
        await supabase.auth.signOut();
        window.location.reload()
    }

    return (
        <header className='h-[50px] bg-white'>
            <section className='px-6 h-full'>
                <div className='h-full flex flex-row justify-between items-center'>
                    <div onClick={goToHome} className='flex flex-row items-center cursor-pointer gap-2'>
                        TODO <FcTodoList size={30}/>
                    </div>
                    {isLoggedIn ? (
                        <div onClick={handleLogout} className='flex flex-row items-center cursor-pointer gap-2'>
                            Logout
                            <AiOutlineLogout size={30}/>
                        </div>
                    ) : (
                        <div onClick={handleGoogleLogin} className='flex flex-row items-center cursor-pointer gap-2'>
                            Login
                            <FcGoogle size={30}/>
                        </div>
                    )}
                </div>
            </section>
        </header>
    )
}

export default AuthHeader;