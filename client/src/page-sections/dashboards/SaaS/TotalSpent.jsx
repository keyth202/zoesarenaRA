import { Card, styled, useTheme } from "@mui/material";
import { H2, H5 } from "components/Typography";
import Chart from "react-apexcharts";
import { useTranslation } from "react-i18next"; // ------------------------------------------------------------------

const StyledChart = styled(Chart)(({
  theme
}) => ({
  "& .apexcharts-tooltip *": {
    fontWeight: 500,
    fontFamily: theme.typography.fontFamily
  },
  "& .apexcharts-tooltip": {
    boxShadow: 0,
    borderRadius: 4,
    alignItems: "center",
    "& .apexcharts-tooltip-text-y-value": {
      color: "primary.main"
    },
    "& .apexcharts-tooltip.apexcharts-theme-light": {
      border: `1px solid ${theme.palette.divider}`
    },
    "& .apexcharts-tooltip-series-group:last-child": {
      paddingBottom: 0
    }
  }
})); // ------------------------------------------------------------------

const data = {
  series: [{
    name: "Spent",
    data: [22, 80, 36, 50, 60, 30, 90, 26, 75, 10, 55, 65]
  }],
  categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
};

const TotalSpent = () => {
  const theme = useTheme();
  const {
    t
  } = useTranslation();
  const chartOptions = {
    chart: {
      background: "transparent",
      toolbar: {
        show: false
      }
    },
    colors: [theme.palette.primary.main],
    dataLabels: {
      enabled: false
    },
    grid: {
      show: false
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
    theme: {
      mode: theme.palette.mode
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      categories: data.categories,
      labels: {
        style: {
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily,
          fontWeight: 500
        }
      }
    },
    yaxis: {
      show: false
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        columnWidth: "60%",
        rangeBarOverlap: false
      }
    },
    tooltip: {
      x: {
        show: false
      },
      y: {
        formatter: val => `$${val}`
      }
    },
    responsive: [{
      breakpoint: 550,
      options: {
        chart: {
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        xaxis: {
          labels: {
            show: false
          }
        },
        yaxis: {
          show: true,
          labels: {
            style: {
              colors: theme.palette.text.disabled,
              fontFamily: theme.typography.fontFamily,
              fontWeight: 500
            }
          }
        }
      }
    }]
  };
  const chartSeries = data.series;
  return <Card sx={{
    paddingX: 4,
    height: "100%",
    paddingBottom: "1.5rem",
    paddingTop: "calc(1.5rem + 15px)",
    [theme.breakpoints.down(425)]: {
      padding: "1.5rem"
    }
  }}>
      <H5>{t("Total Spent")}</H5>
      <H2 color="primary.main">$682.5</H2>

      <StyledChart height={245} options={chartOptions} series={chartSeries} type="bar" />
    </Card>;
};

export default TotalSpent;