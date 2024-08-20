/**
 * 블로그 포스트 작성 공통 컨테이너
 * @constructor
 */
import PostWriteForm from "@/components/post/PostWriteForm";
import {useState} from "react";

const PostWriteContainer = () => {

    return (
        <div className='px-40 flex flex-1 justify-center rounded-full py-5'>
            <div className='layout-content-container flex flex-col max-w-[960px] flex-1'>
                <div className='flex flex-wrap justify-between gap-3 p-4'>
                    <p className='text-[#0d151c] tracking-light text-[32px] font-bold leading-tight min-w-72'>STUDY</p>
                </div>
                <PostWriteForm/>
            </div>
        </div>
    )

}
export default PostWriteContainer;