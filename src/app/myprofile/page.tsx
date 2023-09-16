"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import UserCard from "../components/UserCard";
import CreatePost from "../components/CreatePost";
import MyPublishedPosts from "../components/MyPublishedPosts";
export default function MyProfile() {
  const { data: session, status } = useSession();
  const [feedType, setFeedType] = useState("published-posts")

  return (
    <div>
      {status === "loading" && <h1 className="text-center">Loading...</h1>}
      {status === "authenticated" && session.user && (
        <div className="flex justify-around flex-row-reverse h-[100dvh] py-10">
          <div className="">
            
            <UserCard userProfile={session.user} />
            </div>
            <section id="feed">
            <CreatePost />
            <MyPublishedPosts />
          </section>
        
          
        </div>
      )}
      {status === "unauthenticated" && (
        <Link href="/signin">Sign in to continue</Link>
      )}
    </div>
  );
}
