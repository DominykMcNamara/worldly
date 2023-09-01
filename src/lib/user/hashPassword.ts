const bcrypt = require('bcrypt')

export async function hashPassword(password: string): Promise<String> {
    const hashedPassword = await bcrypt.hash(password, 10)
    return hashedPassword
}