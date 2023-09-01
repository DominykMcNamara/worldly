import prisma from "../prisma";

export async function createUser(data: User) {
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
  } = data;
  const newUser = await prisma?.user.create({
    data: {
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
    },
  });
  return newUser
}
