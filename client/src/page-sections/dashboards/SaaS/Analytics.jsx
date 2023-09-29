import { Card, styled, useTheme } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import { H5 } from "components/Typography";
import Chart from "react-apexcharts";
import { useTranslation } from "react-i18next";
import AnalyticsPopover from "./AnalyticsPopover"; // ------------------------------------------------------------------

const StyledChart = styled(Chart)(({
  theme
}) => ({
  paddingTop: 16,
  "& .apexcharts-tooltip": {
    boxShadow: "none",
    "& .apexcharts-active": {
      paddingBottom: 0
    },
    "&.apexcharts-theme-light": {
      border: "none",
      color: "white",
      borderRadius: "8px"
    }
  },
  "& .apexcharts-legend.position-bottom.apexcharts-align-center, .apexcharts-legend.position-top.apexcharts-align-center": {
    justifyContent: "space-evenly"
  },
  [theme.breakpoints.down(425)]: {
    padding: 0
  }
})); // ------------------------------------------------------------------

const data = {
  series: [75, 50, 25],
  categories: ["Sales", "Orders", "Return"]
};

const Analytics = () => {
  const theme = useTheme();
  const {
    t
  } = useTranslation();
  const chartOptions = {
    chart: {
      background: "transparent"
    },
    colors: [theme.palette.primary.main, "#FF9777", "#FF6B93"],
    labels: ["Sales", "Orders", "Return"],
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            show: false
          },
          value: {
            show: false
          }
        },
        hollow: {
          size: "28%"
        },
        track: {
          background: theme.palette.divider,
          margin: 12
        }
      }
    },
    theme: {
      mode: theme.palette.mode
    },
    stroke: {
      lineCap: "round",
      curve: "smooth"
    },
    legend: {
      show: true,
      position: "bottom",
      fontFamily: "inherit",
      fontSize: "13px",
      fontWeight: 500,
      onItemClick: {
        toggleDataSeries: false
      },
      onItemHover: {
        highlightDataSeries: true
      }
    },
    tooltip: {
      enabled: true,
      style: {
        fontFamily: "inherit"
      },
      y: {
        formatter: value => `$${value}`
      }
    },
    states: {
      hover: {
        filter: {
          type: "none"
        }
      },
      active: {
        filter: {
          type: "none"
        }
      }
    }
  };
  const chartSeries = data.series;
  return <Card sx={{
    padding: "2rem",
    height: "100%",
    [theme.breakpoints.down(425)]: {
      padding: "1.5rem"
    }
  }}>
      <FlexBetween>
        <H5>{t("Analytics")}</H5>
        <AnalyticsPopover />
      </FlexBetween>

      <StyledChart options={chartOptions} series={chartSeries} type="radialBar" height={300} />
    </Card>;
};

export default Analytics;