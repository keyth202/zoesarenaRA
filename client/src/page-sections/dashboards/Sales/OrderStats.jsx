import { Card, styled, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import { H3, H5, Tiny } from "components/Typography";
import CaretUpIcon from "icons/CaretUpIcon";
import Chart from "react-apexcharts";
import { NavLink } from "react-router-dom"; // --------------------------------------------------------------------------

const chartSeries = [{
  name: "Orders",
  data: [10, 30, 49, 55, 30, 70, 100]
}];
const chartCategories = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]; // --------------------------------------------------------------------------

const StyledChart = styled(Chart)(({
  theme
}) => ({
  minHeight: "200px !important",
  "& .apexcharts-xaxistooltip": {
    display: "none !important"
  },
  "& .apexcharts-tooltip": {
    boxShadow: "none",
    borderRadius: "10px"
  },
  "& .apexcharts-tooltip.apexcharts-theme-light": {
    border: `1px solid ${theme.palette.primary[200]}`
  }
}));

const OrderStats = () => {
  const theme = useTheme(); // chart options

  const chartOptions = {
    chart: {
      background: "transparent",
      toolbar: {
        show: false
      },
      stacked: true
    },
    colors: [theme.palette.primary.main, theme.palette.primary[300], theme.palette.primary[100]],
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
    tooltip: {
      style: {
        fontFamily: theme.typography.fontFamily,
        fontSize: "13px"
      },
      x: {
        show: false
      },
      y: {
        formatter: val => `${val}`
      }
    }
  };
  return <Card sx={{
    padding: 3,
    height: "100%"
  }}>
      <FlexBetween>
        <H5>Order Stats</H5>
        <NavLink to="#">View all</NavLink>
      </FlexBetween>

      <FlexBetween mt={2}>
        <Box>
          <H3>125</H3>
          <Tiny>Total Orders</Tiny>
        </Box>

        <FlexBox alignItems="center">
          <CaretUpIcon color="primary" />
          <Tiny color="primary.main">15% increased</Tiny>
        </FlexBox>
      </FlexBetween>

      <StyledChart options={chartOptions} series={chartSeries} type="area" height={250} />
    </Card>;
};

export default OrderStats;