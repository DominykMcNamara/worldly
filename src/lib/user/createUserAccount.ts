import prisma from "../prisma";

export async function createUserAccount(data: Account): Promise<Account> {
  const {
   userId,
   type,
   provider,
   providerAccountId
  } = data;
  const newUserAccount = await prisma?.account.create({
    data: {
        userId,
        type,
        provider,
        providerAccountId
    },
  });
  return newUserAccount
}