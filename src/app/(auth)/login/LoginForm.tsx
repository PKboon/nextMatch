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

export default function LoginForm() {
  return (
    <Card className="w-2/5 mx-auto h-min rounded-xl">
      <CardContent>
        <Stack
          direction="row"
          className="items-center mb-1 gap-1 justify-center"
        >
          <Lock className="text-rose-600" sx={{ fontSize: "1.25rem" }} />
          <Typography
            variant="h5"
            className="text-rose-600"
            sx={{ fontWeight: "bold" }}
          >
            Login
          </Typography>
        </Stack>
        <Typography className="text-slate-400 text-center">
          Welcome back to NextMatch
        </Typography>

        <form className="mt-3 grid gap-3">
          <TextField
            variant="outlined"
            color="error"
            label="Email"
            type="email"
          />
          <TextField
            variant="outlined"
            color="error"
            label="Password"
            type="password"
          />
          <Button type="submit" variant="contained" color="error" size="large">
            Log in
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
