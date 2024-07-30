"use client";
import React from "react";
import {Database} from "@/types/supabase";

type TodoDto = Database['public']['Tables']['todos_with_rls']['Row']

const TodoListItemReadonly = ({ todo = {} as TodoDto }) => {
    return (
        <li
            className="min-h-[60px]
    bg-[#B280D9] border border-black rounded-2xl font-bold group"
        >
            <article
                className="
          min-h-[60px] p-4
          flex flex-col sm:flex-row gap-4
        "
            >
                <>
                    <div className="flex-1 text-[18px] cursor-pointer ">
                        {todo?.content}
                    </div>
                </>
            </article>
        </li>
    );
};

export default TodoListItemReadonly;