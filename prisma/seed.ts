import { Prisma, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
    for(let i = 0; i < 30; i++){
        await prisma.book.create({
            data: {
                author: faker.book.author(),
                title: faker.book.title(),
                year: faker.number.int({min: 1900, max: 2024}),
                genre: faker.book.genre(),
                pages: faker.number.int({min: 100, max: 600}),
                available: faker.datatype.boolean()
            }
        });
    }
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });