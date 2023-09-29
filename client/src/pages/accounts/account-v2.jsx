import { Instagram, NotificationsNone } from "@mui/icons-material";
import { Box, Button, Card, Grid, styled, useTheme } from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import { H3 } from "components/Typography";
import BadgeIcon from "icons/BadgeIcon";
import DevicesIcon from "icons/DevicesIcon";
import DiamondIcon from "icons/DiamondIcon";
import PasswordIcon from "icons/PasswordIcon";
import ProfileIcon from "icons/ProfileIcon";
import SettingIcon from "icons/SettingIcon";
import ShareAccountIcon from "icons/ShareAccount";
import ConnectAccounts from "page-sections/accounts/account-v2/ConnectAccounts";
import Experiences from "page-sections/accounts/account-v2/Experiences";
import Notifications from "page-sections/accounts/account-v2/Notifications";
import Password from "page-sections/accounts/account-v2/Password";
import Preferences from "page-sections/accounts/account-v2/Preferences";
import RecentDevices from "page-sections/accounts/account-v2/RecentDevices";
import Skills from "page-sections/accounts/account-v2/Skills";
import SocialAccounts from "page-sections/accounts/account-v2/SocialAccounts";
import UserInfo from "page-sections/accounts/account-v2/UserInfo";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import convertToSlug from "utils/convertSlug"; // styled component

const StyledButton = styled(Button)(() => ({
  fontSize: 12,
  borderRadius: 0,
  fontWeight: 500,
  position: "relative",
  padding: "0.6rem 1.5rem",
  justifyContent: "flex-start"
}));

const AccountSettings = () => {
  const theme = useTheme();
  const {
    t
  } = useTranslation();
  const [active, setActive] = useState("user-info");
  const style = {
    backgroundColor: theme.palette.mode === "light" ? theme.palette.secondary.light : theme.palette.divider,
    color: theme.palette.primary.main,
    "&::before": {
      width: 4,
      right: 0,
      content: '""',
      height: "100%",
      position: "absolute",
      backgroundColor: theme.palette.primary.main
    }
  };
  return <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        <Grid item md={3} xs={12}>
          <Card sx={{
          padding: "1.5rem 0"
        }}>
            <H3 fontSize={14} mb={1} pl={3}>
              {t("User Profile")}
            </H3>

            <FlexBox flexDirection="column" sx={{
            [theme.breakpoints.between("sm", 960)]: {
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "space-between"
            }
          }}>
              {tabList.map(({
              id,
              name,
              Icon
            }) => <StyledButton key={id} startIcon={<Icon sx={{
              color: "text.secondary"
            }} />} onClick={() => setActive(convertToSlug(name))} sx={active === convertToSlug(name) ? style : {
              "&:hover": style
            }}>
                  {t(name)}
                </StyledButton>)}
            </FlexBox>
          </Card>
        </Grid>

        <Grid item md={9} xs={12}>
          {active === convertToSlug(tabList[0].name) && <UserInfo />}
          {active === convertToSlug(tabList[1].name) && <Experiences />}
          {active === convertToSlug(tabList[2].name) && <Skills />}
          {active === convertToSlug(tabList[3].name) && <Password />}
          {active === convertToSlug(tabList[4].name) && <Preferences />}
          {active === convertToSlug(tabList[5].name) && <ConnectAccounts />}
          {active === convertToSlug(tabList[6].name) && <RecentDevices />}
          {active === convertToSlug(tabList[7].name) && <Notifications />}
          {active === convertToSlug(tabList[8].name) && <SocialAccounts />}
        </Grid>
      </Grid>
    </Box>;
};

const tabList = [{
  id: 1,
  name: "User Info",
  Icon: ProfileIcon
}, {
  id: 2,
  name: "Experiences",
  Icon: BadgeIcon
}, {
  id: 3,
  name: "Skills",
  Icon: DiamondIcon
}, {
  id: 4,
  name: "Password",
  Icon: PasswordIcon
}, {
  id: 5,
  name: "Preferences",
  Icon: SettingIcon
}, {
  id: 6,
  name: "Connected Accounts",
  Icon: ShareAccountIcon
}, {
  id: 7,
  name: "Recent Devices",
  Icon: DevicesIcon
}, {
  id: 8,
  name: "Notifications",
  Icon: NotificationsNone
}, {
  id: 9,
  name: "Social Accounts",
  Icon: Instagram
}];
export default AccountSettings;