"use client";
import { signOutUser } from "@/app/(auth)/actions/authActions";
import { Avatar, Box, Divider, Menu, MenuItem } from "@mui/material";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {
    user: Session["user"];
};

export default function UserMenu({ user }: Props) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const router = useRouter();

    const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleEditProfileClick = () => {
        handleClose();
        router.push("/members/edit");
    };

    const handleLogOut = async () => {
        handleClose();
        await signOutUser();
    };

    return (
        <>
            <Avatar
                id="user-avatar"
                alt={user?.name || "user avatar"}
                src={user?.image || "/images/user.png"}
                aria-controls={open ? "user-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleAvatarClick}
                className="cursor-pointer border-slate-400 border-2 border-solid"
            />
            <Menu
                id="user-menu"
                className="mt-2"
                aria-labelledby="user-avatar"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
                <div className="pt-4 pb-5 px-4 text-slate-700 font-bold text-lg min-w-40 bg-slate-100 -mt-2">
                    Hello {user?.name}!
                </div>
                <MenuItem onClick={handleEditProfileClick}>
                    Edit profile
                </MenuItem>
                <MenuItem
                    className="text-red-500 hover:bg-red-100"
                    onClick={handleLogOut}
                >
                    Log out
                </MenuItem>
            </Menu>
        </>
    );
}
