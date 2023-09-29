import { MoreHoriz } from "@mui/icons-material";
import { AvatarGroup, Card, Grid, IconButton, LinearProgress } from "@mui/material";
import { Box } from "@mui/system";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBetween from "components/flexbox/FlexBetween";
import MoreOptions from "components/MoreOptions";
import { H5, H6, Small } from "components/Typography";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Progress = () => {
  const {
    t
  } = useTranslation();
  const [moreEl, setMoreEl] = useState(null);

  const handleMoreOpen = event => {
    setMoreEl(event.currentTarget);
  };

  const handleMoreClose = () => setMoreEl(null);

  return <Box pt={3} pb={5} px={3}>
      <H5 marginBottom={2}>{t("Progress")}</H5>
      <Grid container spacing={3}>
        {[1, 2].map(item => <Grid item xs={12} sm={6} key={item}>
            <ProgressCard handleMoreOpen={handleMoreOpen} />
          </Grid>)}

        <MoreOptions anchorEl={moreEl} handleMoreClose={handleMoreClose} />
      </Grid>
    </Box>;
};

function ProgressCard({
  handleMoreOpen
}) {
  const {
    t
  } = useTranslation();
  return <Card sx={{
    padding: 2
  }}>
      <FlexBetween>
        <Small sx={{
        borderRadius: 3,
        fontWeight: 500,
        padding: "3px 12px",
        backgroundColor: "primary.100",
        color: "primary.main"
      }}>
          {t("Web Design")}
        </Small>
        <IconButton onClick={handleMoreOpen} sx={{
        padding: 0
      }}>
          <MoreHoriz fontSize="small" />
        </IconButton>
      </FlexBetween>

      <Small display="block" my={2}>
        {t("Membuat konsep ilustrasi untuk halaman homepage dan about us")}
      </Small>

      <H6 textAlign="right" mb={0.5}>
        32%
      </H6>
      <LinearProgress variant="determinate" value={32} />

      <FlexBetween pt="1.5rem">
        <AvatarGroup>
          <AppAvatar alt="Remy Sharp" src="/static/avatar/001-man.svg" />
          <AppAvatar alt="Travis Howard" src="/static/avatar/002-girl.svg" />
        </AvatarGroup>

        <Small sx={{
        fontWeight: 500,
        padding: "5px 15px",
        borderRadius: "20px",
        color: "text.secondary",
        backgroundColor: "action.hover"
      }}>
          3 Weeks Left
        </Small>
      </FlexBetween>
    </Card>;
}

export default Progress;