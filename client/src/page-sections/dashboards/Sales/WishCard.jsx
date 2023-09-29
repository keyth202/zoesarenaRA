import { Card, LinearProgress } from "@mui/material";
import { alpha, Box, useTheme } from "@mui/system";
import FlexBox from "components/flexbox/FlexBox";
import { H3, Small, Span } from "components/Typography";
import MedalIcon from "icons/MedalIcon";
import React from "react";
import { useTranslation } from "react-i18next";

const WishCard = () => {
  const theme = useTheme();
  const {
    t
  } = useTranslation();
  return <Card sx={{
    padding: 3,
    height: "100%"
  }}>
      <FlexBox height="inherit" alignItems="center" justifyContent="space-between" sx={{
      [theme.breakpoints.down(630)]: {
        textAlign: "center",
        flexDirection: "column-reverse",
        "& img": {
          marginBottom: 1
        }
      }
    }}>
        <Box>
          <H3 mb={0.5}>{t("Congratulations Watson!")} 🎉</H3>
          <Small color="text.secondary" display="block">
            You have done <Span color="primary.main">76%</Span> more sales
            today. <br /> Check your inventory and update your stocks.
          </Small>
          <FlexBox alignItems="center" sx={{
          height: 65,
          padding: 2,
          marginTop: 2,
          maxWidth: 260,
          borderRadius: "16px",
          backgroundColor: "primary.main"
        }}>
            <FlexBox alignItems="center" width="100%">
              <MedalIcon sx={{
              color: "common.white"
            }} />
              <Box ml={1} width="100%">
                <FlexBox justifyContent="space-between">
                  <Small color="common.white" fontWeight={600}>
                    Star Seller
                  </Small>
                  <Small color="common.white" fontWeight={600}>
                    76%
                  </Small>
                </FlexBox>
                <LinearProgress variant="determinate" value={76} sx={{
                marginTop: 0.3,
                backgroundColor: alpha("#FFF", 0.4),
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "white"
                }
              }} />
              </Box>
            </FlexBox>
          </FlexBox>
        </Box>

        <Box>
          <img src="/static/illustration/sales-dashboard.svg" width="100%" alt="User" />
        </Box>
      </FlexBox>
    </Card>;
};

export default WishCard;