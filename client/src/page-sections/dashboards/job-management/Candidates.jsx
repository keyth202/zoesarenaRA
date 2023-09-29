import { Card, useTheme } from "@mui/material";
import { H5 } from "components/Typography";
import Chart from "react-apexcharts";

const Candidates = () => {
  const theme = useTheme();
  const chartOptions = {
    colors: [theme.palette.primary.main, theme.palette.primary[100]],
    chart: {
      background: "transparent",
      sparkline: {
        enabled: true
      },
      stacked: true
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "72%"
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            offsetY: 8,
            fontSize: "28px",
            fontWeight: 600,
            formatter: value => `+${value}%`,
            color: theme.palette.primary.main,
            fontFamily: theme.typography.fontFamily
          }
        },
        track: {
          margin: 0,
          strokeWidth: "100%",
          background: theme.palette.primary[100]
        }
      }
    },
    states: {
      normal: {
        filter: {
          type: "none"
        }
      },
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
    },
    labels: ["Male", "Female"],
    theme: {
      mode: theme.palette.mode
    },
    stroke: {
      curve: "smooth",
      lineCap: "round"
    },
    legend: {
      show: true,
      position: "bottom",
      fontSize: "13px",
      fontWeight: 500,
      itemMargin: {
        horizontal: 10
      },
      fontFamily: theme.typography.fontFamily,
      onItemClick: {
        toggleDataSeries: false
      },
      onItemHover: {
        highlightDataSeries: false
      }
    }
  };
  return <Card sx={{
    padding: 3,
    height: "100%"
  }}>
      <H5 mb={2} textAlign="center">
        Candidates by Gender
      </H5>

      <Chart height={240} type="radialBar" options={chartOptions} series={[70]} />
    </Card>;
};

export default Candidates;