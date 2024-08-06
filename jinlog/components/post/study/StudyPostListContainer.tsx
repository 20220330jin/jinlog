'use client'
import {useRouter} from "next/navigation";
import StudyPostListPage from "@/components/post/study/StudyPostListPage";
import axios from "@/lib/axios";
import {useEffect} from "react";

/**
 * STUDY 블로그 리스트 Container
 * @constructor
 */

// 유저ID 타입 정의
// TODO (확인필요) (20240806/x) 타입정의 interface로 하는 이유 / 따로 type정의 파일로 뺄지 확인 필요 -hjkim
interface StudyPostListContainerProps {
    userId?: string;
}

/**
 * 블로그 포스트 리스트 조회 API 요청
 * @param userId
 * @constructor
 */
const getStudyPostList = () => {
    const testResult = axios.get('/post/study');
}



const StudyPostListContainer = ({userId}: StudyPostListContainerProps) => {
    const router = useRouter();
    return (
        <div>
            {/*<button onClick={() => router.push('/post/study/write')}>글 작성</button>*/}
            <button onClick={getStudyPostList}>글 작성</button>
            <StudyPostListPage/>
        </div>
    )
}

export default StudyPostListContainer;