'use client'
import TitleList from "@/components/post/TitleList";
import {useEffect, useState} from "react";
import axios from "@/lib/axios";
import StudyPostInfo from "@/components/post/study/StudyPostInfo";

interface StudyPostInfoContainerProps {
    postId: number;
}

const StudyPostInfoContainer = ({
    postId
                                }:StudyPostInfoContainerProps) => {
    /** STUDOY POST 리스트 state **/
    const [studyPosts, setStudyPosts] = useState([]);
    /** 블로그 포스트 상세 게시글 state **/
    const [post, setPost] = useState({});
    /**
     * 블로그 포스트 리스트 조회 API 요청
     * @param userId
     * @constructor
     */
    const getStudyPostList = () => {
        // STUDY 카테고리 조회
        const params = {
            category: 'STUDY',
            action: 'getStudyPostList'
        }
        axios.get('/post/study', {params})
            .then((res) => {
                setStudyPosts(res.data.posts);
            });
    }

    /**
     * 블로그 포스트 상세 게시글 조회
     */
    const getPostInfo = () => {
        axios.get(`/post/${postId}`)
            .then((res) => {
                console.log(res.data)
                setPost(res.data.post);
            });
    }

    useEffect(() => {
        getStudyPostList();
        getPostInfo();
    }, []);
    return (
        <div className='px-40 flex flex-1 justify-center rounded-full py-5'>
            <div className='layout-content-container flex flex-col max-w-[960px] flex-1'>
                <div className='flex flex-wrap justify-between gap-3 p-4'>
                    <p className='text-[#0d151c] tracking-light text-[32px] font-bold leading-tight min-w-72'>STUDY</p>
                </div>
                <TitleList posts={studyPosts}/>
                <StudyPostInfo post={post}/>
            </div>
        </div>
    );
}
export default StudyPostInfoContainer;