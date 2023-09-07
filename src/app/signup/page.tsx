import React from "react";
import SignUpForm from "../components/SignUpForm";
export default function SignUp() {
    return (
    <section id="signUpPage" className="p-5 min-h-[100vh] flex flex-col justify-center">
    
        <h1 className="text-center text-5xl my-20">Sign Up</h1>
        <SignUpForm />
      </section>
    )
  }