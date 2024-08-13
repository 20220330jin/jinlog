import {Fragment, useState} from "react";
import {PostResponse} from "@/app/types/post";

interface StudyTitleListProps {
    posts: PostResponse[];
}

const StudyTitleList = ({
                            posts = []
                        }: StudyTitleListProps) => {
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
            <div className='p-4'>
                <div>
                    <div className='flex justify-between'>
                        <h4>STUDY의 목록</h4>
                        <a className='' onClick={handleStudyTitleList}>목록 열기</a>
                    </div>
                    {isOpenPostList &&<div className='mt-4'>
                        <table>
                            <thead>
                            <tr>
                                <th>글 제목</th>
                                <th>작성일</th>
                            </tr>
                            </thead>
                            <tbody>
                            {posts && posts.map((post) => (
                                <tr key={post.id}>
                                    <td>{post.title}</td>
                                    <td>{post.createdAt}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>}
                </div>
            </div>
        </Fragment>
)
}
export default StudyTitleList;