'use client'
import PostWriteForm from "@/components/post/PostWriteForm";
import axios from "@/lib/axios";
import {useRouter} from "next/navigation";

/**
 * 블로그 포스트 작성 공통 컨테이너
 * @constructor
 */

interface PostData {
    title: string;
    content: string;
}

const PostWriteContainer = () => {
    /** 라우터 **/
    const router = useRouter();

    /**
     * 블로그 포스트 작성 핸들러
     */
    const handleSubmit = (postData: PostData) => {
        console.log(postData);
        createPost(postData);

    }

    /**
     * 블로그 포스트 작성 API
     */
    const createPost = async (postData: PostData) => {
        const params = {
            ...postData,
            category: 'STUDY'
        }
        const result = await axios.post('/post/write', params)
            .then((res) => {
                console.log(res);
                // 임시작업
                if(res.status === 200){
                    router.push('/post/study/list');
                }
            })
        console.log(result);
    }

    return (
        <div className='px-40 flex flex-1 justify-center rounded-full py-5'>
            <div className='layout-content-container flex flex-col max-w-[960px] flex-1'>
                <div className='flex flex-wrap justify-between gap-3 p-4'>
                    <p className='text-[#0d151c] tracking-light text-[32px] font-bold leading-tight min-w-72'>STUDY</p>
                </div>
                <PostWriteForm onSubmit={handleSubmit}/>
            </div>
        </div>
    )

}
export default PostWriteContainer;