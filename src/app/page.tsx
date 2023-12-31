"use client";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <section
      id="home-hero"
      className="w-[100vw] h-[40vh] bg-cyan-400 py-10"
    >
      <div className="flex flex-row mx-auto justify-around w-[85vw]">
      <div className="my-auto flex flex-col">
        <h1 className="text-6xl">Become Worldly</h1>
        <h2 className="text-2xl my-3">Explore stories, theories, and ideas<br /> from people all around the world</h2>
        {status === 'unauthenticated' && <Link href="/signup" className="text-3xl text-center bg-stone-200 rounded-xl mt-10 py-2 hover:opacity-80 ease-in">Begin Exploring</Link> }
        {status === 'authenticated' && session.user && <Link href="/myprofile" className="text-3xl text-center bg-stone-200 rounded-xl mt-10 py-2 hover:opacity-80 ease-in">Welcome {session.user.email}</Link> }
      </div>
      <Image
        src="/hero-llustration.svg"
        height={500}
        width={500}
        alt="an illustration of two people reading the newspaper"
        className="my-auto"
      />
      </div>
    </section>
  );
}
