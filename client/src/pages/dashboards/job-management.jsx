import { Box, Grid, useTheme } from "@mui/material";
import Acquisitions from "page-sections/dashboards/job-management/Acquisitions";
import Application from "page-sections/dashboards/job-management/Application";
import Candidates from "page-sections/dashboards/job-management/Candidates";
import CommonCard from "page-sections/dashboards/job-management/CommonCard";
import JobList from "page-sections/dashboards/job-management/JobList";
import ProfileCard from "page-sections/dashboards/job-management/ProfileCard";
import RecentJob from "page-sections/dashboards/job-management/RecentJob";
import UpgradeCard from "page-sections/dashboards/job-management/UpgradeCard";

const JobManagement = () => {
  const theme = useTheme();
  const cardList = [{
    id: 1,
    trend: 14,
    amount: 272,
    progress: 70,
    title: "Total Applications",
    color: theme.palette.primary.main
  }, {
    id: 2,
    trend: 6,
    amount: 20,
    progress: 50,
    title: "Shortlisted",
    color: theme.palette.info.main
  }];
  return <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        <Grid item md={8} xs={12}>
          <Grid container spacing={3}>
            {cardList.map(item => <Grid item md={6} xs={12} key={item.id}>
                <CommonCard card={item} />
              </Grid>)}

            <Grid item md={6} xs={12}>
              <RecentJob />
            </Grid>

            <Grid item md={6} xs={12}>
              <Acquisitions />
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={4} xs={12}>
          <ProfileCard />
        </Grid>

        <Grid item md={8} xs={12}>
          <JobList />
        </Grid>

        <Grid item md={4} xs={12}>
          <Candidates />
        </Grid>

        <Grid item md={8} xs={12}>
          <Application />
        </Grid>

        <Grid item md={4} xs={12}>
          <UpgradeCard />
        </Grid>
      </Grid>
    </Box>;
};

export default JobManagement;