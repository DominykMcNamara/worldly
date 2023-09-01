const bcrypt = require('bcrypt')

export async function hashPassword(password: string): Promise<String> {
    const hashedPassword = await bcrypt.haSh(password, 10)
    return hashedPassword
}