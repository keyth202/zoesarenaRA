import { Add } from "@mui/icons-material";
import { AvatarGroup, Box, Button, Grid } from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import { H5, H6 } from "components/Typography";
import { useTranslation } from "react-i18next";

const Teams = () => {
  const {
    t
  } = useTranslation();
  return <Box pt={3} pb={5} px={3}>
      <H5 marginBottom={2}>{t("Teams")}</H5>

      <Grid container spacing={3}>
        {["Discord Nitro", "Github", "Stack Over"].map(item => <Grid item xs={12} sm={6} key={item}>
            <H6>{item}</H6>

            <AvatarGroup sx={{
          marginTop: 1,
          justifyContent: "flex-end"
        }}>
              <AppAvatar alt="Remy Sharp" src="/static/avatar/001-man.svg" />
              <AppAvatar alt="Travis" src="/static/avatar/002-girl.svg" />
              <AppAvatar alt="Cindy Baker" src="/static/avatar/003-boy.svg" />
              <AppAvatar alt="Cindy Baker" src="/static/avatar/005-man-1.svg" />
            </AvatarGroup>
          </Grid>)}

        <Grid item xs={12} sm={6}>
          <H6>Create a new team</H6>

          <Button variant="dashed">
            <Add fontSize="small" sx={{
            color: "grey.600"
          }} />
          </Button>
        </Grid>
      </Grid>
    </Box>;
};

export default Teams;