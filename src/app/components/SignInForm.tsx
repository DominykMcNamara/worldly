"use client";
import Link from "next/link";
import { useState, ChangeEvent, useEffect } from "react";
import { signIn, signOut } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";

export default function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
 
  const callbackUrl = searchParams?.get("callbackUrl") || "/myprofile";
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  function handleFormInputChange(e: ChangeEvent<HTMLInputElement>): void {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await signIn("credentials", {
        email: formData.email.toLowerCase(),
        password: formData.password,
        redirect: false,
        callbackUrl,
      });
      if (!result?.error) {
        setIsLoading(false);
        router.push(callbackUrl);
      } else {
        setIsLoading(false);
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
        className="flex flex-col mx-auto my-5 p-10 bg-slate-200 rounded-lg"
      >
        <div className="flex flex-col">
          <label className="" htmlFor="email">
            Email
          </label>
          <input
            className="my-5 p-2 rounded-sm"
            onChange={handleFormInputChange}
            name="email"
            value={formData.email}
            type="text"
            cy-data="login-email"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            className="my-5 p-2 outline-none rounded-sm"
            type="password"
            placeholder="password"
            onChange={handleFormInputChange}
            name="password"
            value={formData.password}
            cy-data="login-password"
            required
          />
        </div>
        {errorMessage && (
          <p className="text-center text-red-500">{errorMessage}</p>
        )}
        <button
          disabled={isLoading}
          cy-data="login-button"
          className="my-5 bg-green-500 w-96 mx-auto rounded-sm p-2 hover:opacity-90 ease-in"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
      <Link
        cy-data="sign-up-link"
        className="no-underline hover:underline my-5 text-center"
        href="/signup"
      >
        Dont have an account? Create a free account here
      </Link>
    </>
  );
}
