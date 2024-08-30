// RouterHandler, RSC, Middleware, ServerActions
// ServerActions, RouterHandler
// 'use server'
import {cookies} from "next/headers";
import {createServerClient} from "@supabase/ssr";
import {Database} from "@/types/supabase";
import {NextRequest, NextResponse} from "next/server";
import {getCookie, setCookie} from "cookies-next";

export const createServerSideClient = async (serverComponent = false) => {
    const cookieStore = cookies();
    // console.log(cookieStore);
    // console.log('jin',cookieStore.get(key));

    return createServerClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
            cookies: {
                get: (key) => {
                    console.log('Key:', key);
                    const value = cookieStore.get(key)?.value;
                    console.log('Value:', value);
                    return value;
                },
                set: (key, value, options) => {
                    if (serverComponent) return
                    cookieStore.set(key, value, options);
                },
                remove: (key, options) => {
                    if (serverComponent) return
                    cookieStore.set(key, "", options);
                }
            }
        }
    );
}

// RSC(React Server Components)
export const createServerSideClientRSC = async () => {
    return createServerSideClient(true);
}

// Middleware
export const createServerSideMiddleware = async (req: NextRequest, res: NextResponse) => {
    return createServerClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
            cookies: {
                get: (key) => getCookie(key, {req, res}),
                set: (key, value, options) => {
                    setCookie(key, value, {req, res, ...options});
                },
                remove: (key, options) => {
                    setCookie(key, "", {req, res, ...options});
                }
            }
        }
    );
}