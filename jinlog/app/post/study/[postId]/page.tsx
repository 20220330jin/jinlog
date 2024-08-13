import StudyPostInfoContainer from "@/components/post/study/StudyPostInfoContainer";

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
    console.log(params)
    return (
        <div>
            <h1>StudyPostInfoPage</h1>
            <StudyPostInfoContainer/>
        </div>
    )
}

export default StudyPostInfoPage;