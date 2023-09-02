import { createUser } from "@/lib/user/createUser";
import { findUserByEmailOrUsername } from "@/lib/user/findUniqueUser";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    firstName,
    lastName,
    username,
    email,
    password,
    image,
    location,
    pronouns,
    bio,
    link,
  } = await request.json();
  console.log(username);
  if (!firstName || !lastName || !username || !email || !password) {
    return NextResponse.json(
      { message: "Required data missing" },
      { status: 422 }
    );
  }
  const findUniqueUser = await findUserByEmailOrUsername(email, username);
  if (findUniqueUser) {
    return NextResponse.json(
      { message: "Username or email already exists" },
      { status: 409 }
    );
  }

  const newUser = await createUser(firstName)
  NextResponse.json({ newUser });
}
