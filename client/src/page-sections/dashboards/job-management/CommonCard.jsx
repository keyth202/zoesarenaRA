import { TrendingUp } from "@mui/icons-material";
import { alpha, Avatar, Card, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import FlexBox from "components/flexbox/FlexBox";
import { H2, H6, Tiny } from "components/Typography";
import Chart from "react-apexcharts"; // ----------------------------------------------

// ----------------------------------------------
const CommonCard = ({
  card
}) => {
  const theme = useTheme();
  const chartOptions = {
    colors: [card.color],
    chart: {
      background: "transparent"
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "55%"
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            offsetY: 8,
            fontSize: "18px",
            fontWeight: 600,
            formatter: value => `+${value}%`,
            color: card.color,
            fontFamily: theme.typography.fontFamily
          }
        },
        track: {
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
    stroke: {
      curve: "smooth",
      lineCap: "round"
    },
    theme: {
      mode: theme.palette.mode
    }
  };
  return <Card sx={{
    px: 3,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }}>
      <Box>
        <H6 color="text.secondary">{card.title}</H6>
        <H2>{card.amount}</H2>

        <FlexBox gap={1} alignItems="center" mt={1}>
          <Avatar sx={{
          width: 20,
          height: 20,
          backgroundColor: alpha(card.color, 0.1)
        }}>
            <TrendingUp sx={{
            fontSize: 14,
            color: card.color
          }} />
          </Avatar>
          <Tiny>+{card.trend}% Inc</Tiny>
        </FlexBox>
      </Box>

      <Chart width={120} height={150} type="radialBar" options={chartOptions} series={[card.progress]} />
    </Card>;
};

export default CommonCard;