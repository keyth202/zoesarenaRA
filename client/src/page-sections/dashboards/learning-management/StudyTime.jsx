import { Card, styled, useTheme } from "@mui/material";
import { H5 } from "components/Typography";
import React from "react";
import Chart from "react-apexcharts";
import { useTranslation } from "react-i18next";
import { chartBarOptions } from "../chart-options"; // --------------------------------------------------------------------------

const chartSeries = [{
  name: "React",
  data: [22, 30, 46, 50, 46, 30, 22]
}, {
  name: "Angular",
  data: [36, 40, 56, 75, 56, 40, 36]
}, {
  name: "Javascript",
  data: [50, 60, 70, 90, 70, 60, 50]
}];
const chartCategories = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]; // --------------------------------------------------------------------------
// styled components

export const StyledChart = styled(Chart)(({
  theme
}) => ({
  minHeight: "250px !important",
  "& .apexcharts-tooltip *": {
    fontWeight: 500,
    fontFamily: theme.typography.fontFamily
  },
  "& .apexcharts-tooltip": {
    boxShadow: "none",
    borderRadius: 8,
    alignItems: "center",
    border: `1px solid ${theme.palette.primary[100]}`
  },
  "& .apexcharts-tooltip.apexcharts-theme-light": {
    border: `1px solid ${theme.palette.primary[100]}`
  },
  "& .apexcharts-tooltip-text-y-value": {
    fontWeight: 700
  },
  "& .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center": {
    justifyContent: "space-evenly"
  },
  "& .apexcharts-legend-marker": {
    borderRadius: "50% !important",
    marginRight: 5
  }
}));

const StudyTime = () => {
  const theme = useTheme();
  const {
    t
  } = useTranslation(); // chart options

  const options = chartBarOptions(theme, chartCategories);
  return <Card sx={{
    padding: 3,
    height: "100%"
  }}>
      <H5 mb={1}>{t("Study Time Last Week")}</H5>

      <StyledChart type="bar" options={options} series={chartSeries} height={260} />
    </Card>;
};

export default StudyTime;