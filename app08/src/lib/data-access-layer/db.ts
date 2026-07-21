import { PrismaClient } from "@/generated/prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const createDBClient = () => {
    const databaseUrl = process.env.DATABASE_URL || "file:./dev.db";

    // Pass the config object directly here!
    const adapter = new PrismaLibSql({
        url: databaseUrl,
    });
    return new PrismaClient({ adapter });
}

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const db = globalForPrisma.prisma || createDBClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;