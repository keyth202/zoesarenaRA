import { Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AdditionalDetails from "./AdditionalDetails";
import Hobbies from "./Hobbies";
import MyConnections from "./MyConnections";
import Portfolio from "./Portfolio";
import Post from "./Post";
import Skills from "./Skills";
import Summery from "./Summery";
import Teams from "./Teams";

const Overview = () => {
  return <Box mt={3}>
      <Grid container spacing={3}>
        <Grid item lg={9} md={8} xs={12}>
          <Stack spacing={3}>
            <Summery />
            <Skills />
            <Teams />
            <Hobbies />
            <Post />
            <Portfolio />
          </Stack>
        </Grid>

        <Grid item lg={3} md={4} xs={12}>
          <Stack spacing={3}>
            <MyConnections />
            <AdditionalDetails />
          </Stack>
        </Grid>
      </Grid>
    </Box>;
};

export default Overview;