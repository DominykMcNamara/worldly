import prisma from "../prisma";

export async function createUser( firstName:string,
  lastName: string,
  username: string,
  email: string,
  password: string,
  image: string,
  location: string,
  pronouns:string,
  bio: string,
  link: string,): Promise<User | undefined> {
  
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
