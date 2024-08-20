'use client'


import useTodosController from "@/app/todo/hooks/useTodosController";
import TodoList from "@/components/ui/TodoList";

interface TodoContainerProps {
    ownerUserId?: string
}

const TodoContainer = ({ownerUserId}: TodoContainerProps) => {

    const {loading, todos, onCreateEmptyTodos, onDeleteTodos, onSearchTodos, onUpdateTodos} = useTodosController();

    return (
        <div>
            <TodoList
                sharedUserFullName='test user'
                ownerUserId={ownerUserId}
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