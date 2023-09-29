import { Box, Grid, Stack } from "@mui/material";
import RecentProjects from "page-sections/dashboards/project-management/RecentProjects";
import TeamProgress from "page-sections/dashboards/project-management/TeamProgress";
import TodoList from "page-sections/dashboards/project-management/TodoList";
import TotalProject from "page-sections/dashboards/project-management/TotalProject";
import Footer from "page-sections/dashboards/SaaS/Footer";

const ProjectManagement = () => {
  return <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        <Grid item lg={8} md={7} xs={12}>
          <Stack spacing={3}>
            <RecentProjects />
            <TeamProgress />
          </Stack>
        </Grid>

        <Grid item lg={4} md={5} xs={12}>
          <Stack spacing={3}>
            <TotalProject />
            <TodoList />
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Footer imageLink="/static/illustration/project-management-dashboard.svg" />
        </Grid>
      </Grid>
    </Box>;
};

export default ProjectManagement;