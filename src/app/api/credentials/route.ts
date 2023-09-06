import { checkCredentials } from "@/lib/auth/checkCredentials";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
 const { email, password } = await request.json()
 const user = await checkCredentials(email, password)
if (!user) {
    return NextResponse.json({message: 'Invalid email or password'}, {status: 409})
}
return NextResponse.json({user}, {status: 200})
}