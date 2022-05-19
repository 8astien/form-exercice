import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker';

const PRISMA = new PrismaClient();

export async function createUserPrisma() {
    try {
        const EMAIL = faker.internet.email();
        const NAME = faker.internet.userName();

        const user = await PRISMA.user.create({
            data: {
                email: EMAIL,
                name: NAME
            },
        })
    }
    catch(error:any) {
        console.log(error)
        throw new Error(error)
    } 
}
