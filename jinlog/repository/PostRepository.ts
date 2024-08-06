import prisma from "@/prismaClient";

/**
 * 블로그 게시글 Repository
 */
export const PostRepository = {
    async getAllPosts() {
        const results = await prisma.post.findMany({
            select: {
                id: true,
                content: true,
            },
            where: {
                category: 'STUDY'
            }
        })
        return results
    }
}