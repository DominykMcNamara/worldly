"use client";

import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import Link from "next/link";
import { pronouns } from "@/lib/pronounData";
export default function SignUpForm(): JSX.Element {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    link: "",
    image: "",
    location: "",
    pronouns: "",
    bio: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleFormInputChange(
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>
  ): void {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData({ ...formData, image: event.target?.result as any });
      };
      reader.readAsDataURL(file);
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");
    const res = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email.toLowerCase(),

        username: formData.username,
        firstName: formData.firstName,
        lastName: formData.lastName,
        password: formData.password,
        image: formData.image,
        location: formData.location || 'Earth',
        pronouns: formData.pronouns || 'N/A',
        link: formData.link.toLowerCase() || 'N/A',
        bio: formData.bio || 'Hello World',
      }),
    });

    if (res.status === 409) {
      setIsLoading(false);
      setErrorMessage("Username or Email is already in use");
    }
    if (res.status === 400) {
      setIsLoading(false);
      setErrorMessage("Required data is missing");
    }
    if (res.status === 500) {
      console.log(res);
      setIsLoading(false);
      setErrorMessage("Unable to create account");
    } else if (res.status === 200) {
      setIsLoading(false);
      setErrorMessage("");
      setSuccessMessage("Account successfully created click here to login!");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mx-auto my-5 p-10 bg-slate-200 rounded-lg w-[75vw] "
    >
      <div className="flex flex-row mx-auto my-2">
        <div className="flex flex-col">
          <label className="mx-5" htmlFor="firstName">
            First Name *
          </label>
          <input
            cy-data="firstName"
            type="text"
            className="form-input mx-5 mt-2 rounded-sm"
            required
            value={formData.firstName}
            name="firstName"
            onChange={handleFormInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="mx-5" htmlFor="lastName">
            Last Name *
          </label>
          <input
            type="text"
            cy-data="lastName"
            className="form-input mx-5  my-2"
            required
            value={formData.lastName}
            name="lastName"
            onChange={handleFormInputChange}
          />
        </div>
      </div>
      <div className="flex flex-row mx-auto my-2">
        <div className="flex flex-col">
          <label className="mx-5" htmlFor="username">
            Username *
          </label>
          <input
            cy-data="username"
            type="text"
            className="form-input mx-5  my-2"
            required
            value={formData.username}
            name="username"
            onChange={handleFormInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="mx-5" htmlFor="email">
            Email *
          </label>
          <input
            cy-data="email"
            type="email"
            className=" mx-5 my-2 form-input"
            required
            value={formData.email}
            name="email"
            onChange={handleFormInputChange}
          />
        </div>
      </div>
      <div className="flex flex-row mx-auto my-2">
        <div className="flex flex-col">
          <label className="mx-5" htmlFor="firstName">
            Password *
          </label>
          <input
            cy-data="password"
            type="password"
            className="form-input mx-5  my-2"
            required
            value={formData.password}
            name="password"
            onChange={handleFormInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="mx-5" htmlFor="location">
            Location
          </label>
          <input
            cy-data="location"
            type="text"
            className=" mx-5  my-2 form-input"
            value={formData.location}
            name="location"
            onChange={handleFormInputChange}
          />
        </div>
      </div>
      <div className="flex flex-row mx-auto my-2">
        <div className="flex flex-col">
          <label className="mx-5" htmlFor="preferred Pronouns">
            Preferred Pronouns
          </label>
          <select
            cy-data="pronouns"
            className="mx-5 my-2 p-2 outline-none rounded-sm form-select"
            name="pronouns"
            value={formData.pronouns}
            id="pronouns"
            onChange={handleFormInputChange}
          >
            <option value="N/A">N/A</option>
            {pronouns.map((option: string) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="mx-5 ml-20" htmlFor="link">
            Website
          </label>
          <input
            cy-data="website"
            type="text"
            className="ml-20  my-2 form-input"
            value={formData.link}
            name="link"
            onChange={handleFormInputChange}
          />
        </div>
      </div>

      <div className="flex flex-col my-2">
        <label className="mx-auto" htmlFor="bio">
          Bio
        </label>
        <textarea
          cy-data="bio"
          className="min-w-[25vw] min-h-[20vh] mx-auto form-textarea"
          value={formData.bio}
          name="bio"
          onChange={handleFormInputChange}
        />
      </div>
      <div className="flex flex-col my-2">
        <label className="mx-auto" htmlFor="image">
          Profile Pic
        </label>
        <input
          cy-data="profilePic"
          type="file"
          className=" mx-auto form-input"
          name="image"
          onChange={handleImageChange}
        />
      </div>
      {errorMessage && (
        <p cy-data="signup-error-message" className="text-red-500 text-center">
          {errorMessage}
        </p>
      )}
      {successMessage && (
        <Link
          cy-data="login-link"
          href="/signin"
          className="hover:underline text-green-500 text-center"
        >
          {successMessage}
        </Link>
      )}
      <button
        cy-data="signup-button"
        className="my-5 bg-green-500 w-96 mx-auto rounded-sm p-2 hover:opacity-90 ease-in"
        disabled={isLoading}
        type="submit"
      >
        {isLoading ? "Creating account..." : "Sign Up"}
      </button>
    </form>
  );
}
