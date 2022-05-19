import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker';

const PRISMA = new PrismaClient();

export async function createUserPrisma(data: any) {
    try {

        // console.log(data) data : {user: { name: 'machin', email: 'machine'}}

        /*     const EMAIL = faker.internet.email();
            const NAME = faker.internet.userName(); */

        const user = await PRISMA.user.create({
            data: {
                email: data.user.email,
                name: data.user.name
            },
        })
    }
    catch (error: any) {
        console.log(error.message)
        throw new Error(error)
    }
}
