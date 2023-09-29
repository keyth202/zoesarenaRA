import { Box, Card, useTheme } from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import { H3, Small, Span } from "components/Typography";
import Chart from "react-apexcharts";
import { useTranslation } from "react-i18next";

const WelcomeCard = () => {
  const theme = useTheme();
  const {
    t
  } = useTranslation();
  const chartOptions = {
    series: [76],
    chart: {
      background: "transparent",
      type: "radialBar",
      offsetY: -10,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -100,
        endAngle: 100,
        track: {
          background: theme.palette.divider,
          strokeWidth: "97%"
        },
        dataLabels: {
          name: {
            fontSize: "13px",
            fontWeight: "500",
            fontFamily: theme.typography.fontFamily,
            color: theme.palette.text.disabled
          },
          value: {
            offsetY: -30,
            fontSize: "14px",
            fontWeight: "600",
            fontFamily: theme.typography.fontFamily
          }
        },
        hollow: {
          size: "60%"
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
    fill: {
      type: "solid",
      colors: [theme.palette.primary.main]
    },
    stroke: {
      lineCap: "round",
      curve: "smooth"
    },
    labels: ["Progress"],
    theme: {
      mode: theme.palette.mode
    }
  };
  return <Card sx={{
    padding: 3,
    height: "100%"
  }}>
      <FlexBox alignItems="center" justifyContent="space-between" sx={{
      [theme.breakpoints.down(630)]: {
        textAlign: "center",
        flexDirection: "column-reverse",
        "& img": {
          marginBottom: 1
        }
      }
    }}>
        <Box>
          <H3 mb={0.5} fontWeight={700}>
            {t("Welcome Back! Watson")}
          </H3>
          <Small color="text.secondary" display="block">
            You have done <Span color="primary.main">76%</Span> more sales
            today. <br /> Check your inventory and update your stocks.
          </Small>
        </Box>

        <Chart height={170} options={chartOptions} series={[74]} width={200} type="radialBar" />
      </FlexBox>
    </Card>;
};

export default WelcomeCard;