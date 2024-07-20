'use client'

import {useEffect} from "react";
import {
    createTodos,
    deleteTodosHard,
    deleteTodosSoft,
    getTodos,
    getTodosById,
    getTodosBySearch,
    updateTodos
} from "@/apis/todos-no-rls";

const TodoContainer = () => {
    let creates;
    useEffect(() => {
        getTodos();
        getTodosById(3)
        getTodosBySearch('Hello').then((res) => {
            creates = res
        })
        updateTodos(5, 'update Todo')
        // if (creates.length === 0) {
        // }
        // createTodos('create Todo')
        deleteTodosSoft(4)
        deleteTodosHard(7)
    }, []);

    return (
        <div>
            TODO
        </div>
    )
}

export default TodoContainer;