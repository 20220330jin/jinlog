import {PostRepository} from "@/repository/PostRepository";

export const PostService = {
    /**
     * 게시글 조회 Service
     */
    getAllPosts(){
        const result = PostRepository.getAllPosts();
        return result;
    }
}