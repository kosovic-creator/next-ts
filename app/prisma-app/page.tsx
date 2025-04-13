
import { Button } from '@/components/ui/button';
import { add, createUser, usersAll } from '@/lib/actions';

export default async function PrismaApp() {
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

    async function createUser(email: string, name: string) {
        try {
            const users = await createUser(email, name);
            console.log('User created:', users);

        } catch (error) {
            console.error('Error creating user:', error);
        }



    }

   
}
