import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {nord} from "react-syntax-highlighter/dist/esm/styles/prism";

const MarkdownPreview = ({markdown}: { markdown: string }) => {
    console.log(markdown);
    return (
        <div>
            <div>
                <ReactMarkdown>
                    {markdown}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default MarkdownPreview;