import {NextResponse} from "next/server";

export const GET = async () => {
    console.log("ping")
    return NextResponse.json({message: "pong"})
}