import prisma from "../prisma";

export async function createUserAccount(
  userId: string ,
  type: string ,
  provider: string ,
  providerAccountId : string 
  ): Promise<Account | undefined> {
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