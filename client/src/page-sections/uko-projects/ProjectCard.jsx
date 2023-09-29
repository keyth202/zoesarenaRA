import { Add, MoreHoriz } from "@mui/icons-material";
import { AvatarGroup, Box, Button, Card, IconButton, LinearProgress, styled } from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import { H3, Paragraph, Small } from "components/Typography";
import { useNavigate } from "react-router-dom";
const StyledAvatarGroup = styled(AvatarGroup)(() => ({
  justifyContent: "flex-end",
  "& .MuiAvatarGroup-avatar": {
    width: 25,
    height: 25,
    fontSize: 12
  }
}));

const ProjectCard = ({
  handleProjectMoreOpen
}) => {
  const navigate = useNavigate();
  return <Card sx={{
    padding: "1rem 1.5rem"
  }}>
      <Box sx={{
      cursor: "pointer"
    }} onClick={() => navigate("/dashboards/project-details")}>
        <FlexBetween>
          <H3>Uko Dashboard</H3>
          <IconButton sx={{
          padding: 0
        }} onClick={handleProjectMoreOpen}>
            <MoreHoriz />
          </IconButton>
        </FlexBetween>

        <FlexBox alignItems="center" marginTop={1}>
          <Small fontWeight={500} color="text.secondary">
            Due on Nov 3
          </Small>
        </FlexBox>

        <Paragraph mt={1} mb={3} fontSize={12} fontWeight={500} lineHeight={1.8} color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim
          veniam
        </Paragraph>
      </Box>

      <FlexBetween py={1}>
        <Paragraph fontWeight={600}>Project Progress</Paragraph>
        <Paragraph fontWeight={600}>32%</Paragraph>
      </FlexBetween>

      <LinearProgress variant="determinate" value={32} />

      <FlexBetween pt={3}>
        <FlexBox alignItems="center">
          <StyledAvatarGroup>
            <AppAvatar alt="Remy Sharp" src="/static/avatar/001-man.svg" />
            <AppAvatar alt="Travis Howard" src="/static/avatar/002-girl.svg" />
            <AppAvatar alt="Cindy Baker" src="/static/avatar/003-boy.svg" />
          </StyledAvatarGroup>
          <Small ml={1}>+ 15 people</Small>
        </FlexBox>

        <Button variant="dashed">
          <Add fontSize="small" sx={{
          color: "grey.600"
        }} />
        </Button>
      </FlexBetween>
    </Card>;
};

export default ProjectCard;