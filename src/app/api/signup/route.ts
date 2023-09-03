import cloudinary from "cloudinary"
import "../../../lib/cloudinary/cloudinary"
import { createUser } from "@/lib/user/createUser";
import { findUserByEmailOrUsername } from "@/lib/user/findUniqueUser";
import { hashPassword } from "@/lib/user/hashPassword";
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

  const hashedPassword = await hashPassword(password);
  const profilePic = await cloudinary.v2.uploader.upload("https://res.cloudinary.com/dab5zmbvd/image/upload/v1691437826/undraw_monster_artist_2crm_kvoet0.svg", {
    folder: "user-profiles",
  });
  const newUser = await createUser(
    firstName,
    lastName,
    username,
    email,
    hashedPassword,
    profilePic.secure_url,
    location,
    pronouns,
    bio,
    link
  );
  console.log(newUser);
  return NextResponse.json({ newUser });
}
