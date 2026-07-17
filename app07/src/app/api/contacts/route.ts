
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    const data = await db.contact.findMany();
    return NextResponse.json(data,{status:200});
}

export async function POST(req:NextRequest){
    var record = await req.json();
    
    const data = db.contact.create({
        data : {...record,id:undefined}
    })
    
    return NextResponse.json(data,{status:201});
}

export async function PUT(req:NextRequest){
    var record = await req.json();
    
    const data = db.contact.update({
        where : {id:record.id},
        data : {...record,id:undefined}
    })
    
    return NextResponse.json(data,{status:203});
}

