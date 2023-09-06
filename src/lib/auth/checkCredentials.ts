const bcrypt = require('bcrypt')
import prisma from "../prisma";


export async function checkCredentials(email: string, password: string) {
   const hashedPassword = await bcrypt.hash(password, 10)
    const user = await prisma?.user.findUnique({
        where: { email: email},
       
    })
    if(user && bcrypt.compare(user.password, hashedPassword)) {
        return user
    }

}