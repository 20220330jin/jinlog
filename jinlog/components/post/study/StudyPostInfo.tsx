import {PostResponse} from "@/app/types/post";

interface StudyPostInfoProps {
    post: PostResponse;
}


const StudyPostInfo = ({post = {
    id: 0,
    title: '',
    content: '',
    userId: '',
    type: '',
    createdAt: '',
    updatedAt: ''
}}: StudyPostInfoProps) => {

    return (
        <div>
            <h1>StudyPostInfo</h1>
            <div>
                <h1>TITLE: {post.title}</h1>
                <p>CONTENT: {post.content}</p>
            </div>
        </div>
    )
}
export default StudyPostInfo;