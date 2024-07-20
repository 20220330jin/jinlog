import React from "react";
import {sleep} from "@/lib/utils";
import TodoContainer from "@/app/todo-no-rls/components/TodoContainer";

const page = async () => {
    await sleep(1500);
    return (
        <div>page
            <TodoContainer/>
        </div>
    )
}

export default page