import {NextApiRequest, NextApiResponse} from "next";
import prisma from "../../../prismaClient";

const postsApi = async (req: NextApiRequest, res: NextApiResponse) => {
    const {method} = req;
    console.log(method)

    switch (method) {
        case "GET":
            try {
                const posts = await prisma.post.findMany();
                res.status(200).json(posts);
            } catch (error) {
                res.status(500).json({error: "Error fetching posts"});
            }
            break;
        case "POST":
            try {
                const {title, content, category} = req.body;
                const newPost = await prisma.post.create({
                    data: {title, content, category},
                });
                res.status(201).json(newPost);
            } catch (error) {
                res.status(500).json({error: "Error creating post"});
            }
            break;
        case "PUT":
            try {
                const {id, title, content, category} = req.body;
                const updatedPost = await prisma.post.update({
                    where: {id: Number(id)},
                    data: {title, content, category},
                });
                res.status(200).json(updatedPost);
            } catch (error) {
                res.status(500).json({error: "Error updating post"});
            }
            break;
        case "DELETE":
            try {
                const {id} = req.body;
                await prisma.post.delete({
                    where: {id: Number(id)},
                });
                res.status(204).end();
            } catch (error) {
                res.status(500).json({error: "Error deleting post"});
            }
            break;
        default:
            res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
};

export default postsApi;