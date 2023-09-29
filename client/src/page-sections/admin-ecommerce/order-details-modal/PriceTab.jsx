import { Edit } from "@mui/icons-material";
import { styled, Table, TableHead, TableRow } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { Box } from "@mui/system";
import FlexBox from "components/flexbox/FlexBox";
import { H3 } from "components/Typography";
// styled component
const StyledTableCell = styled(TableCell)(({
  theme
}) => ({
  fontSize: 13,
  fontWeight: 600,
  padding: ".7rem 0",
  borderBottom: `1px solid ${theme.palette.divider}`
}));

const PriceTab = () => {
  return <Box padding="1.5rem">
      <FlexBox alignItems="center" justifyContent="space-between">
        <H3>Products</H3>

        <IconButton onClick={() => {}}>
          <Edit sx={{
          fontSize: 18,
          color: "text.disabled"
        }} />
        </IconButton>
      </FlexBox>

      <Box>
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
            {[1, 2, 3, 4].map(item => <TableRow key={item} sx={{
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
      </Box>
    </Box>;
};

export default PriceTab;