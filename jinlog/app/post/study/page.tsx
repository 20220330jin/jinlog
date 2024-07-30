'use client'
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {nord} from "react-syntax-highlighter/dist/esm/styles/prism";
import MarkdownPreview from "@/components/MarkdownPreview";
import {useState} from "react";

const Page = () => {
    const [markdown, setMarkdown] = useState('');
    const test = 'TEST'
    console.log(markdown)
    const handlerContent = (content: string) => {
        setMarkdown(content);
    }
    return (
        <div>
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