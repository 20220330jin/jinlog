import {NextResponse} from "next/server";
import {createServerSideClient} from "@/lib/supabase";
import {getTodoActions} from "@/actions/todo/todo.action";

export const GET = async () => {
    const result = await getTodoActions();


    console.log("TODO", result)
    return NextResponse.json({...result})
}