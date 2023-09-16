import prisma from "../prisma";

export async function getUserPostsByUserId(id: string): Promise<Post[] | null> {
  if (!id) {
    return null;
  }
  const posts: Post[] | undefined = await prisma?.post.findMany({
    where: {
      authorId: id,
    },
  });
  if(!posts) {
    return []
  }
  return posts
}
