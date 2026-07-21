"use server";

import { db } from "./db";
import { AdbUser } from "../models/AdbUser";
import bcrypt from "bcryptjs";

async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10; 
  return await bcrypt.hash(password, saltRounds);
}

export async function getAllUsers() {
    return await db.adbUser.findMany();
}

export async function getUserById(id:string) {
    return await db.adbUser.findUnique({where:{id}});
}

export async function getUserByName(username:string) {
    return await db.adbUser.findUnique({where:{username}});
}

export async function addUser(u: AdbUser) {
    const passwordHash = await hashPassword(u.password);
    await db.adbUser.create({
        data: { ...u, id: undefined,password:passwordHash },
    });    
}

export async function updateUser(u:AdbUser) {    
    await db.adbUser.update({
        where: { id: u.id },
        data: { ...u, id: undefined },
    });    
}

export async function updatePassword(id:string,pwd:string) {
    const passwordHash = await hashPassword(pwd);
    const user = await getUserById(id);
    await db.adbUser.update({
        where: { id },
        data: { ...user, id: undefined,password:passwordHash },
    });    
}

export async function deleteUser(id: string) {
    await db.adbUser.delete({
        where: { id },
    });    
}
