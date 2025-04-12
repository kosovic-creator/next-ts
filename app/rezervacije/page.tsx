
import { add, usersAll } from '@/lib/actions';
import React from 'react';
export default async function Page() {
    console.log('ukupno', add(1, 2));

    try {
        const users = await usersAll();
        console.log('users', users);

        return (
            <>
                <h1>Users</h1>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </>
        );
    } catch (error) {
        console.error('Error fetching users:', error);
        return <p>Error loading users.</p>;
    }
}

