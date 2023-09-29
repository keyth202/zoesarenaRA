import { Box, Card, styled, useTheme } from "@mui/material";
import AppSelect from "components/AppSelect";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import { H3, H5, Tiny } from "components/Typography";
import Chart from "react-apexcharts";
import { lightTheme } from "../../../constants"; // --------------------------------------------------------------------------

const chartSeries = [{
  name: "Total",
  data: [10, 30, 85, 49, 55, 35, 60]
}, {
  name: "Average",
  data: [50, 34, 45, 79, 35, 70, 120]
}];
const chartCategories = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]; // --------------------------------------------------------------------------

const StyledChart = styled(Chart)(() => ({
  minHeight: "230px !important",
  "& .apexcharts-xaxistooltip": {
    display: "none !important"
  },
  "& .apexcharts-tooltip": {
    boxShadow: "none"
  }
}));

const RevenueStatistics = () => {
  const theme = useTheme(); // chart options

  const chartOptions = {
    chart: {
      background: "transparent",
      toolbar: {
        show: false
      },
      stacked: false
    },
    colors: [theme.palette.primary.main, theme.palette.grey[300]],
    dataLabels: {
      enabled: false
    },
    grid: {
      show: true,
      borderColor: theme.palette.grey[lightTheme(theme) ? 200 : 900],
      xaxis: {
        lines: {
          show: false
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
        style: {
          fontWeight: 500,
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily
        }
      }
    },
    yaxis: {
      tickAmount: 3,
      max: 150,
      min: 0,
      labels: {
        style: {
          fontWeight: 500,
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily
        }
      }
    },
    tooltip: {
      style: {
        fontSize: "13px",
        fontFamily: theme.typography.fontFamily
      },
      x: {
        show: false
      },
      y: {
        formatter: val => `${val}`
      }
    },
    legend: {
      show: false
    },
    stroke: {
      curve: "smooth"
    }
  };
  return <Card sx={{
    padding: 3,
    height: "100%"
  }}>
      <FlexBetween mb={2}>
        <H5>Revenue Statistics</H5>
        <AppSelect sx={{
        padding: "4px 12px"
      }}>
          <option value="month">Month</option>
          <option value="week">Week</option>
          <option value="day">Day</option>
        </AppSelect>
      </FlexBetween>

      <FlexBox mb={2}>
        <Box>
          <H3>$56,765</H3>
          <Tiny>Total Sale</Tiny>
        </Box>

        <Box marginLeft={4}>
          <H3>$350</H3>
          <Tiny>Average Sale</Tiny>
        </Box>
      </FlexBox>

      <StyledChart options={chartOptions} series={chartSeries} type="line" height={230} />
    </Card>;
};

export default RevenueStatistics;