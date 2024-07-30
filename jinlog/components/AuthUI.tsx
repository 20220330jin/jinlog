"use client";
import React, {useEffect, useState, useCallback} from "react";
import {Auth} from "@supabase/auth-ui-react";
import {ThemeSupa} from "@supabase/auth-ui-shared";
import {createSupabaseBrowserClient} from "@/lib/client/supabase";
import useHydrate from "@/hooks/useHydrate";
import {User} from "@supabase/supabase-js";

const AuthUI = () => {
    const [user, setUser] = useState<User | null>();
    const supabase = createSupabaseBrowserClient();
    const isMount = useHydrate();

    const getUserInfo = useCallback(async () => {
        const result = await supabase.auth.getUser();
        if (result?.data?.user) setUser(result?.data?.user);
    }, [supabase]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        window.location.reload();
    };

    const handleGoogleLogin = async () => {
        await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO,
            },
        });
    };

    const handleGithubLogin = async () => {
        await supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
                redirectTo: process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO,
            },
        });
    };

    useEffect(() => {
        getUserInfo();
    }, [getUserInfo]);

    if (!isMount) return null;

    return (
        <section className="w-full p-10 ">
            <div className=" mx-auto max-w-[500px]">
                <Auth
                    redirectTo={process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO}
                    supabaseClient={supabase}
                    appearance={{
                        theme: ThemeSupa,
                    }}
                    providers={["google", "github"]}
                />
            </div>
        </section>
    );
};

export default AuthUI;