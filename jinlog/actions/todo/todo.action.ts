'use server'

import {createSupabaseBrowserClient} from "@/lib/client/supabase";

export const getTodoActions = async () => {
    const supabase = createSupabaseBrowserClient()
    const result = await supabase.from('todos_no_rls')
        .select('*')
        .is('deleted_at', null)
        .order('id', {ascending: false});
    console.log(result)
    return result.data
}