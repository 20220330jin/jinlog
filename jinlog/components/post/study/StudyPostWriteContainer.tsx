'use client'
import {PostRequestParam} from "@/app/types/post";
import {createPost} from "@/app/service/postsService";
import {useState} from "react";
import MarkdownPreview from "@/components/MarkdownPreview";

/**
 * 글 작성 컨테이너
 */

interface StudyPostWriteContainerProps {
    userId?: string;
}

const StudyPostWriteContainer = ({userId}: StudyPostWriteContainerProps) => {
    // 마크다운 content state
    const [markdown, setMarkdown] = useState('');

    /**
     * 마크다운 content 핸들러
     */
    const handlerContent = (content: string) => {
        setMarkdown(content);
    }

    /**
     * 글작성 요청 API
     */
    const createPostApi = async () => {
        console.log('createPostApi')
        const createParam: PostRequestParam = {
            title: 'testTitle',
            content: 'testContent',
            userId: userId,
            type: 'STUDY'
        };
        await createPost(createParam);
    }

    return (
        <div>
            {/* 글 작성 에디터 영역 */}
            <div className="w-full md:w-1/2 p-2">
          <textarea
              className="w-full h-96 p-2 border rounded-md"
              value={markdown}
              onChange={(e) => handlerContent(e.target.value)}
              placeholder="Write your markdown here..."
          />
            </div>
            {/*마크다운 프리뷰 영역*/}
            <MarkdownPreview markdown={markdown}/>
            {/*글 작성 버튼*/}
            <div>
                <button onClick={() => createPostApi()} className='w-1/2 h-3/4 bg-[#FF1828] text-white border rounded-md'>등록</button>
            </div>
        </div>
    )
}

export default StudyPostWriteContainer;