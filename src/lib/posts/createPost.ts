import prisma from "../prisma";


export async function createPost(title: string, content: string, authorEmail: string | undefined | null, published: boolean):Promise<Partial<Post> | undefined | null>{
 if (!title || !content || !authorEmail || !prisma) {
  return null
 }
 const newPost = await prisma.post.create({
    data: {
      title,
      content,
      author: { connect: { email: authorEmail } },
      published
    
    }
 })
 console.log(newPost)
 return newPost

}