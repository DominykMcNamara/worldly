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

export async function findByEmail(email: string): Promise<User | null> {
  const user = await prisma.user.findUnique({
    where: {
      username: email,
    },
  });
  return user;
}
