import { Card, styled, useTheme } from "@mui/material";
import AppSelect from "components/AppSelect";
import FlexBetween from "components/flexbox/FlexBetween";
import { H5 } from "components/Typography";
import Chart from "react-apexcharts"; // --------------------------------------------------------------------------

const chartSeries = [{
  name: "Application",
  data: [10, 30, 5, 49, 55, 30, 70, 80, 100]
}];
const chartCategories = ["12 Am", "1 Am", "2 Am", "3 Am", "4 Am", "5 Am", "6 Am", "7 Am", "8 Am"]; // --------------------------------------------------------------------------

const StyledChart = styled(Chart)(() => ({
  minHeight: "300px !important",
  "& .apexcharts-xaxistooltip": {
    display: "none !important"
  }
}));

const Application = () => {
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
      show: true,
      tickAmount: 4,
      max: 100,
      labels: {
        style: {
          fontWeight: 500,
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily
        },
        formatter: value => `${value}%`
      }
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
        <H5>Application Received Time</H5>
        <AppSelect>
          <option value="sat">Sat</option>
          <option value="sun">Sun</option>
          <option value="mon">Mon</option>
          <option value="tue">Tue</option>
        </AppSelect>
      </FlexBetween>

      <StyledChart options={chartOptions} series={chartSeries} type="area" height={300} />
    </Card>;
};

export default Application;