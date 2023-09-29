import { Card, useTheme } from "@mui/material";
import { H5 } from "components/Typography";
import Chart from "react-apexcharts";

const ProjectStatus = () => {
  const theme = useTheme();
  const chartOptions = {
    colors: [theme.palette.primary.main, theme.palette.warning.main, theme.palette.info.main, theme.palette.success.main],
    chart: {
      stacked: false,
      background: "transparent",
      sparkline: {
        enabled: true
      },
      fontFamily: theme.typography.fontFamily
    },
    plotOptions: {
      pie: {
        donut: {
          size: "75%"
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
    labels: ["In Progress", "On Hold", "Upcoming", "Completed"],
    theme: {
      mode: theme.palette.mode
    },
    legend: {
      show: true,
      position: "bottom",
      fontSize: "13px",
      fontWeight: 500,
      itemMargin: {
        horizontal: 10
      },
      onItemClick: {
        toggleDataSeries: false
      },
      onItemHover: {
        highlightDataSeries: false
      },
      offsetY: 0
    },
    tooltip: {
      style: {
        fontSize: "13px"
      }
    },
    stroke: {
      width: 0
    }
  };
  return <Card sx={{
    padding: 3,
    height: "100%"
  }}>
      <H5 mb={3} textAlign="center">
        Project Status
      </H5>

      <Chart height={370} type="donut" options={chartOptions} series={[50, 30, 20, 40]} />
    </Card>;
};

export default ProjectStatus;