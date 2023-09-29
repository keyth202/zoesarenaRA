import { Box, Button, Card, Divider } from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import { H5, H6, Tiny } from "components/Typography";
import { lightTheme } from "../../../constants";

const SocialAccounts = () => {
  return <Card sx={{
    pb: 2
  }}>
      <H5 padding={3}>Social Account</H5>
      <Divider />

      {accountList.map(item => <FlexBetween key={item.id} sx={{
      borderBottom: 1,
      padding: "1rem 1.5rem",
      borderColor: theme => lightTheme(theme) ? "grey.200" : "divider",
      "&:last-of-type": {
        borderBottom: 0
      }
    }}>
          <FlexBox alignItems="center">
            <AppAvatar src={item.image} sx={{
          width: 30,
          height: 30
        }} />

            <Box ml={1}>
              <H6>{item.title}</H6>
              <Tiny fontWeight={500} mt={0.3}>
                {item.body}
              </Tiny>
            </Box>
          </FlexBox>

          <Button variant={item.connect ? "contained" : "outlined"}>
            Connect
          </Button>
        </FlexBetween>)}
    </Card>;
};

const accountList = [{
  id: 1,
  title: "Facebook",
  body: "www.facebook.com/ui-lib",
  image: "/static/social-media/facebook.svg",
  connect: false
}, {
  id: 2,
  title: "Twitter",
  body: "www.twitter.com/ui-lib",
  image: "/static/social-media/twitter.svg",
  connect: false
}, {
  id: 3,
  title: "Linkedin",
  body: "www.linkedin.com/ui-lib",
  image: "/static/social-media/linkedin.svg",
  connect: false
}, {
  id: 4,
  title: "Skype",
  body: "www.skype.com/ui-lib",
  image: "/static/social-media/skype.svg",
  connect: true
}];
export default SocialAccounts;