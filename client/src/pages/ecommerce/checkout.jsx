import { Box, Button, Card, Grid, Stack, styled, Table } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBox from "components/flexbox/FlexBox";
import Scrollbar from "components/ScrollBar";
import { H5, H6, Span, Tiny } from "components/Typography";
import ChevronLeft from "icons/ChevronLeft";
import Clear from "icons/Clear";
import Shopping from "icons/Shopping";
import Heading from "page-sections/ecommerce/Heading";
import OrderSummery from "page-sections/ecommerce/OrderSummery";
import QuantityButtons from "page-sections/ecommerce/QuantityButtons";
import Stepper from "page-sections/ecommerce/Stepper";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // styled components

const HeadTableCell = styled(TableCell)(() => ({
  padding: "10px 16px",
  fontSize: 12,
  "&:first-of-type": {
    paddingLeft: 24
  },
  "&:last-of-type": {
    paddingRight: 24
  }
}));
const BodyTableCell = styled(HeadTableCell)(() => ({
  padding: "24px 16px",
  "&:nth-child(1)": {
    minWidth: 300
  }
}));

const Checkout = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  return <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Heading title="Checkout" Icon={Shopping} />
          <Box mt={3} maxWidth={700}>
            <Stepper stepNo={0} />
          </Box>
        </Grid>

        <Grid item md={8} xs={12}>
          <Card>
            <H5 padding={3}>
              Cart{" "}
              <Span color="text.disabled" fontSize={12} fontWeight={500}>
                (3 item)
              </Span>
            </H5>

            <Scrollbar autoHide={false}>
              <Table sx={{
              minWidth: 500
            }}>
                <TableHead sx={{
                backgroundColor: "action.hover"
              }}>
                  <TableRow>
                    <HeadTableCell>Product</HeadTableCell>
                    <HeadTableCell>Quantity</HeadTableCell>
                    <HeadTableCell>Price</HeadTableCell>
                    <HeadTableCell>Action</HeadTableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {[1, 2, 3].map(item => <TableRow key={item}>
                      <BodyTableCell>
                        <FlexBox gap={1.5} alignItems="center">
                          <AppAvatar src="/static/cart/1.png" sx={{
                        width: 65,
                        height: 65,
                        borderRadius: "10%"
                      }} />
                          <Stack spacing={0.3}>
                            <H6>Nike Air Jordan</H6>
                            <Tiny fontWeight={500}>
                              Color: <Span color="text.primary">White</Span>
                            </Tiny>
                            <Tiny fontWeight={500}>
                              Size: <Span color="text.primary">09</Span>
                            </Tiny>
                          </Stack>
                        </FlexBox>
                      </BodyTableCell>
                      <BodyTableCell>
                        <QuantityButtons quantity={quantity} increment={() => setQuantity(quantity + 1)} decrement={() => setQuantity(quantity - 1)} />
                        <Tiny fontSize={10} mt={1} fontWeight={500}>
                          Available: 12
                        </Tiny>
                      </BodyTableCell>
                      <BodyTableCell>$230</BodyTableCell>
                      <BodyTableCell>
                        <IconButton>
                          <Clear sx={{
                        color: "text.disabled"
                      }} />
                        </IconButton>
                      </BodyTableCell>
                    </TableRow>)}
                </TableBody>
              </Table>
            </Scrollbar>
          </Card>

          <Box mt={2}>
            <Button disableRipple startIcon={<ChevronLeft />} onClick={() => navigate("/dashboards/shop")}>
              Continue Shopping
            </Button>
          </Box>
        </Grid>

        <Grid item md={4} xs={12}>
          <OrderSummery showCoupon buttonText="Check Out Now" handleClick={() => navigate("/dashboards/billing-address")} />
        </Grid>
      </Grid>
    </Box>;
};

export default Checkout;