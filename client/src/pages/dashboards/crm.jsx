import { Box, Grid, useTheme } from "@mui/material";
import CloudIcon from "icons/CloudIcon";
import DoneIcon from "icons/DoneIcon";
import ErrorIcon from "icons/ErrorIcon";
import HourGlassIcon from "icons/HourGlassIcon";
import MoneyIcon from "icons/MoneyIcon";
import UserAddIcon from "icons/UserAddIcon";
import UserBigIcon from "icons/UserBigIcon";
import CustomerList from "page-sections/dashboards/CRM/customerList";
import LeadCard from "page-sections/dashboards/CRM/LeadCard";
import LeadVSCustomer from "page-sections/dashboards/CRM/LeadVSCustomer";
import LongCard from "page-sections/dashboards/CRM/LongCard";
import Overviews from "page-sections/dashboards/CRM/Overviews";
import ProjectStatus from "page-sections/dashboards/CRM/ProjectStatus";
import Tasks from "page-sections/dashboards/CRM/Tasks";

const CRM = () => {
  const theme = useTheme();
  const list1 = [{
    id: 1,
    amount: 80,
    Icon: MoneyIcon,
    title: "Invoice Payments",
    color: theme.palette.primary.main
  }, {
    id: 2,
    amount: 150,
    Icon: CloudIcon,
    title: "Project In Progress",
    color: theme.palette.info.main
  }, {
    id: 3,
    amount: 22,
    Icon: HourGlassIcon,
    title: "Task Not Finished",
    color: theme.palette.text.disabled
  }];
  const list2 = [{
    id: 1,
    amount: 150,
    Icon: UserAddIcon,
    title: "New Leads",
    color: theme.palette.primary.main
  }, {
    id: 2,
    amount: 200,
    Icon: UserBigIcon,
    title: "Open Leads",
    color: theme.palette.warning.main
  }, {
    id: 3,
    amount: 350,
    Icon: DoneIcon,
    title: "Won Leads",
    color: theme.palette.info.main
  }, {
    id: 4,
    amount: 20,
    Icon: ErrorIcon,
    title: "Lost Leads",
    color: theme.palette.error.main
  }];
  return <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <LeadCard />
        </Grid>

        <Grid item md={8} xs={12}>
          <LongCard list={list1} />
        </Grid>

        <Grid item md={8} xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <LeadVSCustomer />
            </Grid>

            <Grid item xs={12}>
              <LongCard list={list2} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={4} xs={12}>
          <ProjectStatus />
        </Grid>

        <Grid item md={8} xs={12}>
          <Overviews />
        </Grid>

        <Grid item md={4} xs={12}>
          <Tasks />
        </Grid>

        <Grid item xs={12}>
          <CustomerList />
        </Grid>
      </Grid>
    </Box>;
};

export default CRM;