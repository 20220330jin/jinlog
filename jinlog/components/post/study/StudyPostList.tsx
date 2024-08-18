import {Fragment} from "react";
import {PostResponse} from "@/app/types/post";
import {formatDateTime, formatDateTimeAgo} from "@/util/DateUtil";

/**
 * STUDY 블로그 포스트 리스트 컴포넌트
 * - 카드형식 디자인
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
                <div className='grid grid-cols-4 gap-4'>
                    {posts && posts.map((post) => (
                        <div key={post.id} className=''>
                            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                                 style={{backgroundImage: 'url("https://cdn.usegalileo.ai/stability/fef81926-a8b2-4251-879e-16b3155274bb.png")'}}>
                                {/*    1Kzhhi294zIDWQ0FsWjQ7si5aHk5HaPqs*/}
                            </div>
                            <div className='p-4'>
                                <h4>{post.title}</h4>
                                <p>{formatDateTimeAgo(post.createdAt)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default StudyPostList;