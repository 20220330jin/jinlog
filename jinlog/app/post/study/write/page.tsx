import {getUser} from "@/actions/auth/user.action";
import StudyPostWriteContainer from "@/app/post/study/components/StudyPostWriteContainer";

/**
 * 글 작성 페이지
 * @constructor
 */

const WritePage = async () => {

    // 유저정보
    const user = await getUser({serverComponent: true})

    return (
        <div>
            <h1>글쓰기 페이지</h1>
            <StudyPostWriteContainer userId={user?.id}/>
        </div>
    );
}

export default WritePage;