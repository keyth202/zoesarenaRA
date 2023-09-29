import { Box, Button, Card, Divider, Grid, Stack, styled, TableRow } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import FlexBetween from "components/flexbox/FlexBetween";
import { H3, H5, H6, Small, Span, Tiny } from "components/Typography";
import DownloadTo from "icons/DownloadTo";
import { Link } from "react-router-dom";
import { lightTheme } from "../../constants"; // styled components

const HeadTableCell = styled(TableCell)(({
  theme
}) => ({
  padding: 0,
  fontSize: 12,
  fontWeight: 600,
  paddingBottom: 5,
  color: theme.palette.text.secondary,
  borderBottom: `1px solid ${lightTheme(theme) ? theme.palette.grey[300] : theme.palette.divider}`,
  "&:last-of-type": {
    textAlign: "right"
  }
}));
const BodyTableCell = styled(TableCell)(() => ({
  fontSize: 12,
  padding: "10px 0",
  "&:last-of-type": {
    textAlign: "right",
    fontWeight: 600
  }
}));
const StyledSmall = styled(Small)(({
  theme,
  type
}) => ({
  fontSize: 12,
  color: "white",
  padding: "4px 10px",
  borderRadius: "4px",
  backgroundColor: type === "success" ? theme.palette.success.main : theme.palette.primary.main
}));

const InvoiceDetails = () => {
  return <Box pt={2} pb={4}>
      <Card sx={{
      padding: "2rem 1rem"
    }}>
        <Grid container spacing={3}>
          <Grid item md={7} xs={12}>
            <FlexBetween>
              <Box width={60}>
                <img src="/static/logo/logo.svg" height="36px" alt="" />
              </Box>

              <Stack textAlign="right">
                <H3>Invoice #</H3>
                <H6 fontSize={12}>3682303</H6>
              </Stack>
            </FlexBetween>

            <FlexBetween my={3}>
              <Stack spacing={0.5}>
                <H6 fontSize={12}>Bill To:</H6>
                <H5>Pixy Krovasky</H5>
                <Tiny fontWeight={500} lineHeight={1.6}>
                  8692 Wild Rose Drive <br /> Livonia, MI 48150
                </Tiny>
              </Stack>

              <Tiny fontWeight={500} lineHeight={1.6} textAlign="right">
                45 Roker Terrace <br /> Latheronwheel <br /> KW5 8NW, London{" "}
                <br /> United Kingdom
              </Tiny>
            </FlexBetween>

            <H6 mb={1} color="text.secondary">
              Issue Date:{" "}
              <Span sx={{
              color: "text.primary",
              fontWeight: 500
            }}>
                03/10/2018
              </Span>
            </H6>
            <H6 color="text.secondary">
              Due date:{" "}
              <Span sx={{
              color: "text.primary",
              fontWeight: 500
            }}>
                07/10/2018
              </Span>
            </H6>

            <Table sx={{
            mt: 3
          }}>
              <TableHead>
                <TableRow>
                  <HeadTableCell>Description</HeadTableCell>
                  <HeadTableCell>Hours</HeadTableCell>
                  <HeadTableCell>Rate</HeadTableCell>
                  <HeadTableCell>Amount</HeadTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <BodyTableCell>Minimal Design</BodyTableCell>
                  <BodyTableCell>80</BodyTableCell>
                  <BodyTableCell>$40.00</BodyTableCell>
                  <BodyTableCell>$3200.00</BodyTableCell>
                </TableRow>

                <TableRow>
                  <BodyTableCell>Logo Design</BodyTableCell>
                  <BodyTableCell>32</BodyTableCell>
                  <BodyTableCell>$50.00</BodyTableCell>
                  <BodyTableCell>$2200.00</BodyTableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Divider />

            <Stack mt={3} spacing={1} maxWidth={200} marginLeft="auto">
              <FlexBetween>
                <Tiny fontWeight={500}>Subtotal:</Tiny>
                <H6>$ 20,600.00</H6>
              </FlexBetween>

              <FlexBetween>
                <Tiny fontWeight={500}>Vat 0%:</Tiny>
                <H6>$ 00.00</H6>
              </FlexBetween>

              <FlexBetween>
                <Tiny fontWeight={500}>Sub total 0%:</Tiny>
                <H6>$ 20,600.00</H6>
              </FlexBetween>

              <FlexBetween>
                <Tiny fontWeight={500}>Total:</Tiny>
                <H6>$ 20,600.00</H6>
              </FlexBetween>
            </Stack>

            <Stack direction="row" justifyContent="flex-end" mt={4} spacing={2}>
              <Button variant="outlined" startIcon={<DownloadTo />}>
                PDF
              </Button>
              <Button variant="contained">Print Invoice</Button>
            </Stack>
          </Grid>

          <Grid item md={5} xs={12}>
            <Box sx={{
            padding: 3,
            height: "100%",
            borderRadius: "4px",
            backgroundColor: "action.selected"
          }}>
              <Stack spacing={2} direction="row" alignItems="center">
                <StyledSmall type="success">Approved</StyledSmall>
                <StyledSmall>Pending Payment</StyledSmall>
              </Stack>

              <Stack mt={3} spacing={2}>
                <H3 fontSize={16}>Payment Details:</H3>

                <Tiny fontWeight={500}>
                  Paypal: <br />
                  <Span color="text.primary" fontSize={13} fontWeight={600}>
                    UI.lib@gmail.com
                  </Span>
                </Tiny>
                <Tiny fontWeight={500}>
                  Account: <br />
                  <Span color="text.primary" fontSize={13} fontWeight={600}>
                    Nl24IBAN34553477847370033 AMB NLANBZTC
                  </Span>
                </Tiny>
                <Tiny fontWeight={500}>
                  Payment Term: <br />
                  <Span color="text.primary" fontSize={13} fontWeight={600}>
                    14 Days . Due in 7 days
                  </Span>
                </Tiny>
              </Stack>

              <Stack mt={3} spacing={2}>
                <H3 fontSize={16}>Payment Overview:</H3>

                <Tiny fontWeight={500}>
                  Project Name: <br />
                  <Span color="text.primary" fontSize={13} fontWeight={600}>
                    UI Lib Dashboard <Link to="#">View Project</Link>
                  </Span>
                </Tiny>
                <Tiny fontWeight={500}>
                  Completed By: <br />
                  <Span color="text.primary" fontSize={13} fontWeight={600}>
                    UI.lib
                  </Span>
                </Tiny>
                <Tiny fontWeight={500}>
                  Time Spent <br />
                  <Span color="text.primary" fontSize={13} fontWeight={600}>
                    120 Hours . 20$ / h rate
                  </Span>
                </Tiny>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>;
};

export default InvoiceDetails;