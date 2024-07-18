"use client";
import React from "react";
import { LocalFireDepartmentRounded } from "@mui/icons-material";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import NavLink from "./NavLink";
import Link from "next/link";

const pages = [
  { name: "matches", link: "members" },
  { name: "lists", link: "lists" },
  { name: "messages", link: "messages" },
];

export default function TopNav() {
  return (
    <AppBar
      position="static"
      className="bg-gradient-to-r from-rose-200 to-blue-100"
    >
      <div className="flex justify-between items-center px-14 py-3">
        <Link href="/" className="flex items-center">
          <LocalFireDepartmentRounded
            sx={{ fontSize: "2.25rem" }}
            className="text-rose-600"
          />
          <h1 className="text-black text-3xl font-bold mr-0.5">Next</h1>
          <h1 className="text-rose-700 text-3xl font-bold">Match</h1>
        </Link>

        <Box className="flex gap-6">
          {pages.map((page) => (
            <NavLink key={page.name} page={page} />
          ))}
        </Box>

        <Box className="flex gap-4">
          <Button href="/login" variant="outlined" color="error">
            Login
          </Button>
          <Button href="/register" variant="contained" color="error">
            Register
          </Button>
        </Box>
      </div>
    </AppBar>
  );
}
