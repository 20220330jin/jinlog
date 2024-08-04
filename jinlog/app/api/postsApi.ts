import { PrismaClient } from "@prisma/client";
import {NextApiRequest, NextApiResponse} from "next";

const prisma = new PrismaClient();

const postsApi = async (req: NextApiRequest, res:NextApiResponse) => {
    console.log("postsApi")
    console.log(prisma);
}

export default postsApi;