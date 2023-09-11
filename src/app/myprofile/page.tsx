'use client'
import { useSession } from "next-auth/react"
import Link from "next/link";
import UserCard from "../components/UserCard";

export default  function MyProfile() {
  const { data: session, status } = useSession()

  

  return (
    <div>
      {status === 'loading' && <h1 className='text-center'>Loading...</h1>}
      {status === 'authenticated' && session.user && (
        <div className="float-right my-10 mx-60">
        <UserCard userProfile={session.user} />
        </div>
      )}
      {status === 'unauthenticated' && <Link href='/signin'>Sign in to continue</Link> }
    </div>
  );
}
