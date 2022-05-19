import { PrismaClient } from '@prisma/client'
// import { faker } from '@faker-js/faker';

const PRISMA = new PrismaClient();

export async function createUserPrisma(data: any) {
    try {

        // console.log(data) data : {user: { name: 'machin', email: 'machine'}}

        /*     const EMAIL = faker.internet.email();
            const NAME = faker.internet.userName(); */
        console.log(data)
        const user = await PRISMA.user.create({
            data: {
                name: data.user.name,
                email: data.user.email
            },
        })
    }
    catch (error: any) {
        console.log(error.message)
        throw new Error(error)
    }
}
