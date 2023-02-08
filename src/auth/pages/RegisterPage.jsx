import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title='Create New Account'>
      <form>
        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="name"
              type="text"
              placeholder="First and last name"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="email"
              type="email"
              placeholder="correo@gmail.com"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="password"
              type="password"
              placeholder="password"
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid container direction="row" justifyContent="end">
          <Typography sx={{ mr: 1 }}>¿Do you have an account?</Typography>
          <Link component={RouterLink} color="inherit" to="/auth/login">
            Login
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};
