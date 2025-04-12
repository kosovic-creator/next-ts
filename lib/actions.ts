
import { PrismaClient } from "@prisma/client";

export function add(a: number, b: number): number {
    return a + b;
    }


    const prisma = new PrismaClient();

    export async function usersAll() {
        try {
            return await prisma.user.findMany();
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    }


