import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const data = await db.contact.findUnique({ where: { id } });

    return data ? NextResponse.json(data, { status: 200 }) :
        NextResponse.json({message:"No such record found"}, { status: 404 });
}

export async function DELETE({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const data = await db.contact.delete({where:{id}})

    return NextResponse.json({}, { status: 204 });
}

