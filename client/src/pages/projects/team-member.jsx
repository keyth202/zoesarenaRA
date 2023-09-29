import { ChatBubble, Edit, Flag, MoreHoriz } from "@mui/icons-material";
import { Box, Card, Divider, Grid, IconButton, LinearProgress, Menu, MenuItem } from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import { H5, Small } from "components/Typography";
import DeleteIcon from "icons/DeleteIcon";
import DownloadIcon from "icons/DownloadIcon";
import PencilIcon from "icons/PencilIcon";
import ActivityListItem from "page-sections/team-member/ActivityListItem";
import ListItemCard from "page-sections/team-member/ListItemCard";
import Recommended from "page-sections/team-member/Recommended";
import Teams from "page-sections/team-member/Teams";
import TodoItem from "page-sections/team-member/TodoItem";
import UserBio from "page-sections/team-member/UserBio";
import ProjectCard3 from "page-sections/uko-projects/ProjectCard3";
import { Fragment, useState } from "react";

const TeamMember = () => {
  const [todoEl, setTodoEl] = useState(null);
  const [experiencesEl, setExperiencesEl] = useState(null);

  const handleExperienceMoreOpen = event => {
    setExperiencesEl(event.currentTarget);
  };

  const handleExperienceMoreClose = () => setExperiencesEl(null);

  const handleTodoMoreOpen = event => {
    setTodoEl(event.currentTarget);
  };

  const handleTodoMoreClose = () => setTodoEl(null);

  return <Box pt={2} pb={4}>
      <UserBio />

      <Grid container spacing={3} pt={3}>
        <Grid item md={8}>
          <Card>
            <Box padding={3}>
              <FlexBox justifyContent="space-between" alignItems="center" mb={2}>
                <H5>Experiences</H5>
                <IconButton sx={{
                padding: 0
              }} onClick={handleExperienceMoreOpen}>
                  <MoreHoriz />
                </IconButton>
              </FlexBox>

              <Menu anchorEl={experiencesEl} open={Boolean(experiencesEl)} onClose={handleExperienceMoreClose}>
                <MenuItem onClick={handleExperienceMoreClose} sx={{
                "&:hover": {
                  color: "primary.main"
                }
              }}>
                  <DownloadIcon sx={{
                  fontSize: 14,
                  marginRight: 1
                }} />
                  <Small fontWeight={500}>Download</Small>
                </MenuItem>
                <MenuItem onClick={handleExperienceMoreClose} sx={{
                "&:hover": {
                  color: "primary.main"
                }
              }}>
                  <DeleteIcon sx={{
                  fontSize: 14,
                  marginRight: 1
                }} />
                  <Small fontWeight={500}>Remove</Small>
                </MenuItem>
              </Menu>

              <Grid container spacing={3}>
                {experienceList.map(item => <Grid item xs={12} sm={6} key={item.id}>
                    <ListItemCard item={item} />
                  </Grid>)}
              </Grid>
            </Box>

            <Divider />

            <Box padding={3}>
              <H5 mb={2}>Projects</H5>
              <Grid container spacing={3}>
                {projectList.map((item, index) => <Grid item xs={12} sm={6} key={index}>
                    <ProjectCard3 project={item} />
                  </Grid>)}
              </Grid>
            </Box>

            <Divider />

            <Box padding={3}>
              <H5 mb={2}>Skills</H5>
              <Grid container spacing={3}>
                {skills.map(item => <Fragment key={item.id}>
                    <Grid item xs={6}>
                      <ListItemCard item={item} />
                    </Grid>
                    <Grid item xs={6}>
                      <Small display="block" mb={1} textAlign="right">
                        {item.level}
                      </Small>
                      <LinearProgress variant="determinate" value={item.percentage} color={item.percentage >= 33 && item.percentage < 66 ? "warning" : item.percentage >= 66 ? "error" : "primary"} sx={{
                    height: 5,
                    borderRadius: 3
                  }} />
                    </Grid>
                  </Fragment>)}
              </Grid>
            </Box>

            <Divider />

            <Box padding={3}>
              <H5 mb={2}>Teams</H5>
              <Teams />
            </Box>
          </Card>

          <Card sx={{
          p: 3,
          marginTop: 3
        }}>
            <H5 mb={2}>Recommended</H5>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Recommended />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Recommended />
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item md={4} xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={12}>
              <Card sx={{
              padding: 3
            }}>
                <H5 mb={2}>Recent Activity</H5>
                {recentActivity.map(item => <ActivityListItem activity={item} key={item.id} />)}
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              <Card sx={{
              padding: 3,
              height: "100%"
            }}>
                <H5 mb={2}>Project Stack</H5>
                {stacks.map(item => <Box mb={2} key={item.id} sx={{
                "&:last-child": {
                  mb: 0
                }
              }}>
                    <ListItemCard item={item} />
                  </Box>)}
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              <Card sx={{
              padding: 3,
              height: "100%"
            }}>
                <H5 mb={2}>Todo List</H5>
                {todoList.map(item => <Box mb={2} key={item.id} sx={{
                "&:last-child": {
                  mb: 0
                }
              }}>
                    <TodoItem item={item} handleTodoMore={handleTodoMoreOpen} />
                  </Box>)}

                <Menu open={Boolean(todoEl)} onClose={handleTodoMoreClose} anchorEl={todoEl}>
                  <MenuItem onClick={handleTodoMoreClose} sx={{
                  "&:hover": {
                    color: "primary.main"
                  }
                }}>
                    <PencilIcon sx={{
                    fontSize: 14,
                    marginRight: 1
                  }} />
                    <Small fontWeight={500}>Edit</Small>
                  </MenuItem>
                  <MenuItem onClick={handleTodoMoreClose} sx={{
                  "&:hover": {
                    color: "primary.main"
                  }
                }}>
                    <DeleteIcon sx={{
                    fontSize: 14,
                    marginRight: 1
                  }} />
                    <Small fontWeight={500}>Remove</Small>
                  </MenuItem>
                </Menu>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>;
};

