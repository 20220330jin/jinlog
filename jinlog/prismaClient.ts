import {Prisma, PrismaClient} from "@prisma/client";

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL,
        },
    },
    log: ['query'],
});

// prisma.$on('query', (e: { query: string, params: string, duration: number }) => {
// @ts-ignore
prisma.$on('query' as any, (e: Prisma.QueryEvent) => {
    console.log('Query: ', e.query);
    console.log('Params: ', e.params);
    console.log('Duration: ', e.duration);
})

export default prisma;