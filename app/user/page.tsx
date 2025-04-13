import React from 'react'
import { usersAll } from "@/lib/actions";
import { PrismaClient } from '@prisma/client';

async function page() {
    const prisma = new PrismaClient();
    const user = await usersAll();
    console.log(user);
    return (
        <>
            <h1>User Page</h1>
        </>

    )

        const userKreate = await prisma.user.create({
            data: {
                name: "Default User", // Replace with actual user data
                email: "default@example.com", // Replace with actual user data
            },
        });
}

export default page