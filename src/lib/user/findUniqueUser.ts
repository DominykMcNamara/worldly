import { Underdog } from "next/font/google"
import prisma from "../prisma"



export async function findUserByUsername( username: string ) {
    const user = await prisma.user.findUnique({
        where: {
            username: username
        }
    })
    return user
}

export async function findByEmail( email: string ) {
    const user = await prisma.user.findUnique({
        where: {
            username: email
        }
    })
    return user
}