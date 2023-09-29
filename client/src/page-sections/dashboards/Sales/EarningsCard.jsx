import { Box, Button, Card, useTheme } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import { H2, H5 } from "components/Typography";
import numeral from "numeral";

const EarningCard = () => {
  const theme = useTheme();
  return <Card sx={{
    padding: 3,
    height: "100%"
  }}>
      <FlexBetween sx={{
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        flexDirection: "column-reverse",
        "& .content-box": {
          marginTop: 5
        }
      }
    }}>
        <Box flex={1} className="content-box">
          <H5 mb={1}>Earnings</H5>
          <H2 mb={2}>${numeral(74438).format("0,0.00")}</H2>

          <Button variant="contained">Download</Button>
        </Box>

        <Box height={120}>
          <img src="/static/illustration/sales-earning.svg" width="100%" alt="Earnings" style={{
          objectFit: "cover",
          objectPosition: "bottom"
        }} />
        </Box>
      </FlexBetween>
    </Card>;
};

export default EarningCard;