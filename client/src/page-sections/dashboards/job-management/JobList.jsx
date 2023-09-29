import { MoreHoriz } from "@mui/icons-material";
import { Card, IconButton, styled, Table, TableRow, useTheme } from "@mui/material";
import AvatarGroup from "@mui/material/AvatarGroup";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import { alpha, Box } from "@mui/system";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBox from "components/flexbox/FlexBox";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import Scrollbar from "components/ScrollBar";
import { H5, Small } from "components/Typography";
// Styled components
const HeadTableCell = styled(TableCell)(() => ({
  fontSize: 13,
  fontWeight: 600,
  paddingBottom: 8,
  borderBottom: 0,
  "&:last-of-type": {
    textAlign: "right"
  }
}));
const BodyTableCell = styled(TableCell)(() => ({
  fontSize: 13,
  fontWeight: 500,
  borderBottom: 0,
  padding: "0.5rem 0",
  paddingLeft: "1rem",
  "&:first-of-type": {
    minWidth: 180
  },
  "&:last-of-type": {
    textAlign: "right"
  },
  "&:nth-of-type(2)": {
    minWidth: 110
  }
}));
const StyledAvatarGroup = styled(AvatarGroup)(({
  theme
}) => ({
  justifyContent: "flex-end",
  "& .MuiAvatarGroup-avatar": {
    width: 25,
    height: 25,
    fontSize: 12,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary[200]
  }
}));

const JobList = () => {
  const theme = useTheme();
  const list = [{
    id: 1,
    date: "01/10/2021",
    posts: "Senior Fullstack Engineer",
    color: theme.palette.primary.main
  }, {
    id: 2,
    date: "01/09/2021",
    posts: "Freelance Java Developer",
    color: theme.palette.info.main
  }, {
    id: 3,
    date: "11/10/2021",
    posts: "Python Developer",
    color: theme.palette.warning.main
  }, {
    id: 4,
    date: "01/10/2021",
    posts: "UI/UX Designer",
    color: theme.palette.error.main
  }];
  return <Card sx={{
    padding: 3,
    height: "100%"
  }}>
      <H5>Job List</H5>

      <Scrollbar autoHide={false}>
        <Table>
          <TableHead sx={{
          borderBottom: "1.5px solid",
          borderColor: "divider"
        }}>
            <TableRow>
              <HeadTableCell>Posts</HeadTableCell>
              <HeadTableCell>Posted At</HeadTableCell>
              <HeadTableCell>Applicants</HeadTableCell>
              <HeadTableCell>Actions</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {list.map(item => <TableRow key={item.id}>
                <BodyTableCell>
                  <FlexBox>
                    <FlexRowAlign sx={{
                  mr: 1,
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  backgroundColor: alpha(item.color, 0.1)
                }}>
                      <Box sx={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    backgroundColor: item.color
                  }} />
                    </FlexRowAlign>
                    <Small>{item.posts}</Small>
                  </FlexBox>
                </BodyTableCell>

                <BodyTableCell>{item.date}</BodyTableCell>

                <BodyTableCell>
                  <StyledAvatarGroup max={4}>
                    <AppAvatar src="/static/avatar/001-man.svg" />
                    <AppAvatar src="/static/avatar/002-girl.svg" />
                    <AppAvatar src="/static/avatar/003-boy.svg" />
                    <AppAvatar src="/static/avatar/003-boy.svg" />
                    <AppAvatar src="/static/avatar/003-boy.svg" />
                  </StyledAvatarGroup>
                </BodyTableCell>

                <BodyTableCell>
                  <IconButton sx={{
                padding: 0
              }}>
                    <MoreHoriz color="disabled" />
                  </IconButton>
                </BodyTableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>;
};

export default JobList;