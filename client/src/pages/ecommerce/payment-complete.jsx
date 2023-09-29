import { Button, Card, Divider, Stack, useMediaQuery } from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import { H2, H5, Paragraph } from "components/Typography";
import ChevronLeft from "icons/ChevronLeft";
import DownloadTo from "icons/DownloadTo";
import { useNavigate } from "react-router";

const PaymentComplete = () => {
  const down500 = useMediaQuery(theme => theme.breakpoints.down(512));
  const navigate = useNavigate();
  return <Card sx={{
    padding: 4,
    minHeight: 600,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}>
      <Stack maxWidth={400} spacing={2} textAlign="center">
        <img src="/static/illustration/payment-complete.svg" width="100%" alt="Payment Complete" />
        <H2>Thanks for placing order 🎉</H2>
        <H5>#AOSIDY2</H5>
        <Paragraph>
          We will contact you soon <br /> when the shipment arrives
        </Paragraph>
        <Divider />
        <FlexBox gap={2} flexWrap="wrap">
          <Button fullWidth={down500} variant="GreyOutlined" startIcon={<ChevronLeft />} onClick={() => navigate("/dashboards/shop")}>
            Continue Shopping
          </Button>

          <Button color="success" variant="contained" fullWidth={down500} startIcon={<DownloadTo />}>
            Download as PDF
          </Button>
        </FlexBox>
      </Stack>
    </Card>;
};

export default PaymentComplete;