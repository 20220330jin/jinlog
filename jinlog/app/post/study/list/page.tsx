import StudyPostListContainer from "@/components/post/study/StudyPostListContainer";
import {getUser} from "@/actions/auth/user.action";

/**
 * STUDY 블로그 리스트 Page
 * Post > Study > List
 * @constructor
 */
const StudyListPage = async () => {
    // 유저정보
    const user = await getUser({serverComponent: true});
    // TODO (확인필요) (20240806/x) 현재 actions api를 통해 유저정보를 조회해서 가져오고 있음 => 추후 zustand등으로 상태관리하는 것이 효율적인지 확인필요 -hjkim
    return (
        <div>
            <StudyPostListContainer userId={user?.id}/>
        </div>
    )
}

export default StudyListPage;