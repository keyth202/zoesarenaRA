import { Box, Card, Grid } from "@mui/material";
import AppTextField from "components/input-fields/AppTextField";
import OrderSummery2 from "page-sections/ecommerce/OrderSummery2";

const CheckoutV2 = () => {
  return <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        <Grid item lg={8} md={7} sm={7} xs={12}>
          <Card sx={{
          padding: 3
        }}>
            <Grid container spacing={3}>
              <Grid item xs={7}>
                <Box py={1}>
                  <AppTextField label="Card Number" fullWidth type="number" />
                </Box>
                <Box py={1}>
                  <AppTextField label="Expiration" fullWidth type="number" />
                </Box>
                <Box py={1}>
                  <AppTextField label="Secure Code" fullWidth type="number" />
                </Box>
              </Grid>
              <Grid item xs={5}>
                <img alt="" src="/static/illustration/payment-page.svg" style={{
                padding: 10,
                display: "block",
                marginLeft: "auto"
              }} />
              </Grid>
            </Grid>
          </Card>

          <Card sx={{
          padding: 3,
          marginTop: 3
        }}>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <AppTextField label="Address" fullWidth />
              </Grid>
              <Grid item md={6} xs={12}>
                <AppTextField label="Town/City" fullWidth />
              </Grid>
              <Grid item md={6} xs={12}>
                <AppTextField label="Mobile Number" fullWidth type="number" />
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item lg={4} md={5} sm={5} xs={12}>
          <OrderSummery2 btnText="Order" />
        </Grid>
      </Grid>
    </Box>;
};

export default CheckoutV2;