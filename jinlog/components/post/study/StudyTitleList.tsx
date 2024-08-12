import {Fragment} from "react";
import {PostResponse} from "@/app/types/post";

interface StudyTitleListProps {
    posts: PostResponse[];
}

const StudyTitleList = ({
                            posts = []
                        }: StudyTitleListProps) => {
    return (
        <Fragment>
            <div className='mt-4'>
                <table>
                    <thead>
                    <tr>
                        <th>글 제목</th>
                        <th>작성일</th>
                    </tr>
                    </thead>
                    <tbody>
                    {posts && posts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>{post.createdAt}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </Fragment>
    )
}
export default StudyTitleList;