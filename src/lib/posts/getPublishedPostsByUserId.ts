import prisma from "../prisma";

export async function getPublishedPostsByUserId(id: string): Promise<Post[] | null> {
    if (!id) {
      return null;
    }
    const posts: Post[] | undefined = await prisma?.post.findMany({
      where: {
        authorId: id,
        published: true
      },
    });
    if(!posts) {
      return []
    }
    return posts
  }