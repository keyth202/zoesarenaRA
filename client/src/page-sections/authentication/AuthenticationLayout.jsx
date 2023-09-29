import { Grid, Stack } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import { H1, Paragraph } from "components/Typography";
import React from "react";
import { Link } from "react-router-dom";
import ContentSlider from "./ContentSlider"; // -------------------------------------------------------

// -------------------------------------------------------
const AuthenticationLayout = props => {
  const {
    children,
    title,
    route,
    routeName,
    description
  } = props;
  const downMd = useMediaQuery(theme => theme.breakpoints.down("md"));
  return <Grid container height="100%">
      <Grid item md={6} xs={12} order={downMd ? 2 : 1}>
        <ContentSlider />
      </Grid>

      <Grid item md={6} xs={12} order={downMd ? 1 : 2}>
        <Stack alignItems="center" justifyContent="center" height="100%">
          <Box textAlign="center" maxWidth={550} width="100%" padding={4}>
            <img src="/static/logo/logo.svg" width={40} alt="Logo" />
            <H1 fontWeight={700} fontSize={24} mt={2}>
              {title}
            </H1>
            <Paragraph color="text.disabled" fontWeight={500}>
              {description} <Link to={route}>{routeName}</Link>
            </Paragraph>

            {children}
          </Box>
        </Stack>
      </Grid>
    </Grid>;
};

export default AuthenticationLayout;