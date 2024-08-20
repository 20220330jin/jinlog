'use client'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {Fragment, useState} from "react";

interface PostData {
    title: string;
    content: string;
}

const QuillEditor = () => {
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
    }
    return (
        <Fragment>
            <form>
                {/*글 제목 부분*/}
                <div>
                    <div>
                        <input type='text'/>
                    </div>
                </div>
                {/*에디터 부분*/}
                <div>
                    <ReactQuill theme='snow' modules={modules} placeholder='Write..'/>
                </div>
            </form>
        </Fragment>
    )
}

export default QuillEditor;