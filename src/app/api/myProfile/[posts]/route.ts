import { NextResponse } from "next/server";
import { getDraftPostByUserId } from "@/lib/posts/getDraftedPostsByUserId";
import { getPublishedPostsByUserId } from "@/lib/posts/getPublishedPostsByUserId";
import { NextApiRequest } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth/authOptions";

export async function GET(request: NextApiRequest) {
  const { posts } = request.query;

  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  if (posts === "published") {
    const publishedPosts = await getPublishedPostsByUserId(session.user.id);
    if (posts.length === 0) {
      return NextResponse.json(
        { message: "You have no published posts" },
        { status: 200 }
      );
    }
    return NextResponse.json({ message: posts }, { status: 200 });
  }
  if (posts === "drafts") {
    const draftedPosts = await getDraftPostByUserId(session.user.id);
    if (posts.length === 0) {
      return NextResponse.json(
        { message: "You have no Drafted posts" },
        { status: 200 }
      );
    }
    return NextResponse.json({ message: posts }, { status: 200 });
  }
}
