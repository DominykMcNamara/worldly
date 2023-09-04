import prisma from "../prisma";

export async function findUserByUsername(
  username: string
): Promise<Partial<User> | null | undefined> {
  const user = await prisma?.user.findUnique({
    where: {
      username: username,
    },
  });

  return user;
}

export async function findUserByEmail(email: string):Promise<Partial<User> | null | undefined> {
  const user = await prisma?.user.findUnique({
    where: {
      email: email,
    },
  });
  return user;
}

export async function findUserByEmailOrUsername(email: string, username: string): Promise<Partial<User>| void | null | undefined>{
  const findByUsername = await findUserByUsername(username)
  if (findByUsername) {
     return findByUsername
  }
  const findByEmail = await findUserByEmail(email)
  if (findByEmail) {
    return findByEmail
  }
  
}
