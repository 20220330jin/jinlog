import {PostRepository} from "@/repository/PostRepository";

export const PostService = {
    /**
     * 전체 게시글 조회 Service
     * - 카테고리별 조회
     */
    getAllPosts(category: string) {
        const result = PostRepository.getAllPosts(category);
        return result;
    },
}