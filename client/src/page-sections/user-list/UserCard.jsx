import { Box, Card, Divider, Grid, IconButton, styled } from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import { H4, Small, Tiny } from "components/Typography";
import Facebook from "icons/Facebook";
import Instagram from "icons/Instagram";
import Twitter from "icons/Twitter";
// styled components
const ImageWrapper = styled(Box)(({
  theme
}) => ({
  height: 100,
  position: "relative",
  "&::before": {
    content: '""',
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    position: "absolute",
    opacity: 0.6,
    backgroundColor: theme.palette.primary[100]
  }
}));
const StyledAvatar = styled(AppAvatar)(({
  theme
}) => ({
  zIndex: 1,
  width: 50,
  height: 50,
  bottom: -25,
  position: "absolute",
  left: "50%",
  right: "50%",
  transform: "translateX(-50%)",
  border: "2px solid",
  borderColor: theme.palette.background.paper
}));

const UserCard = ({
  user
}) => {
  return <Card>
      <ImageWrapper>
        <img src={user.cover} width="100%" height="100%" alt={user.name} />

        <StyledAvatar src={user.avatar} alt={user.name} />
      </ImageWrapper>

      <Box sx={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      marginTop: 5
    }}>
        <H4>{user.name}</H4>
        <Tiny color="text.secondary" fontWeight={500}>
          {user.position}
        </Tiny>

        <Box marginTop={2}>
          <IconButton size="small">
            <Facebook sx={{
            width: "18px"
          }}></Facebook>
          </IconButton>
          <IconButton size="small">
            <Twitter sx={{
            width: "18px"
          }}></Twitter>
          </IconButton>
          <IconButton size="small">
            <Instagram sx={{
            width: "18px"
          }}></Instagram>
          </IconButton>
        </Box>
      </Box>

      <Divider sx={{
      my: 2
    }} />

      <Grid container spacing={3} mb={2}>
        <Grid item xs={4} textAlign="center">
          <Small color="text.secondary" fontSize={12}>
            Post
          </Small>
          <Small color="text.secondary" fontWeight={600}>
            {user.post}
          </Small>
        </Grid>
        <Grid item xs={4} textAlign="center">
          <Small color="text.secondary" fontSize={12}>
            Followers
          </Small>
          <Small color="text.secondary" fontWeight={600}>
            {user.follower}
          </Small>
        </Grid>
        <Grid item xs={4} textAlign="center">
          <Small color="text.secondary" fontSize={12}>
            Following
          </Small>
          <Small color="text.secondary" fontWeight={600}>
            {user.following}
          </Small>
        </Grid>
      </Grid>
    </Card>;
};

export default UserCard;