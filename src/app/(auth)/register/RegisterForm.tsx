"use client";
import {
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Person } from "@mui/icons-material";
import React from "react";
import { useForm } from "react-hook-form";
import { RegisterSchema, registerSchema } from "@/lib/schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });

  const onRegisterSubmit = (data: RegisterSchema) => {
    console.log(data);
  };

  return (
    <Card className="w-2/5 mx-auto h-min rounded-xl">
      <CardContent>
        <Stack
          direction="row"
          className="items-center mb-1 gap-1 justify-center"
        >
          <Person className="text-rose-600 text-2xl" />
          <Typography variant="h5" className="text-rose-600 font-bold">
            Register
          </Typography>
        </Stack>
        <Typography className="text-slate-400 text-center">
          Welcome to NextMatch
        </Typography>

        <form
          className="mt-3 grid gap-3"
          onSubmit={handleSubmit(onRegisterSubmit)}
        >
          <TextField
            type="text"
            color="error"
            variant="outlined"
            label="Name"
            defaultValue=""
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
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
            Register
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
