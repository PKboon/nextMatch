"use client";
import {
    Button,
    Card,
    CardContent,
    CircularProgress,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { Lock } from "@mui/icons-material";
import React from "react";
import { useForm } from "react-hook-form";
import { LoginSchema, loginSchema } from "@/lib/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInUser } from "../actions/authActions";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const router = useRouter();

    const {
        register,
        setError,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
    } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        mode: "onTouched",
    });

    const onLoginSubmit = async (data: LoginSchema) => {
        const result = await signInUser(data);
        if (result.status === "success") {
            router.push("/members");
        } else {
            setError("root.serverError", { message: result.error as string });
        }
    };

    return (
        <Card className="w-2/5 mx-auto h-min rounded-xl">
            <CardContent>
                <Stack
                    direction="row"
                    className="items-center mb-1 gap-1 justify-center"
                >
                    <Lock className="text-rose-600 text-xl" />
                    <Typography
                        variant="h5"
                        className="text-rose-600 font-bold"
                    >
                        Login
                    </Typography>
                </Stack>
                <Typography className="text-slate-400 text-center">
                    Welcome back to NextMatch
                </Typography>

                <form
                    className="mt-3 grid gap-3"
                    onSubmit={handleSubmit(onLoginSubmit)}
                >
                    <TextField
                        type="email"
                        color="error"
                        variant="outlined"
                        label="Email"
                        defaultValue=""
                        {...register("email")}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                    <TextField
                        type="password"
                        color="error"
                        variant="outlined"
                        label="Password"
                        defaultValue=""
                        {...register("password")}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                    {errors.root?.serverError && (
                        <p className="text-red-500 text-sm">
                            {errors.root.serverError.message}
                        </p>
                    )}
                    <Button
                        startIcon={
                            isSubmitting && (
                                <CircularProgress
                                    className="text-white opacity-75"
                                    style={{
                                        width: "1.25rem",
                                        height: "1.25rem",
                                    }}
                                />
                            )
                        }
                        type="submit"
                        color="error"
                        variant="contained"
                        size="large"
                        disabled={!isValid}
                    >
                        Log in
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
