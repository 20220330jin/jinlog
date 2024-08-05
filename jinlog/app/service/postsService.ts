import {PostRequestParam} from "@/app/types/post";
import axios from "axios";

// API URL
const API_URL = '/api/postsApi';

/**
 * 포스트 작성
 */
export const createPost = async (post: PostRequestParam) => {
    // const response = await axios.post(`${API_URL}/ㅇ`, post);
    const response = await axios.post(API_URL, post);
    return response.data;
}

// 백틱
// const API_URL = '/api/postsApi''';
