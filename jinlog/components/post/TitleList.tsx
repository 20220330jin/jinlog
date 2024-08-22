'use client'
import {Fragment, useState} from "react";
import {PostResponse} from "@/app/types/post";
import {formatDateTimeAgo} from "@/util/DateUtil";
import {useRouter} from "next/navigation";

/**
 * 포스트 게시판 공통 타이틀 목록 컴포넌트
 * - 게시글 제목만 모아서 목록으로 보여준다.
 * - TODO (구현필요) (20240822/x) 페이징 작업 필요 -hjkim
 */

interface TitleListProps {
    posts: PostResponse[];
}

const TitleList = ({
                       posts = []
                   }: TitleListProps) => {
    /** 라우터 **/
    const router = useRouter();
    /** 포스트 제목 리스트 오픈 제어 state **/
    const [isOpenPostList, setIsOpenPostList] = useState(false);

    /** 포스트 노출 제한 => 현재: 5개 **/
    const displayPosts = posts.slice(0, 5);

    const handleTitleList = () => {
        setIsOpenPostList(!isOpenPostList);
    }

    /**
     * 포스트 상세정보 페이지로 이동
     * - 제목 클릭
     */
    const moveToPostInfo = (postId: number) => {
        router.push(`/post/study/${postId}`)
    }

    return (
        <Fragment>
            <div className='p-4'>
                <div>
                    <div className='flex justify-between'>
                        <h4 className='font-bold'>STUDY의 목록({posts.length})</h4>
                        <a className='cursor-pointer' onClick={handleTitleList}>목록 열기</a>
                    </div>
                    <div
                        className={`mt-4 transition-all duration-1000 ${isOpenPostList ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
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
                            {posts && displayPosts.map((post) => (
                                <tr key={post.id}>
                                    <td className='w-full mb-1 border-b border-gray-200'>
                                        <div className='flex justify-between p-1'>
                                            <span className='cursor-pointer'
                                                  onClick={() => moveToPostInfo(post.id)}>{post.title}</span>
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