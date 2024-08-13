import {Fragment} from "react";
import {PostResponse} from "@/app/types/post";

/**
 * STUDY 블로그 포스트 리스트 컴포넌트
 * @constructor
 */

interface StudyPostListProps {
    posts: PostResponse[];
}
const StudyPostList = ({
    posts = []
                       }: StudyPostListProps) => {
    return (
        <Fragment>
            <div className='p-4'>
                <div>
                    {posts && posts.map((post) => (
                        <div key={post.id}>
                            <div className='flex justify-between'>
                                <h4>{post.title}</h4>
                                <p>{post.createdAt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default StudyPostList;