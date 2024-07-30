import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {nord} from "react-syntax-highlighter/dist/esm/styles/prism";

const MarkdownPreview = ({markdown}: { markdown: string }) => {
    console.log(markdown);
    return (
        <div>
            <div>
                Markdown
                <ReactMarkdown remarkPlugins={[remarkGfm]}
                               components={{
                                   code({ node, inline, className, children, ...props }) {
                                       const match = /language-(\w+)/.exec(className || '');
                                       return !inline && match ? (
                                           <SyntaxHighlighter
                                               style={nord}
                                               language={match[1]}
                                               PreTag="div"
                                               {...props}
                                           >
                                               {String(children).replace(/\n$/, '')}
                                           </SyntaxHighlighter>
                                       ) : (
                                           <code className={className} {...props}>
                                               {children}
                                           </code>
                                       );
                                   },
                               }}
                >
                    {markdown}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default MarkdownPreview;