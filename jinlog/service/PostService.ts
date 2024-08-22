import {PostRepository} from "@/repository/PostRepository";

export const PostService = {
    /**
     * 전체 게시글 조회 Service
     * - 카테고리별 조회
     */
    getAllPosts(category: string) {
        return PostRepository.getAllPosts(category);
    },

    /**
     * 게시글 상세 조회 Service
     */
    getPost(postId: number) {
        return PostRepository.getPost(postId);

    },

    /**
     * 게시글 작성 Service
     */
    createPost(data: any) {
        PostRepository.createPost(data);
    }
}