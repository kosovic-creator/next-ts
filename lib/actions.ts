
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
    export async function userById(id: number) {
        try {
            return await prisma.user.findUnique({
                where: { id },
            });
        } catch (error) {
            console.error('Error fetching user by ID:', error);
            throw error;
        }
    }
    export async function createUser(name: string, email: string) {
        try {
            return await prisma.user.create({
                data: { name, email},
            });
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    }
    export async function updateUser(id: number, name: string) {
        try {
            return await prisma.user.update({
                where: { id },
                data: { name },
            });
        } catch (error) {
            console.error('Error updating user:', error);
            throw error;
        }
    }
    export async function deleteUser(id: number) {
        try {
            return await prisma.user.delete({
                where: { id },
            });
        } catch (error) {
            console.error('Error deleting user:', error);
            throw error;
        }
    }
    export async function deleteAllUsers() {
        try {
            return await prisma.user.deleteMany();
        } catch (error) {
            console.error('Error deleting all users:', error);
            throw error;
        }
    }
    export async function getUserCount() {
        try {
            return await prisma.user.count();
        } catch (error) {
            console.error('Error getting user count:', error);
            throw error;
        }
    }
    export async function getUserByEmail(email: string) {
        try {
            return await prisma.user.findUnique({
                where: { email },
            });
        } catch (error) {
            console.error('Error fetching user by email:', error);
            throw error;
        }
    }



