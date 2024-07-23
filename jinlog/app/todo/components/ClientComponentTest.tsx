'use client'
import {pingAction} from "@/actions/ping/pinc.action";
import {getTodoActions} from "@/actions/todo/todo.action";

const ClientComponentTest = () => {

    const handleClick = async () => {
        console.log(">>> CLIENT START");
        const result = await pingAction();
        console.log(">>> CLIENT END", result);

        const todos = await getTodoActions()
        console.log(JSON.stringify(todos));
    }

    return (
        <div>
            <button onClick={handleClick}>Test Server Actions</button>
        </div>

    )
}

export default ClientComponentTest