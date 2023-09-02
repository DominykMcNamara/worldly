import prisma from "../prisma";

export async function findUserByUsername(
  username: string
): Promise<User | null> {
  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });

  return user;
}

export async function findUserByEmail(email: string): Promise<User | null> {
  const user = await prisma.user.findUnique({
    where: {
      username: email,
    },
  });
  return user;
}

export async function findUserByEmailOrUsername(email: string, username: string): Promise<User | void>{
  const findByUsername = await findUserByUsername(username)
  if (findByUsername) {
     return findByUsername
  }
  const findByEmail = await findUserByEmail(email)
  if (findByEmail) {
    return findByEmail
  }
  
}
