import { AvatarGroup, Grid, styled } from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import { H6 } from "components/Typography";
/// styled component
const StyledAvatarGroup = styled(AvatarGroup)(() => ({
  marginTop: 8,
  justifyContent: "flex-end"
}));

const Teams = () => {
  return <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <H6>Discord Nitro</H6>
        <StyledAvatarGroup>
          <AppAvatar alt="Remy Sharp" src="/static/avatar/001-man.svg" />
          <AppAvatar alt="Travis Howard" src="/static/avatar/002-girl.svg" />
          <AppAvatar alt="Cindy Baker" src="/static/avatar/003-boy.svg" />
          <AppAvatar alt="Cindy Baker" src="/static/avatar/005-man-1.svg" />
          <AppAvatar alt="Cindy Baker" src="/static/avatar/004-woman.svg" />
        </StyledAvatarGroup>
      </Grid>
      <Grid item xs={12} sm={6}>
        <H6>Github</H6>
        <StyledAvatarGroup>
          <AppAvatar alt="Remy Sharp" src="/static/avatar/006-woman-1.svg" />
          <AppAvatar alt="Travis Howard" src="/static/avatar/007-boy-1.svg" />
          <AppAvatar alt="Cindy Baker" src="/static/avatar/008-clown.svg" />
          <AppAvatar alt="Cindy" src="/static/avatar/009-firefighter.svg" />
          <AppAvatar alt="Cindy Baker" src="/static/avatar/011-man-2.svg" />
        </StyledAvatarGroup>
      </Grid>
    </Grid>;
};

export default Teams;