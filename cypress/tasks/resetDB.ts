import prisma from '../../src/lib/prisma'

export default async function resetDB() {
    return prisma?.user.deleteMany({})
}