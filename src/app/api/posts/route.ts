import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth/authOptions"
import { NextResponse } from "next/server";
import { createPost } from "@/lib/posts/createPost";


export async function POST(request: Request) {
   const  { title, content } = await request.json()
   const session = await getServerSession(authOptions)
  
   if(!session || !session.user) {
      return NextResponse.json({message: 'Unauthorized'}, {status: 401})
   }
   const newPost = await createPost(title, content, session.user.email)
   if(!newPost) {
      return NextResponse.json({message: 'Server error'}, {status: 500})
   }
   return NextResponse.json({message: 'New post created'}, {status: 201})
}