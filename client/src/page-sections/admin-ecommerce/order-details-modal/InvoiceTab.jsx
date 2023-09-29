import { Edit } from "@mui/icons-material";
import { Box, Card, Divider, styled, Table, TableRow } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import Scrollbar from "components/ScrollBar";
import { H3, H5, H6 } from "components/Typography";
// custom styled component
const StyledTableCell = styled(TableCell)(({
  theme
}) => ({
  fontSize: 13,
  fontWeight: 600,
  padding: ".7rem 0",
  borderBottom: `1px solid ${theme.palette.divider}`
}));
const Wrapper = styled(Box)(({
  theme
}) => ({
  minWidth: 700,
  overflow: "auto",
  [theme.breakpoints.down("sm")]: {
    height: 500
  }
}));

const InvoiceTab = () => {
  return <Scrollbar>
      <Wrapper padding={3}>
        <FlexBetween mb={1.5}>
          <H3>Invoice</H3>

          <IconButton onClick={() => {}}>
            <Edit sx={{
            fontSize: 18,
            color: "text.disabled"
          }} />
          </IconButton>
        </FlexBetween>

        <FlexBetween>
          <FlexBox alignItems="flex-end">
            <Card sx={{
            width: 142,
            height: 142,
            overflow: "hidden"
          }}>
              <img src="/static/products/nike.png" width="100%" height="100%" alt="" style={{
              objectFit: "cover"
            }} />
            </Card>

            <Box marginLeft={2}>
              <H5 lineHeight={1.8}>Nike airmax 270</H5>
              <H6 fontWeight={500} color="text.disabled">
                Rave BD
              </H6>
              <H6 fontWeight={500} color="text.disabled">
                UY7234
              </H6>
              <H6 fontWeight={500} color="text.disabled">
                Arizona USA
              </H6>
            </Box>
          </FlexBox>
          <H5>Date: 02.05.2021</H5>
        </FlexBetween>

        <Box marginTop={2}>
          <Table>
            <TableHead>
              <TableRow sx={{
              "& th": {
                color: "text.disabled"
              },
              "& th:last-of-type": {
                textAlign: "right"
              },
              "& th:nth-of-type(3)": {
                textAlign: "center"
              }
            }}>
                <StyledTableCell>Product</StyledTableCell>
                <StyledTableCell>Price</StyledTableCell>
                <StyledTableCell>Quantity</StyledTableCell>
                <StyledTableCell>Total</StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {[1, 2, 3].map(item => <TableRow key={item} sx={{
              "& td:last-of-type": {
                textAlign: "right"
              },
              "& td:nth-of-type(3)": {
                textAlign: "center"
              }
            }}>
                  <StyledTableCell>Nike airmax 270</StyledTableCell>
                  <StyledTableCell>$760</StyledTableCell>
                  <StyledTableCell>15</StyledTableCell>
                  <StyledTableCell>$850</StyledTableCell>
                </TableRow>)}
            </TableBody>
          </Table>

          <Box width={230} marginLeft="auto" paddingY={1.5}>
            <FlexBetween mt={1}>
              <H6 fontWeight={500} color="text.disabled">
                Subtotal
              </H6>
              <H6 fontWeight={500} color="text.disabled">
                $428.00
              </H6>
            </FlexBetween>

            <FlexBetween mt={1}>
              <H6 fontWeight={500} color="text.disabled">
                Discount
              </H6>
              <H6 fontWeight={500} color="text.disabled">
                $428.00
              </H6>
            </FlexBetween>

            <FlexBetween mt={1}>
              <H6 fontWeight={500} color="text.disabled">
                VAT
              </H6>
              <H6 fontWeight={500} color="text.disabled">
                $428.00
              </H6>
            </FlexBetween>

            <Divider sx={{
            paddingTop: 1,
            marginBottom: 1
          }} />

            <FlexBetween>
              <H6>Total</H6>
              <H6>$428.00</H6>
            </FlexBetween>
          </Box>
        </Box>
      </Wrapper>
    </Scrollbar>;
};

export default InvoiceTab;