import { Add } from "@mui/icons-material";
import { TabContext, TabList } from "@mui/lab";
import { Box, Button, Card, Grid, styled, Tab, useMediaQuery } from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import SearchInput from "components/input-fields/SearchInput";
import MoreOptions from "components/MoreOptions";
import { H2, H6, Small } from "components/Typography";
import CreateProject from "page-sections/uko-projects/CreateProject";
import ProjectCard2 from "page-sections/uko-projects/ProjectCard2";
import { useState } from "react"; // styled component

const TopAreaWrapper = styled(Card)(({
  theme
}) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  flexWrap: "wrap",
  [theme.breakpoints.down(700)]: {
    "& h2": {
      paddingTop: "1rem"
    },
    "& img": {
      display: "none"
    }
  }
}));
const StyledTabList = styled(TabList)(({
  theme
}) => ({
  "& .MuiTabs-flexContainer .MuiButtonBase-root": {
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: "1rem",
    paddingRight: "1rem",
    borderBottom: "2px solid",
    borderColor: theme.palette.divider
  },
  "& .MuiTabs-flexContainer .Mui-selected": {
    color: theme.palette.text.primary
  },
  [theme.breakpoints.down(1064)]: {
    maxWidth: 600
  },
  [theme.breakpoints.between(700, 838)]: {
    maxWidth: 475
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: 320
  }
}));

const UkoProjectV2 = () => {
  const [value, setValue] = useState("all");
  const [openModal, setOpenModal] = useState(false);
  const downSM = useMediaQuery(theme => theme.breakpoints.down("sm"));

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const [projectMoreEl, setProjectMoreEl] = useState(null);

  const handleProjectMoreOpen = event => {
    setProjectMoreEl(event.currentTarget);
  };

  const handleProjectMoreClose = () => setProjectMoreEl(null);

  const projectList = ["blocked", "upcoming", "blocked", "completed", "in-progress", "upcoming", "blocked", "completed", "upcoming"];
  const filterList = projectList.filter(item => value === "all" || item === value);
  return <Box pt={2} pb={4}>
      <TopAreaWrapper>
        <Box>
          <H2 paddingLeft={3} paddingBottom={1}>
            Uko Projects
          </H2>
          <TabContext value={value}>
            <StyledTabList variant="scrollable" onChange={handleChange}>
              {tabItems.map(item => <Tab disableRipple key={item.title} value={item.title.split(" ").join("-").toLowerCase()} label={<FlexBox gap={1} alignItems="center">
                      <H6 fontSize={12}>{item.title}</H6>
                      <Small sx={{
                padding: "0px 10px",
                borderRadius: "10px",
                backgroundColor: "divider"
              }}>
                        {item.amount}
                      </Small>
                    </FlexBox>} />)}
            </StyledTabList>
          </TabContext>
        </Box>
        <img src="/static/illustration/uko-project-v2.svg" alt="UKO Projects" />
      </TopAreaWrapper>

      <Grid container spacing={3} paddingTop={3}>
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

        {filterList.map((item, index) => <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard2 handleMoreClick={handleProjectMoreOpen} />
          </Grid>)}
        <MoreOptions anchorEl={projectMoreEl} handleMoreClose={handleProjectMoreClose} />
      </Grid>
    </Box>;
};

const tabItems = [{
  title: "All",
  amount: 45
}, {
  title: "In Progress",
  amount: 12
}, {
  title: "Upcoming",
  amount: 12
}, {
  title: "Blocked",
  amount: 12
}, {
  title: "Completed",
  amount: 12
}];
export default UkoProjectV2;