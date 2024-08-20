import {getUser} from "@/actions/auth/user.action";
import TodoContainer from "@/app/todo/components/TodoContainer";

export default async function Home() {

    const user = await getUser({serverComponent: true})

    return (
        <main>
            {user ? (
                <TodoContainer ownerUserId={user?.id }/>

            ) : (
                <></>
            )}
        </main>
    )
}
