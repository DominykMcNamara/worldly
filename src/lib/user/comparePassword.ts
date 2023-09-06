const bcrypt = require('bcrypt')

export async function comparePasword(password: string, passwordToCompare: string): Promise<boolean> {
    const passwordMatch: boolean = await bcrypt.compare(password, passwordToCompare)
    return passwordMatch
}