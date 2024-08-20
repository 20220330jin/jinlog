import {Fragment, useState} from "react";
import {PostResponse} from "@/app/types/post";
import {formatDateTimeAgo} from "@/util/DateUtil";
import {useRouter} from "next/navigation";

interface TitleListProps {
    posts: PostResponse[];
}

const TitleList = ({
                       posts = []
                   }: TitleListProps) => {
    /** 라우터 **/
    const router = useRouter();
    const [isOpenPostList, setIsOpenPostList] = useState(false);

    const handleTitleList = () => {
        setIsOpenPostList(!isOpenPostList);
    }

    /**
     * 포스트 상세정보 페이지로 이동
     * - 제목 클릭
     */
    const moveToPostInfo = (postId: number) => {
        router.push(`/post/study/${postId}`);

    }

    return (
        <Fragment>
            <div className='p-4'>
                <div>
                    <div className='flex justify-between'>
                        <h4 className='font-bold'>STUDY의 목록(5)</h4>
                        <a className='cursor-pointer' onClick={handleTitleList}>목록 열기</a>
                    </div>
                    <div className={`mt-4 transition-all duration-1000 ${isOpenPostList ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
                        <table className='w-full'>
                            <thead>
                            <tr>
                                <th className='w-full'>
                                    <div className='flex justify-between border-b border-black'>
                                        <span>글 제목</span>
                                        <span>작성일</span>
                                    </div>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {posts && posts.map((post) => (
                                <tr key={post.id}>
                                    <td className='w-full mb-1 border-b border-gray-200'>
                                        <div className='flex justify-between p-1'>
                                            <span className='cursor-pointer' onClick={() => moveToPostInfo(post.id)}>{post.title}</span>
                                            <span>{formatDateTimeAgo(post.createdAt)}</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default TitleList;