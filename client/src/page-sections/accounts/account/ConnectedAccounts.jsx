import { Box, Card, Divider, Switch } from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import { H5, H6, Tiny } from "components/Typography";
import React from "react";
import { NavLink } from "react-router-dom";
import { lightTheme } from "../../../constants";
const accountList = [{
  id: 1,
  title: "Facebook",
  body: "Plan properly your workflow",
  image: "/static/social-media/facebook.svg"
}, {
  id: 2,
  title: "Twitter",
  body: "Keep eye on on your Repositories",
  image: "/static/social-media/twitter.svg"
}, {
  id: 3,
  title: "Instagram",
  body: "Keep up with the stories",
  image: "/static/social-media/instagram.svg"
}, {
  id: 4,
  title: "Sound Cloud",
  body: "Playlist to get you by",
  image: "/static/social-media/soundcloud.svg"
}];

const ConnectedAccounts = () => {
  return <Card sx={{
    pb: 2
  }}>
      <Box padding={3}>
        <H5 lineHeight={1.7}>Connected accounts</H5>
        <Tiny lineHeight={1.5} fontWeight={500}>
          Two-factor authentication adds an extra layer of security to your
          account. To log in, in you'll need to provide a 4 digit amazing code.{" "}
          <NavLink to="#">Learn More</NavLink>
        </Tiny>
      </Box>

      <Divider />

      {accountList.map(({
      id,
      title,
      body,
      image
    }) => <SingleItem key={id} title={title} body={body} logo={image} />)}
    </Card>;
}; // props types


function SingleItem({
  title,
  body,
  logo
}) {
  return <FlexBetween sx={{
    borderBottom: 1,
    padding: "1rem 1.5rem",
    borderColor: theme => lightTheme(theme) ? "grey.200" : "divider",
    "&:last-of-type": {
      borderBottom: 0
    }
  }}>
      <FlexBox alignItems="center">
        <AppAvatar src={logo} sx={{
        width: 30,
        height: 30
      }} />

        <Box ml={1}>
          <H6>{title}</H6>
          <Tiny fontWeight={500} mt={0.3}>
            {body}
          </Tiny>
        </Box>
      </FlexBox>

      <Switch defaultChecked />
    </FlexBetween>;
}

export default ConnectedAccounts;