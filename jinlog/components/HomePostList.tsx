import {Fragment} from "react";
import {PostResponse} from "@/app/types/post";
import {formatDate, formatDateTime} from "@/util/DateUtil";

/**
 * 홈 화면 블로그 리스트
 * - 카테고리 구분 없이 모든 포스트들을 리스트로 보여준다.
 */
interface HomePostListProps {
    posts: PostResponse[];
}

const HomePostList = ({
                          posts = []
                      }: HomePostListProps) => {

    console.log(posts)
    return (
        <Fragment>
            {posts && posts.map((post) => (
                <div className='p-4' key={post.id}>
                    <div className='flex items-stretch justify-between gap-4 rounded-xl'>
                        <div className='flex flex-col gap-1 flex-[2_2_0px]'>
                            <p className='text-[#49779c] text-sm font-normal leading-normal'>
                                {formatDateTime(post.createdAt)}
                            </p>
                            <p className='text-[#0d151c] text-base font-bold leading-tight'>
                                {post.title}
                            </p>
                            <p className='text-[#49779c] text-sm font-normal leading-normal'>
                                {post.content}
                            </p>
                        </div>
                        <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                             style={{backgroundImage: 'url("https://cdn.usegalileo.ai/stability/fef81926-a8b2-4251-879e-16b3155274bb.png")'}}>
                        {/*    1Kzhhi294zIDWQ0FsWjQ7si5aHk5HaPqs*/}
                        </div>
                    </div>
                </div>
            ))}
        </Fragment>
    )
}

export default HomePostList;