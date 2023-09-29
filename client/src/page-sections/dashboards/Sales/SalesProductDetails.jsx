import { Box, Card, useMediaQuery, useTheme } from "@mui/material";
import { H5 } from "components/Typography";
import Chart from "react-apexcharts";
import { useTranslation } from "react-i18next";

const SalesProductDetails = () => {
  const theme = useTheme();
  const {
    t
  } = useTranslation();
  const downMd = useMediaQuery(theme => theme.breakpoints.down("md"));
  const chartOptions = {
    chart: {
      background: "transparent"
    },
    colors: [theme.palette.primary.main, "#FF9777", "#FF6B93"],
    labels: ["Electronics", "Furniture", "Accessories"],
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
          size: "10%"
        },
        track: {
          margin: downMd ? 10 : 12,
          background: theme.palette.divider
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
  return <Card sx={{
    padding: 3
  }}>
      <H5>{t("Sales Product Details")}</H5>

      <Box sx={{
      paddingTop: 2,
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
      "& .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center": {
        flexDirection: "column",
        "& .apexcharts-legend-series": {
          marginTop: "10px !important"
        },
        "& .apexcharts-legend-text": {
          marginLeft: 1
        }
      },
      [theme.breakpoints.down(425)]: {
        padding: 0
      }
    }}>
        <Chart options={chartOptions} series={[75, 50, 25]} type="radialBar" height={300} />
      </Box>
    </Card>;
};

export default SalesProductDetails;