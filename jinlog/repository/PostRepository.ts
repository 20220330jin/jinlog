import prisma from "@/prismaClient";

/**
 * 블로그 게시글 Repository
 */
export const PostRepository = {
    async getAllPosts(category: string) {
        const categoryCondition = category === 'ALL' ? undefined : category
        const results = await prisma.post.findMany({
            select: {
                id: true,
                content: true,
                title: true,
                createdAt: true,
            },
            where: {
                category: categoryCondition
            },
            orderBy:{
                createdAt: 'desc'
            }
        })
        return results
    },

    /**
     * 블로그 게시글 작성 Repository
     */
    async createPost(data: any) {
        await prisma.post.create({
            data: {
                title: data.title,
                content: data.content,
                category: data.category
            }
        })
    }
}

