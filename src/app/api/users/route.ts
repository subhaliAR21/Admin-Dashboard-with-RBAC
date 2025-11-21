import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      include: {
        userRoles: {
          include: {
            role: true,
          },
        },
      },
    });
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, roleIds } = await request.json();

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        userRoles: {
          create: roleIds?.map((roleId: string) => ({
            roleId,
          })),
        },
      },
      include: {
        userRoles: {
          include: {
            role: true,
          },
        },
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}