'use client'
import { useSession } from "next-auth/react"
import Link from "next/link";
import UserCard from "../components/UserCard";

export default  function MyProfile() {
  const { data: session, status } = useSession()

  return (
    <div>
      {status === 'authenticated' ? (
        <div className="float-right my-10 mx-60">
        <UserCard userProfile={session?.user} />
        </div>
      ) : (
        <Link href="/signin">You must sign in</Link>
      )}
    </div>
  );
}
