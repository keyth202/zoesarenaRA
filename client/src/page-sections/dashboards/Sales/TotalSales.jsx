import { ArrowUpward } from "@mui/icons-material";
import { alpha, Box, Button, Card, useTheme } from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import { H1, H4, H6, Small } from "components/Typography";
import ShoppingBagIcon from "icons/ShoppingBagIcon";
import numeral from "numeral";
import React from "react";
import { useTranslation } from "react-i18next";

const TotalSales = () => {
  const theme = useTheme();
  const {
    t
  } = useTranslation();
  return <Card sx={{
    padding: 3,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}>
      <Box width="100%" textAlign="center">
        <H4 fontWeight={600} mb={3}>
          {t("Total Sales")}
        </H4>
        <Box sx={{
        width: 30,
        height: 30,
        margin: "auto",
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "primary.main"
      }}>
          <ShoppingBagIcon sx={{
          fontSize: 18,
          color: "common.white"
        }} />
        </Box>

        <H1 color="primary.main" my={1}>
          {numeral(26543).format("$0,0")}
        </H1>

        <FlexBox alignItems="center" justifyContent="center">
          <Box sx={{
          width: 20,
          height: 20,
          display: "flex",
          borderRadius: "50%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: alpha(theme.palette.success.main, 0.1)
        }}>
            <ArrowUpward sx={{
            fontSize: 14,
            color: "success.main"
          }} />
          </Box>
          <Small color="success.main" fontWeight={600} ml={0.5}>
            +10.23%
          </Small>
        </FlexBox>

        <H6 color="text.disabled" mt={1} mb={3}>
          {t("Calculated in last 7 days")}
        </H6>

        <Button variant="contained" fullWidth>
          {t("View Full Report")}
        </Button>
      </Box>
    </Card>;
};

export default TotalSales;