const experienceList = [{
  id: 1,
  company: "Discord Nitro",
  image: "/static/brand-logo/nitro.svg",
  position: "Comtec Specialist"
}, {
  id: 2,
  company: "Invision",
  image: "/static/brand-logo/invision.svg",
  position: "Design prototype"
}, {
  id: 3,
  company: "Amazon",
  image: "/static/brand-logo/amazon.svg",
  position: "Delivery"
}, {
  id: 4,
  company: "Github",
  image: "/static/brand-logo/github.svg",
  position: "Developer"
}];
const projectList = [{
  name: "Project Nightfall",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
  thumbnail: "/static/thumbnail/thumbnail-1.png",
  teamMember: ["/static/avatar/010-girl-1.svg", "/static/avatar/011-man-2.svg"]
}, {
  name: "Project Nightfall",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
  thumbnail: "/static/thumbnail/thumbnail-2.png",
  teamMember: ["/static/avatar/013-woman-3.svg", "/static/avatar/012-woman-2.svg"]
}];
const skills = [{
  id: 1,
  company: "Adobe Illustrator",
  image: "/static/tools-logo/illustrator.svg",
  position: "Design Software",
  percentage: 65,
  level: "Intermediate"
}, {
  id: 2,
  company: "Sketch",
  image: "/static/tools-logo/sketch.svg",
  position: "Design Software",
  percentage: 20,
  level: "Advance"
}, {
  id: 3,
  company: "Adobe Photoshop",
  image: "/static/tools-logo/photoshop.svg",
  position: "Design Software",
  percentage: 100,
  level: "Expert"
}];
const recentActivity = [{
  id: 1,
  title: "Karen leave some comments on Konsep Ilustrasi",
  date: "Aug 10",
  Icon: ChatBubble
}, {
  id: 2,
  title: "Karen change project info on Project Homepage",
  date: "Aug 10",
  Icon: Edit
}, {
  id: 3,
  title: "Andrea change the due date of Project Homepage",
  date: "Aug 10",
  Icon: Flag
}];
const stacks = [{
  id: 1,
  company: "HTML5",
  image: "/static/tools-logo/html.svg",
  position: "Code"
}, {
  id: 2,
  company: "VueJS",
  image: "/static/tools-logo/vue.svg",
  position: "Code"
}, {
  id: 3,
  company: "Sass",
  image: "/static/tools-logo/sass.svg",
  position: "Code"
}];
const todoList = [{
  id: 1,
  title: "Create Minimal Logo",
  date: "Due In 2 Days",
  status: "Pending"
}, {
  id: 2,
  title: "Stock Market Exchange",
  date: "Due In 3 Days",
  status: "Processing"
}, {
  id: 3,
  title: "Shopping & Groccery",
  date: "Due In 5 days",
  status: "Pending"
}, {
  id: 4,
  title: "Football Match",
  date: "Due In 1 Day",
  status: "Completed"
}];
export default TeamMember;