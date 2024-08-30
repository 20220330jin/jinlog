import StudyPostInfoContainer from "@/components/post/study/StudyPostInfoContainer";
import {cookies} from "next/headers";

/**
 * STUDY 블로그 상세 Page
 * @constructor
 */
type StudyPostInfoPageProps = {
    params: {
        postId: number;
    }
}
const StudyPostInfoPage = ({params}: StudyPostInfoPageProps) => {

    /** 게시글 ID **/
    return (
        <div>
            <StudyPostInfoContainer postId={params.postId}/>
        </div>
    )
}

export default StudyPostInfoPage;