import { Box, Button, Card, Divider, Grid, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LinearProgress from "@mui/material/LinearProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBetween from "components/flexbox/FlexBetween";
import Scrollbar from "components/ScrollBar";
import { H5, H6, Tiny } from "components/Typography";
import Delete from "icons/Delete";
import Edit from "icons/Edit";
import { lightTheme } from "../../../constants";
import Alert from "./common/Alert";
import BillingAddressListItem from "./common/BillingAddressListItem";
import NewAddressCard from "./common/NewAddressCard";
import { BodyTableCellV2, HeadTableCellV2 } from "./common/StyledComponents";

const Billing = () => {
  const tableHeadColor = theme => lightTheme(theme) ? "primary.100" : "divider";

  return <Card>
      <H5 padding={3}>Billing</H5>
      <Divider />

      <Box padding={3}>
        <Alert btnText="Add Payment Method" title="We Need Your Attention" description="Your payment was declined. To start using tools, please add Payment Method" />

        <Stack spacing={3} maxWidth={300} py={4}>
          <Box>
            <FlexBetween mb={0.5}>
              <H6 fontSize={12}>Users</H6>
              <H6 fontSize={12} color="primary.main">
                50
              </H6>
            </FlexBetween>

            <LinearProgress variant="determinate" value={50} />
            <Tiny mt={1} fontWeight={500}>
              14 Users remaining until your plan requires update
            </Tiny>
          </Box>

          <Box>
            <H6 fontSize={12}>Active until Dec 09, 2021</H6>
            <Tiny mt={0.5} fontWeight={500}>
              We will send you a notification upon Subscription expiration
            </Tiny>
          </Box>

          <Box>
            <H6 fontSize={12}>$24.99 Per Month</H6>
            <Tiny mt={0.5} fontWeight={500}>
              Extended Pro Package. Up to 100 Agents & 25 Projects
            </Tiny>
          </Box>
        </Stack>

        <Stack direction="row" spacing={3}>
          <Button variant="contained">Upgrade Plan</Button>
          <Button variant="outlined">Cancel</Button>
        </Stack>
      </Box>

      <Box mb={2}>
        <H5 padding={3} pt={2}>
          Payment Methods
        </H5>

        <Scrollbar autoHide={false}>
          <Table sx={{
          minWidth: 700
        }}>
            <TableHead sx={{
            backgroundColor: theme => tableHeadColor(theme)
          }}>
              <TableRow>
                <HeadTableCellV2>Card</HeadTableCellV2>
                <HeadTableCellV2>Name</HeadTableCellV2>
                <HeadTableCellV2>Expire Date</HeadTableCellV2>
                <HeadTableCellV2>Action</HeadTableCellV2>
              </TableRow>
            </TableHead>

            <TableBody>
              {[1, 2, 3].map(item => <TableRow key={item}>
                  <BodyTableCellV2>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <AppAvatar src="/static/paypal.svg" sx={{
                    borderRadius: "4px",
                    height: 27
                  }} />
                      <H6 fontSize={12}>Paypal **** 1679</H6>
                    </Stack>
                  </BodyTableCellV2>

                  <BodyTableCellV2>Marcus Morris</BodyTableCellV2>
                  <BodyTableCellV2>09/24/2022</BodyTableCellV2>

                  <BodyTableCellV2>
                    <IconButton>
                      <Edit sx={{
                    fontSize: 17,
                    color: "text.disabled"
                  }} />
                    </IconButton>

                    <IconButton>
                      <Delete sx={{
                    fontSize: 17,
                    color: "text.disabled"
                  }} />
                    </IconButton>
                  </BodyTableCellV2>
                </TableRow>)}
            </TableBody>
          </Table>
        </Scrollbar>
      </Box>

      <Box padding={3}>
        <H5 mb={3}>Billing Address</H5>

        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <BillingAddressListItem />
          </Grid>
          <Grid item md={6} xs={12}>
            <BillingAddressListItem />
          </Grid>
          <Grid item md={6} xs={12}>
            <BillingAddressListItem />
          </Grid>
          <Grid item md={6} xs={12}>
            <NewAddressCard />
          </Grid>
        </Grid>
      </Box>

      <Box mb={2}>
        <H5 padding={3} pt={2}>
          Billing History
        </H5>

        <Scrollbar autoHide={false}>
          <Table sx={{
          minWidth: 700
        }}>
            <TableHead sx={{
            backgroundColor: theme => tableHeadColor(theme)
          }}>
              <TableRow>
                <HeadTableCellV2>Description</HeadTableCellV2>
                <HeadTableCellV2>Amount</HeadTableCellV2>
                <HeadTableCellV2>Invoice</HeadTableCellV2>
                <HeadTableCellV2>Date</HeadTableCellV2>
                <HeadTableCellV2>Action</HeadTableCellV2>
              </TableRow>
            </TableHead>

            <TableBody>
              {billingHistory.map(item => <TableRow key={item.id}>
                  <BodyTableCellV2>{item.description}</BodyTableCellV2>
                  <BodyTableCellV2>${item.amount}</BodyTableCellV2>
                  <BodyTableCellV2>
                    <Box sx={{
                  color: "white",
                  borderRadius: "4px",
                  padding: "4px 10px",
                  display: "inline-block",
                  backgroundColor: "grey.700"
                }}>
                      {item.invoice}
                    </Box>
                  </BodyTableCellV2>
                  <BodyTableCellV2>{item.date}</BodyTableCellV2>

                  <BodyTableCellV2>
                    <IconButton>
                      <Edit sx={{
                    color: "text.disabled"
                  }} />
                    </IconButton>

                    <IconButton>
                      <Delete sx={{
                    color: "text.disabled"
                  }} />
                    </IconButton>
                  </BodyTableCellV2>
                </TableRow>)}
            </TableBody>
          </Table>
        </Scrollbar>
      </Box>
    </Card>;
};

const billingHistory = [{
  id: 1,
  description: "Invoice for Octavia",
  amount: 890,
  invoice: "PDF",
  date: "Nov 12, 2021"
}, {
  id: 2,
  description: "Invoice for Uko",
  amount: 420,
  invoice: "DOC",
  date: "Nov 10, 2021"
}, {
  id: 3,
  description: "Invoice for Stocky",
  amount: 590,
  invoice: "PDF",
  date: "Nov 24, 2021"
}, {
  id: 4,
  description: "Invoice for Aatrox",
  amount: 750,
  invoice: "DOC",
  date: "Nov 19, 2021"
}, {
  id: 5,
  description: "Invoice for Octavia",
  amount: 890,
  invoice: "PDF",
  date: "Nov 12, 2021"
}];
export default Billing;