import { Box, ButtonBase, Card, styled, useTheme } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import { H5, Small } from "components/Typography";
import { useState } from "react";
import Chart from "react-apexcharts";
import { useTranslation } from "react-i18next"; // chart data

const chartData = [{
  title: "Month",
  data: [{
    name: "Positive",
    data: [32, 80, 36, 40, 60, 50, 90, 66, 75, 40, 55, 65]
  }, {
    name: "Negative",
    data: [-32, -80, -36, -40, -60, -50, -90, -66, -75, -40, -55, -65]
  }]
}, {
  title: "Week",
  data: [{
    name: "Positive",
    data: [42, 50, 66, 70, 40, 50, 90, 66, 85, 50, 55, 15]
  }, {
    name: "Negative",
    data: [-12, -80, -46, -50, -60, -50, -90, -26, -25, -50, -55, -65]
  }]
}, {
  title: "Day",
  data: [{
    name: "Positive",
    data: [22, 80, 36, 50, 60, 30, 90, 26, 75, 10, 55, 65]
  }, {
    name: "Negative",
    data: [-22, -80, -36, -50, -60, -30, -90, -26, -75, -10, -55, -65]
  }]
}];
const chatCategories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; /// styled component

const StyledButton = styled(ButtonBase)(({
  theme,
  active
}) => ({
  fontSize: 12,
  marginLeft: 15,
  fontWeight: 500,
  borderRadius: "8px",
  padding: "5px 10px",
  backgroundColor: active ? theme.palette.primary.main : "transparent",
  color: active ? theme.palette.common.white : theme.palette.text.secondary
}));

const RecentProjects = () => {
  const theme = useTheme();
  const {
    t
  } = useTranslation();
  const [active, setActive] = useState("Day");
  const chartOptions = {
    chart: {
      background: "transparent",
      stacked: true,
      toolbar: {
        show: false
      }
    },
    colors: [theme.palette.primary.main, "#FF6B93"],
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 1
    },
    grid: {
      borderColor: theme.palette.mode === "light" ? theme.palette.primary[100] : theme.palette.divider,
      xaxis: {
        lines: {
          show: false
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
    legend: {
      show: false
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
      categories: chatCategories,
      labels: {
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    yaxis: {
      min: -100,
      max: 100,
      show: true,
      labels: {
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    tooltip: {
      fixed: {
        enabled: true,
        position: "topRight",
        offsetX: 0,
        offsetY: 0
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 7,
        columnWidth: "23%",
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all"
      }
    },
    responsive: [{
      breakpoint: 500,
      options: {
        chart: {
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        }
      }
    }]
  };

  const handleClick = value => setActive(value);

  const chartSeries = chartData.find(item => item.title === active)?.data;
  return <Card sx={{
    padding: 2,
    paddingTop: "calc(1rem + 15px)"
  }}>
      <FlexBetween sx={{
      [theme.breakpoints.down(525)]: {
        flexDirection: "column",
        "& .button-wrapper": {
          marginTop: 2,
          alignSelf: "center"
        }
      }
    }}>
        <Box>
          <H5>{t("Recent Projects")}</H5>
          <Small color="text.secondary">
            {t("More than 50+ new projects running")}
          </Small>
        </Box>

        <Box className="button-wrapper">
          {["Month", "Week", "Day"].map(item => <StyledButton disableRipple key={item} active={active === item ? "active" : ""} onClick={() => handleClick(item)}>
              {item}
            </StyledButton>)}
        </Box>
      </FlexBetween>

      <Box sx={{
      "& .apexcharts-tooltip-marker": {
        backgroundColor: "transparent"
      }
    }}>
        <Chart type="bar" height={400} series={chartSeries} options={chartOptions} />
      </Box>
    </Card>;
};

export default RecentProjects;