'use client'

import useTodosController from "@/app/todo-no-rls/hooks/useTodosController";
import TodoList from "@/components/ui/TodoList";

interface TodoContainerProps {
    sharedUserFullName?: string
    ownerUserId?: string
}

const TodoContainer = ({sharedUserFullName, ownerUserId}: TodoContainerProps) => {

    const {loading, todos, onCreateEmptyTodos, onDeleteTodos, onSearchTodos, onUpdateTodos} = useTodosController(ownerUserId);

    return (
        <div>
            <TodoList
                sharedUserFullName={sharedUserFullName}
                ownerUserId={ownerUserId}
                loading={loading}
                todoListData={todos}
                isReadOnly={true}
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