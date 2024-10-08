'use client'
import {Fragment, useState} from "react";
// import 'react-quill/dist/quill.snow.css'
import dynamic from "next/dynamic";

// import ReactQuill from "react-quill";

/**
 * Quill Editor
 * - 글 작성시 사용되는 공용 에디터
 * - 외부 라이브러리
 */

interface PostData {
    title: string;
    content: string;
}

interface QuillEditorProps {
    onSubmit: (data: PostData) => void;
}

const ReactQuill = dynamic(() => import('react-quill'), {ssr: false});

const QuillEditor = ({onSubmit}: QuillEditorProps) => {
    /** 포스트 제목/내용 state **/
    const [postData, setPostData] = useState<PostData>({
        title: '',
        content: ''
    });
    /** Quill 모듈 **/
    const modules = {
        toolbar: {
            container: [
                ['image']
            ]
        }
    }
    /**
     * 포스트 제목/내용 핸들러
     */
    const handleInputChange = (field: keyof PostData, value: string) => {
        console.log('field:', field, 'value:', value);
        setPostData(prevData => ({
            ...prevData,
            [field]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(postData);
    };

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                {/* 글 제목 부분 */}
                <div>
                    <div>
                        <input type='text' id='title' value={postData.title}
                               onChange={(e) => handleInputChange('title', e.target.value)}/>
                    </div>
                </div>
                {/* 글 내용(에디터) 부분 */}
                <div>
                    <ReactQuill theme='snow' modules={modules} placeholder='Write..'
                                onChange={(content) => handleInputChange('content', content)}/>
                </div>
                <button type="submit">Submit Post</button>
            </form>
        </Fragment>
    )
}

export default QuillEditor;