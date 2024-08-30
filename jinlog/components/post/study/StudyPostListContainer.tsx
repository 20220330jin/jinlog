'use client'
import axios from "@/lib/axios";
import {useEffect, useState} from "react";
import TitleList from "@/components/post/TitleList";
import StudyPostList from "@/components/post/study/StudyPostList";
import {useRouter} from "next/navigation";

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
    /** 라우터 **/
    const router = useRouter()
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
            category: 'STUDY',
            actions: 'getStudyPostList'
        }
        axios.get('/post/getAllPosts', {params})
            .then((res) => {
                setStudyPosts(res.data);
            });
    }

    useEffect(() => {
        getStudyPostList();
    }, []);

    return (
        <div className='px-40 flex flex-1 justify-center rounded-full py-5'>
            <div className='layout-content-container flex flex-col max-w-[960px] flex-1'>
                <div className='flex flex-wrap justify-between gap-3 p-4'>
                    <p className='text-[#0d151c] tracking-light text-[32px] font-bold leading-tight min-w-72'>STUDY</p>
                    <div>
                        <button onClick={() => router.push('/post/write')}>글 작성</button>
                    </div>
                </div>
                {/* 포스트 제목 리스트 */}
                <TitleList posts={studyPosts}/>
                {/* 포스트 리스트: 카드형식 */}
                <StudyPostList posts={studyPosts}/>
            </div>
        </div>
    )
}

export default StudyPostListContainer;