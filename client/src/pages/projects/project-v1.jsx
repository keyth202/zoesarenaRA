import { Add } from "@mui/icons-material";
import { TabContext, TabList } from "@mui/lab";
import { Button, Card, Grid, Tab, useMediaQuery } from "@mui/material";
import { Box, styled } from "@mui/system";
import FlexBox from "components/flexbox/FlexBox";
import SearchInput from "components/input-fields/SearchInput";
import MoreOptions from "components/MoreOptions";
import { H2 } from "components/Typography";
import CreateProject from "page-sections/uko-projects/CreateProject";
import ProjectCard from "page-sections/uko-projects/ProjectCard";
import TabLabel from "page-sections/uko-projects/TabLabel";
import { useState } from "react"; // styled component

const StyledTabList = styled(TabList)(({
  theme
}) => ({
  "& .MuiTabs-flexContainer": {
    justifyContent: "space-between",
    "& .Mui-selected": {
      "& h2, & h5": {
        color: theme.palette.primary.main
      }
    }
  }
}));

const UkoProjectV1 = () => {
  const [value, setValue] = useState("0");
  const [openModal, setOpenModal] = useState(false);
  const [projectMoreEl, setProjectMoreEl] = useState(null);
  const downSM = useMediaQuery(theme => theme.breakpoints.down("sm"));

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const handleProjectMoreClose = () => setProjectMoreEl(null);

  const handleProjectMoreOpen = event => {
    setProjectMoreEl(event.currentTarget);
  };

  const projectList = ["in-progress", "upcoming", "blocked", "projects-total", "in-progress", "upcoming", "blocked", "projects-total", "upcoming"];
  const filterList = projectList.filter(item => value === "0" || item === "upcoming" && value === "1" || item === "blocked" && value === "2" || item === "projects-total" && value === "2");
  return <Box pt={2} pb={4}>
      <TabContext value={value}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Card sx={{
            padding: ".1rem 2rem",
            height: "100%"
          }}>
              <FlexBox height="100%" alignItems="center" justifyContent="space-between">
                <H2>UKo Projects</H2>
              </FlexBox>
            </Card>
          </Grid>

          <Grid item xs={12} md={7}>
            <Card sx={{
            padding: "1.5rem"
          }}>
              <StyledTabList onChange={handleChange} variant="scrollable">
                {tabItems.map((item, index) => <Tab disableRipple key={item.title} value={`${index}`} label={<TabLabel tabTitle={item.title} amount={item.amount} badgeColor={item.badgeColor} />} />)}
              </StyledTabList>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <FlexBox justifyContent="space-between" flexWrap="wrap">
              <SearchInput bordered={false} placeholder="Find Projects" sx={{
              maxWidth: downSM ? "100%" : 270,
              marginBottom: downSM ? 1 : 0
            }} />
              <Button fullWidth={downSM} variant="contained" startIcon={<Add />} onClick={() => setOpenModal(true)} sx={{
              fontSize: 12
            }}>
                Create a project
              </Button>
              <CreateProject open={openModal} setOpen={setOpenModal} />
            </FlexBox>
          </Grid>
        </Grid>

        <Grid container spacing={3} pt={4}>
          {filterList.map((item, index) => <Grid item xs={12} sm={6} lg={4} key={index}>
              <ProjectCard handleProjectMoreOpen={handleProjectMoreOpen} />
            </Grid>)}

          <MoreOptions anchorEl={projectMoreEl} handleMoreClose={handleProjectMoreClose} />
        </Grid>
      </TabContext>
    </Box>;
};

const tabItems = [{
  title: "In Progress",
  amount: 45,
  badgeColor: "primary"
}, {
  title: "Upcoming",
  amount: 3,
  badgeColor: "warning"
}, {
  title: "Blocked",
  amount: 2,
  badgeColor: "error"
}, {
  title: "Projects Total",
  amount: 141,
  badgeColor: "success"
}];
export default UkoProjectV1;