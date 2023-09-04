import React from "react";
import SignUpForm from "../components/SignUpForm";
export default function page() {
    return (
      <section id='signup'>
        <h1 className="text-center text-5xl my-20">Sign Up</h1>
        <SignUpForm />
      </section>
    )
  }