'use client'
import MarkdownPreview from "@/components/MarkdownPreview";
import {useState} from "react";
import StudyPostContainer from "@/app/post/study/components/StudyPostContainer";

const Page = async () => {
    // 유저 정보
    // const user = await getUser({serverComponent: true})
    // console.log(user);
    const [markdown, setMarkdown] = useState('');
    const test = 'TEST'
    console.log(markdown)
    const handlerContent = (content: string) => {
        setMarkdown(content);
    }



    return (
        <div>
            <StudyPostContainer/>
            <div>STUDY PAGE</div>
            <div>
                <div className="w-full md:w-1/2 p-2">
          <textarea
              className="w-full h-96 p-2 border rounded-md"
              value={markdown}
              onChange={(e) => handlerContent(e.target.value)}
              placeholder="Write your markdown here..."
          />
                </div>
                <MarkdownPreview markdown={markdown}/>
            </div>
        </div>
    )
}

export default Page;