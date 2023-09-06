"use client";
import Link from "next/link";
import { useState, ChangeEvent, useEffect } from "react";
import { signIn, signOut } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";

export default function SignInForm() {
    const router = useRouter()
    const searchParams = useSearchParams();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const callbackUrl = searchParams?.get('callbackUrl') || '/signup'
     const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    
 
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      setIsLoading(true)
      try {
        const result = await signIn("credentials", {
          email: email.toLowerCase(),
          password: password,
          redirect: false,
          callbackUrl,
        });
        if (!result?.error) {
          setIsLoading(false)
          router.push(callbackUrl);
        }
        
        else {
          setIsLoading(false)
          setErrorMessage("Email or password is incorrect");
        }
      } catch (err) {
        console.log(err);
      }
    }
  
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col my-5 w-96 mx-auto p-5 bg-slate-200 rounded-lg"
      >
        <input
          className="my-5 p-2 outline-none rounded-sm"
          onChange={(e) => setEmail(e.target.value)}
          name='email'
          value={email}
          type="text"
          placeholder="email"
          cy-data="login-email"
          required
        />
        <input
          className="my-5 p-2 outline-none rounded-sm"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          value={password}
          cy-data="login-password"
          required
        />
        {errorMessage && <p className="text-center text-red-500">{errorMessage}</p>}
        <button
        disabled={isLoading}
          cy-data="login-button"
          className="bg-violet-500 p-2 text-slate-100 rounded-sm hover:opacity-90"
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <Link
        cy-data="login-signup"
        className="text-center no-underline hover:underline my-5"
        href="/signup"
      >
        Dont have an account? Create a free account here
      </Link>
    </>
  );
  }
