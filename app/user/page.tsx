import React from 'react'
import { usersAll } from "@/lib/actions";
import { PrismaClient } from '@prisma/client';

async function page() {
    // const prisma = new PrismaClient();
    const user = await usersAll();

    return (
        <>

            <h2>Users</h2>
            <ul>
                {user.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
            {/* <h2>Create User</h2>
            <form action={async (formData: FormData) => {
                'use server'
                const name = formData.get('name') as string;
                const email = formData.get('email') as string;
                const userKreate = await prisma.user.create({
                    data: {
                        name,
                        email,
                    },
                });
                console.log(userKreate);
            }
            }>
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <button type="submit">Create User</button>
            </form> */}
        </>

    )

        // const userKreate = await prisma.user.create({
        //     data: {
        //         name: "Default User", // Replace with actual user data
        //         email: "default@example.com", // Replace with actual user data
        //     },
        // });
}

export default page