import {Fragment, useState} from "react";
import {PostResponse} from "@/app/types/post";
import {formatDateTimeAgo} from "@/util/DateUtil";

interface TitleListProps {
    posts: PostResponse[];
}

const TitleList = ({
                       posts = []
                   }: TitleListProps) => {
    const [isOpenPostList, setIsOpenPostList] = useState(false);

    const handleTitleList = () => {
        setIsOpenPostList(!isOpenPostList);
    }

    return (
        <Fragment>
            <div className='p-4'>
                <div>
                    <div className='flex justify-between'>
                        <h4 className='font-bold'>STUDY의 목록(5)</h4>
                        <a className='' onClick={handleTitleList}>목록 열기</a>
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
                                            <span>{post.title}</span>
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