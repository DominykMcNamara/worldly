"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import UserCard from "../components/UserCard";
import CreateBlogPost from "../components/CreateBlogPost";
export default function MyProfile() {
  const { data: session, status } = useSession();

  return (
    <div>
      {status === "loading" && <h1 className="text-center">Loading...</h1>}
      {status === "authenticated" && session.user && (
        <div className="flex justify-around flex-row-reverse h-[100dvh] py-10">
          <div className="">
            
            <UserCard userProfile={session.user} />
            </div>
            <section id="feed">
            <CreateBlogPost />
          </section>
        
          
        </div>
      )}
      {status === "unauthenticated" && (
        <Link href="/signin">Sign in to continue</Link>
      )}
    </div>
  );
}
