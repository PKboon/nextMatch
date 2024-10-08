import React from "react";
import { LocalFireDepartmentRounded } from "@mui/icons-material";
import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import Link from "next/link";
import UserMenu from "./UserMenu";
import NavLink from "./NavLink";
import { auth } from "@/auth";

const pages = [
    { name: "matches", link: "members" },
    { name: "lists", link: "lists" },
    { name: "messages", link: "messages" },
];

export default async function TopNav() {
    const session = await auth();

    return (
        <AppBar
            position="static"
            className="bg-gradient-to-r from-rose-200 to-blue-100"
        >
            <Container className="flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <LocalFireDepartmentRounded className="text-rose-600 text-4xl" />
                    <h1 className="text-black text-3xl font-bold mr-0.5">
                        Next
                    </h1>
                    <h1 className="text-rose-600 text-3xl font-bold">Match</h1>
                </Link>

                <Box className="flex gap-6">
                    {pages.map((page) => (
                        <NavLink key={page.name} page={page} />
                    ))}
                </Box>

                {session?.user ? (
                    <UserMenu user={session.user} />
                ) : (
                    <Box className="flex gap-4">
                        <Button href="/login" variant="outlined" color="error">
                            Login
                        </Button>
                        <Button
                            href="/register"
                            variant="contained"
                            color="error"
                        >
                            Register
                        </Button>
                    </Box>
                )}
            </Container>
        </AppBar>
    );
}
