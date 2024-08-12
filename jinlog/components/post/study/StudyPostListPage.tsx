import {Fragment, useState} from "react";
import StudyTitleList from "@/components/post/study/StudyTitleList";
import {PostResponse} from "@/app/types/post";

interface StudyPostListPageProps {
    posts: PostResponse[];
}

const StudyPostListPage = ({
    posts=[]
                           }: StudyPostListPageProps) => {
    /** 글 목록 노출 제어 state **/
    const [isOpenPostList, setIsOpenPostList] = useState(false);

    /**
     * 글 제목 리스트 노출여부 제어
     */
    const handleStudyTitleList = () => {
        setIsOpenPostList(!isOpenPostList);
    }
    return (
        <Fragment>
            {/* 글 목록 부분: 열고 닫기 가능 */}
            <div className='p-4'>
                <div>
                    <div className='flex justify-between'>
                        <h4>STUDY의 목록</h4>
                        <a className='' onClick={handleStudyTitleList}>목록 열기</a>
                    </div>
                    {isOpenPostList && <StudyTitleList posts={posts}/>}
                </div>
            </div>
        </Fragment>
    )
}

export default StudyPostListPage;