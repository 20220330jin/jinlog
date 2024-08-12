'use client'
import {useRouter} from "next/navigation";
import StudyPostListPage from "@/components/post/study/StudyPostListPage";
import axios from "@/lib/axios";
import {useEffect, useState} from "react";

/**
 * STUDY 블로그 리스트 Container
 * @constructor
 */

// 유저ID 타입 정의
// TODO (확인필요) (20240806/x) 타입정의 interface로 하는 이유 / 따로 type정의 파일로 뺄지 확인 필요 -hjkim
interface StudyPostListContainerProps {
    userId?: string;
}

const StudyPostListContainer = ({userId}: StudyPostListContainerProps) => {
    /** STUDOY POST 리스트 state **/
    const [studyPosts, setStudyPosts] = useState([]);
    /**
     * 블로그 포스트 리스트 조회 API 요청
     * @param userId
     * @constructor
     */
    const getStudyPostList = () => {
        // STUDY 카테고리 조회
        const params = {
            category: 'STUDY'
        }
        axios.get('/post/study', {params})
            .then((res) => {
                setStudyPosts(res.data.posts);
            });
    }

    useEffect(() => {
        getStudyPostList();
    }, []);
    return (
        <div className='px-40 flex flex-1 justify-center rounded-full py-5'>
            {/*<button onClick={() => router.push('/post/study/write')}>글 작성</button>*/}
            <div className='layout-content-container flex flex-col max-w-[960px] flex-1'>
                <div className='flex flex-wrap justify-between gap-3 p-4'>
                    <p className='text-[#0d151c] tracking-light text-[32px] font-bold leading-tight min-w-72'>STUDY</p>
                </div>
                <StudyPostListPage posts={studyPosts}/>
            </div>
        </div>
    )
}

export default StudyPostListContainer;