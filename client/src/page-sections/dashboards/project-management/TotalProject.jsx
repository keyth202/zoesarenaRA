import { Box, Card, useTheme } from "@mui/material";
import { H5, Small } from "components/Typography";
import React from "react";
import Chart from "react-apexcharts";
import { useTranslation } from "react-i18next";

const TotalProject = () => {
  const theme = useTheme();
  const {
    t
  } = useTranslation();
  const chartOptions = {
    series: [76],
    chart: {
      background: "transparent",
      type: "radialBar",
      offsetY: -5,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -100,
        endAngle: 100,
        track: {
          background: theme.palette.divider,
          strokeWidth: "97%"
        },
        dataLabels: {
          name: {
            fontSize: "14px",
            fontWeight: "600",
            fontFamily: theme.typography.fontFamily,
            color: theme.palette.text.secondary
          },
          value: {
            offsetY: -32,
            fontSize: "28px",
            fontWeight: "600",
            fontFamily: theme.typography.fontFamily
          }
        },
        hollow: {
          size: "75%"
        }
      }
    },
    states: {
      active: {
        filter: {
          type: "none"
        }
      },
      hover: {
        filter: {
          type: "none"
        }
      }
    },
    fill: {
      type: "solid",
      colors: ["#FF9777"]
    },
    stroke: {
      lineCap: "round",
      curve: "smooth"
    },
    labels: ["Progress"],
    theme: {
      mode: theme.palette.mode
    }
  };
  return <Card sx={{
    padding: 2
  }}>
      <H5>{t("Total Project Completion Rate")}</H5>
      <Small color="text.secondary">
        {t("More than 50+ new projects running")}
      </Small>

      <Box sx={{
      mt: 4
    }}>
        <Chart height={300} options={chartOptions} series={[74]} type="radialBar" />
      </Box>
    </Card>;
};

export default TotalProject;