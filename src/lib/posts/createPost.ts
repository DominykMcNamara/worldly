import prisma from "../prisma";


export async function createPost(title: string, content: string, authorEmail: string | undefined | null):Promise<Partial<Post> | undefined | null>{
 if (!title || !content || !authorEmail || !prisma) {
  return null
 }
 const newPost = await prisma.post.create({
    data: {
      title,
      content,
      author: { connect: { email: authorEmail } },
    
    }
 })
 console.log(newPost)
 return newPost

}