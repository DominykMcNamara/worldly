import cloudinary from "cloudinary";
import "../../../lib/cloudinary/cloudinary";
import { imageUpload } from "@/lib/cloudinary/imageUpload";
import { createUser } from "@/lib/user/createUser";
import { findUserByEmailOrUsername } from "@/lib/user/findUniqueUser";
import { hashPassword } from "@/lib/user/hashPassword";
import { NextResponse } from "next/server";
import { createUserAccount } from "@/lib/user/createUserAccount";

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

  if (!firstName || !lastName || !username || !email || !password) {
    return NextResponse.json(
      { message: "Required data is missing" },
      { status: 400 }
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
  const profilePic = await imageUpload(
    "https://res.cloudinary.com/dab5zmbvd/image/upload/v1691437826/undraw_monster_artist_2crm_kvoet0.svg",
    "user-profiles"
  );
  const newUser = await createUser(
    firstName,
    lastName,
    username,
    email,
    hashedPassword,
    profilePic,
    location,
    pronouns,
    bio,
    link
  );
  if (newUser) {
    const newAccount = await createUserAccount(
      newUser.id,
      "credentials",
      "credentials",
      newUser.id
    );
    return NextResponse.json({newUser: newUser, newAccount: newAccount }, { status: 200 });
    
  }

}
