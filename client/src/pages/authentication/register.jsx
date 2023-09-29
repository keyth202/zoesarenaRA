import { Button, Grid, ButtonBase, Divider, Stack, styled } from "@mui/material";
import AuthenticationLayout from "page-sections/authentication/AuthenticationLayout";
import { Small } from "components/Typography";
import AppTextField from "components/input-fields/AppTextField";
import React from "react";
import { NavLink } from "react-router-dom";
import Facebook from "icons/Facebook";
import GoogleIcon from "icons/GoogleIcon";
import Twitter from "icons/Twitter";
const StyledButton = styled(ButtonBase)(({
  theme
}) => ({
  width: "100%",
  padding: 12,
  marginBottom: 16,
  borderRadius: "8px",
  fontWeight: "500",
  border: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down(454)]: {
    width: "100%",
    marginBottom: 8
  }
}));

const Register = () => {
  return <AuthenticationLayout route="/login" routeName="Login" title="Sign Up to Uko" description="Have an account?">
      <form>
        <Stack gap={2} mt={5}>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <AppTextField fullWidth label="First Name" />
            </Grid>

            <Grid item md={6} xs={12}>
              <AppTextField fullWidth label="Last Name" />
            </Grid>

            <Grid item xs={12}>
              <AppTextField fullWidth label="Email" />
            </Grid>

            <Grid item xs={12}>
              <AppTextField fullWidth label="Password" />
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Sign Up
              </Button>

              <Small fontSize={12} color="text.disabled" mt={2}>
                By signing up, I agree to UI Lib{" "}
                <NavLink to="#" style={{
                fontWeight: 600
              }}>
                  Terms of Service & Privacy Policy
                </NavLink>
              </Small>
            </Grid>
          </Grid>
        </Stack>
      </form>

      <Divider sx={{
      marginTop: 4
    }}>
        <Small color="text.disabled" px={1}>
          OR
        </Small>
      </Divider>

      <Stack direction="row" justifyContent="space-between" flexWrap="wrap" my={3}>
        <StyledButton>
          <GoogleIcon sx={{
          marginRight: 1,
          fontSize: "1.2rem"
        }} />
          Signin with Google
        </StyledButton>

        <StyledButton>
          <Facebook sx={{
          color: "#2475EF",
          marginRight: 1,
          fontSize: "1.2rem"
        }} />
          Signin with Facebook
        </StyledButton>

        <StyledButton>
          <Twitter sx={{
          color: "#45ABF7",
          marginRight: 1,
          fontSize: "1.2rem"
        }} />
          Signin with Twitter
        </StyledButton>
      </Stack>
    </AuthenticationLayout>;
};

export default Register;