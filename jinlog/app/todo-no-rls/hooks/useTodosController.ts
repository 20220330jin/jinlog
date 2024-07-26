import {useEffect, useState} from "react";
// import {createTodos, deleteTodosSoft, getTodos, getTodosBySearch, updateTodos} from "@/apis/todos-no-rls";
import {createTodos, deleteTodosSoft, getTodos, getTodosBySearch, updateTodos} from "@/actions/todo/todo.action";
import {Database} from "@/types/supabase";

type TodoDto = Database['public']['Tables']['todos_with_rls']['Row']

const useTodosController = () => {
    /** Loading State **/
    const [loading, setLoading] = useState<boolean>(true);
    /** Todos State **/
    const [todos, setTodos] = useState<TodoDto[]>([]);

    /**
     * TodoList 가져오기
     */
    const onGetTodos = async () => {
        setLoading(true)
        try {
            const result = await getTodos();
            console.log(result);
            if (result) setTodos(result);
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false);
        }
    }

    /**
     * 비어있는 Todo 생성
     */
    const onCreateEmptyTodos = async () => {
        await createTodos('');
        await onGetTodos();
    }

    /**
     * Todo 업데이트
     */
    const onUpdateTodos = async (id: number, content: string) => {
        await updateTodos(id, content);
        await onGetTodos();
    }

    /**
     * Todo 삭제
     */
    const onDeleteTodos = async (id: number) => {
        await deleteTodosSoft(id);
        await onGetTodos();
    }

    /**
     * TodoList 검색
     */
    const onSearchTodos = async (terms: string) => {
        if (terms) {
            const todoResult = await getTodosBySearch(terms);
            if (todoResult) setTodos(todoResult);
        }else {
            await onGetTodos();
        }
    }

    useEffect(() => {
        onGetTodos();
    }, []);

    return {loading, todos, onCreateEmptyTodos, onUpdateTodos, onDeleteTodos, onSearchTodos}
}

export default useTodosController;