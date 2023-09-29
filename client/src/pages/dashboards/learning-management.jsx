import { Box, Grid, useTheme } from "@mui/material";
import ChartIcon from "icons/ChartIcon";
import CrownIcon from "icons/CrownIcon";
import LeafIcon from "icons/LeafIcon";
import CourseStatus from "page-sections/dashboards/learning-management/CourseStatus";
import Downloads from "page-sections/dashboards/learning-management/Downloads";
import Footer from "page-sections/dashboards/learning-management/Footer";
import LearningCard from "page-sections/dashboards/learning-management/LearningCard";
import Results from "page-sections/dashboards/learning-management/Results";
import StudyTime from "page-sections/dashboards/learning-management/StudyTime";
import UpcomingTask from "page-sections/dashboards/learning-management/UpcomingTask";
import UpgradeCard from "page-sections/dashboards/learning-management/UpgradeCard";
import WelcomeCard from "page-sections/dashboards/learning-management/WelcomeCard";

const LearningManagement = () => {
  const theme = useTheme();
  const learningCardList = [{
    price: 1023,
    Icon: ChartIcon,
    title: "Course in Progress",
    color: theme.palette.info.main
  }, {
    price: 1250,
    title: "Enrolled Courses",
    Icon: LeafIcon,
    color: theme.palette.warning.main
  }, {
    price: 1450,
    Icon: CrownIcon,
    title: "Course Completed",
    color: theme.palette.primary.main
  }];
  return <Box pb={4} pt={2}>
      <Grid container spacing={3}>
        <Grid item md={8} xs={12}>
          <WelcomeCard />
        </Grid>

        <Grid item md={4} xs={12}>
          <UpgradeCard />
        </Grid>

        <Grid item md={4} xs={12}>
          <Results />
        </Grid>

        <Grid item md={4} xs={12}>
          <StudyTime />
        </Grid>

        <Grid item md={4} xs={12}>
          <UpcomingTask />
        </Grid>

        {learningCardList.map((item, key) => <Grid item md={4} xs={12} key={key}>
            <LearningCard card={item} />
          </Grid>)}

        <Grid item md={8} xs={12}>
          <CourseStatus />
        </Grid>

        <Grid item md={4} xs={12}>
          <Downloads />
        </Grid>

        <Grid item xs={12}>
          <Footer imageLink="/static/illustration/footer.svg" />
        </Grid>
      </Grid>
    </Box>;
};

export default LearningManagement;