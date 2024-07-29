"use server";

import { prisma } from "@/lib/schemas/prisma";
import { RegisterSchema, registerSchema } from "@/lib/schemas/registerSchema";
import { ActionResult } from "@/types";
import { User } from "@prisma/client";
import bcrypt from "bcryptjs";

export async function registerUser(
    data: RegisterSchema
): Promise<ActionResult<User>> {
    try {
        const validated = registerSchema.safeParse(data);

        if (!validated.success) {
            return { status: "error", error: validated.error.errors };
        }

        const { name, email, password } = validated.data;

        const hashedPassword = await bcrypt.hash(password, 10);

        const existingEmail = await prisma.user.findUnique({
            where: { email },
        });

        if (existingEmail)
            return { status: "error", error: "User already exists" };

        const user = await prisma.user.create({
            data: {
                name,
                email,
                passwordHash: hashedPassword,
            },
        });

        return { status: "success", data: user };
    } catch (error) {
        console.log(error);
        return { status: "error", error: "Something went wrong" };
    }
}
