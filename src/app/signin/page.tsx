import React from "react";
import SignInForm from "../components/SignInForm";
export default function SignIn() {
    return (
    <section id="LoginPage" className="p-5 min-h-[100vh] flex flex-col justify-center">
        <h1 className="text-center text-5xl my-20">Sign In</h1>
        <SignInForm />
      
      </section>
    )
  }