'use client'

import useTodosController from "@/app/todo-no-rls/hooks/useTodosController";
import TodoList from "@/components/ui/TodoList";

const TodoContainer = () => {

    const {loading, todos, onCreateEmptyTodos, onDeleteTodos, onSearchTodos, onUpdateTodos} = useTodosController();

    console.log({loading, todos})

    return (
        <div>
            <TodoList
                sharedUserFullName='test user'
                ownerUserId='ddd'
                loading={loading}
                todoListData={todos}
                isReadOnly={false}
                onUpdate={onUpdateTodos}
                onCreate={() => {
                    onCreateEmptyTodos()
                }}
                onDelete={(id) => {
                    onDeleteTodos(id)
                }}
                onSearch={(terms) => {
                    onSearchTodos(terms)
                }}
            />
        </div>
    )
}

export default TodoContainer;