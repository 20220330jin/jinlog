import {sleep} from "@/lib/utils";
import {pingAction} from "@/actions/ping/pinc.action";
import ClientComponentTest from "@/app/todo/components/ClientComponentTest";
import {getTodoActions} from "@/actions/todo/todo.action";

const page = async () => {
    console.log(">>> SSR START");

    // const result = await pingAction();

    const result = await getTodoActions();

    await sleep(1500);

    console.log(">>> SSR END");
    return (
        <div> PAGE {JSON.stringify(result)}
            <ClientComponentTest/>
        </div>
    )
}

export default page;