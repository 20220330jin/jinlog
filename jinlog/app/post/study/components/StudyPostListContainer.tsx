'use client'
import {useRouter} from "next/navigation";

const StudyPostListContainer = () => {
    const router = useRouter();
    return (
        <div>
            <button onClick={() => router.push('/post/study/write')}>글 작성</button>
            List
        </div>
    )
}

export default StudyPostListContainer;