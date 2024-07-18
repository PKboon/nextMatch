"use client";
import {
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Lock } from "@mui/icons-material";
import React from "react";
import { useForm } from "react-hook-form";
import { LoginSchema, loginSchema } from "@/lib/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });

  const onLoginSubmit = (data: LoginSchema) => {
    console.log(data);
  };

  return (
    <Card className="w-2/5 mx-auto h-min rounded-xl">
      <CardContent>
        <Stack
          direction="row"
          className="items-center mb-1 gap-1 justify-center"
        >
          <Lock className="text-rose-600 text-xl" />
          <Typography variant="h5" className="text-rose-600 font-bold">
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
          <Button
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
