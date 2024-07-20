'use client'

import useTodosController from "@/app/todo-no-rls/hooks/useTodosController";
import TodoList from "@/components/ui/TodoList";

const TodoContainer = () => {

    const {loading, todos} = useTodosController();

    console.log({loading, todos})

    return (
        <div>
            <TodoList sharedUserFullName='test user' ownerUserId='ddd'/>
        </div>
    )
}

export default TodoContainer;