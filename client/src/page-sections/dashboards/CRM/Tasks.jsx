import { Box, Card, styled, useTheme } from "@mui/material";
import { H1, H5, H6 } from "components/Typography";
import Chart from "react-apexcharts";
import { lightTheme } from "../../../constants";
const chartSeries = [{
  name: "Tasks",
  data: [22, 30, 46, 50, 46, 30, 22]
}];
const chartCategories = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]; // styled components

const StyledChart = styled(Chart)(({
  theme
}) => ({
  minHeight: "100px !important",
  "& .apexcharts-tooltip": {
    boxShadow: "none",
    border: "none !important",
    color: theme.palette.common.white,
    backgroundColor: `${theme.palette.primary.main} !important`
  },
  "& .apexcharts-tooltip-marker": {
    display: "none"
  }
}));

const Tasks = () => {
  const theme = useTheme(); // chart options

  const chartOptions = {
    chart: {
      stacked: true,
      background: "transparent",
      toolbar: {
        show: false
      },
      fontFamily: theme.typography.fontFamily
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
      categories: chartCategories,
      labels: {
        show: false
      }
    },
    yaxis: {
      show: false
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: "30%",
        rangeBarOverlap: false,
        borderRadiusApplication: "end"
      }
    },
    tooltip: {
      x: {
        show: false
      },
      y: {
        formatter: val => `${val}`
      },
      style: {
        fontSize: "13px"
      }
    }
  };
  return <Card sx={{
    height: "100%",
    display: "flex",
    backgroundColor: lightTheme(theme) ? "primary.100" : "background.paper"
  }}>
      <Box padding={3} sx={{
      backgroundColor: lightTheme(theme) ? "#fff" : "background.default"
    }}>
        <H5 mb={6}>Tasks</H5>

        <Box sx={{
        height: "70%",
        display: "flex",
        alignItems: "center",
        color: "primary.main",
        flexDirection: "column",
        justifyContent: "space-between"
      }}>
          <H6>All</H6>
          <H1 fontSize={36}>64</H1>
          <H6>Tasks</H6>
        </Box>
      </Box>

      <Box py={3} flex={1}>
        <StyledChart type="bar" options={chartOptions} series={chartSeries} height={200} width="100%" />
        <H6 textAlign="center" color="primary.main">
          Last 6 months
        </H6>
      </Box>
    </Card>;
};

export default Tasks;