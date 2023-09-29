import { MoreHoriz } from "@mui/icons-material";
import { Box, Button, Card, IconButton } from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import { H1, H5, Paragraph, Tiny } from "components/Typography";
import MapMarkerIcon from "icons/MapMarkerIcon";
import React from "react";
import { NavLink } from "react-router-dom";

const ProfileCard = () => {
  return <Card sx={{
    padding: 3,
    height: "100%"
  }}>
      <FlexRowAlign flexDirection="column">
        <AppAvatar src="/static/avatar/001-man.svg" sx={{
        width: 60,
        height: 60
      }} />

        <FlexRowAlign sx={{
        mt: 1,
        mb: 2,
        width: 50,
        height: 20,
        borderRadius: "4px",
        backgroundColor: "primary.100"
      }}>
          <Tiny color="primary.main">Pro</Tiny>
        </FlexRowAlign>

        <H5>Neelesh Chaudhary</H5>
        <Tiny py={1}>UI / UX Designer</Tiny>

        <FlexBox gap={0.5} alignItems="center">
          <MapMarkerIcon color="primary" />
          <Tiny fontWeight={600} color="primary.main">
            New York, US
          </Tiny>
        </FlexBox>
      </FlexRowAlign>

      <FlexBetween mt={4}>
        <Paragraph>Recent Job Posted</Paragraph>
        <NavLink to="#" style={{
        fontSize: 13
      }}>
          View all
        </NavLink>
      </FlexBetween>

      {["Sr. Android Developer", "UI / UX Designer"].map((item, i) => <FlexBetween mt={2} key={item}>
          <FlexBox alignItems="center" gap={1}>
            <FlexRowAlign sx={{
          width: 55,
          height: 55,
          borderRadius: "4px",
          backgroundColor: "primary.100"
        }}>
              <H1 color="primary.main">{95 + i}</H1>
            </FlexRowAlign>

            <Box>
              <H5>{item}</H5>
              <Tiny mt={0.7}>Total Applications</Tiny>
            </Box>
          </FlexBox>

          <IconButton sx={{
        padding: 0
      }}>
            <MoreHoriz color="disabled" />
          </IconButton>
        </FlexBetween>)}

      <FlexBetween mt={4} gap={3}>
        <Button fullWidth variant="outlined">
          Message
        </Button>
        <Button fullWidth variant="contained">
          Connect
        </Button>
      </FlexBetween>
    </Card>;
};

export default ProfileCard;