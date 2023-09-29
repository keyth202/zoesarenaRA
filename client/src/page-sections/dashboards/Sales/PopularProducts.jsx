import { Avatar, Box, Card, styled, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { H5, Small } from "components/Typography";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import ScrollBar from "simplebar-react";
const commonCSS = {
  minWidth: 120,
  "&:nth-of-type(1)": {
    minWidth: 170
  }
}; // Styled components

const StyledTableHeadCell = styled(TableCell)(({
  theme
}) => ({
  fontSize: 12,
  fontWeight: 600,
  color: theme.palette.text.secondary,
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&:first-of-type": {
    paddingLeft: "1.5rem"
  } //   "&:last-of-type": { paddingRight: 0 },

}));
const StyledTableBodyCell = styled(TableCell)(({
  theme
}) => ({
  //   padding: 0,
  fontSize: 12,
  fontWeight: 500,
  paddingLeft: "1.5rem",
  //   paddingTop: "1rem",
  "&:first-of-type": {
    paddingLeft: "1.5rem"
  },
  //   "&:last-of-type": { paddingRight: 0 },
  [theme.breakpoints.down("sm")]: { ...commonCSS
  },
  [theme.breakpoints.between(960, 1270)]: { ...commonCSS
  }
}));
const StyledTableBody = styled(TableBody)(() => ({
  marginTop: "50px"
}));

const PopularProducts = () => {
  const {
    t
  } = useTranslation();
  return <Card>
      <H5 mx={3} mt={3} mb={1}>
        {t("Popular Products")}
      </H5>

      <ScrollBar>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableHeadCell>Product</StyledTableHeadCell>
              <StyledTableHeadCell>Date</StyledTableHeadCell>
              <StyledTableHeadCell>Category</StyledTableHeadCell>
              <StyledTableHeadCell>Brand</StyledTableHeadCell>
              <StyledTableHeadCell>Price</StyledTableHeadCell>
              <StyledTableHeadCell>Status</StyledTableHeadCell>
            </TableRow>
          </TableHead>

          <StyledTableBody>
            {productList.map((item, index) => <TableRow key={index} sx={{
            backgroundColor: index % 2 === 0 ? "action.hover" : "transparent"
          }}>
                <StyledTableBodyCell>
                  <Box display="flex" alignItems="center">
                    <Avatar src={item.image} alt={item.name} variant="circular" />
                    <Small ml="1rem">{item.name}</Small>
                  </Box>
                </StyledTableBodyCell>
                <StyledTableBodyCell>
                  {format(item.date, "MMM dd, yyyy")}
                </StyledTableBodyCell>
                <StyledTableBodyCell>{item.category}</StyledTableBodyCell>
                <StyledTableBodyCell>{item.brand}</StyledTableBodyCell>
                <StyledTableBodyCell>${item.price}</StyledTableBodyCell>
                <StyledTableBodyCell sx={{
              color: item.status === "Available" ? "success.main" : "error.main"
            }}>
                  {item.status}
                </StyledTableBodyCell>
              </TableRow>)}
          </StyledTableBody>
        </Table>
      </ScrollBar>
    </Card>;
};

const productList = [{
  name: "Nike Air max 170",
  image: "/static/products/shoe-1.png",
  date: new Date(),
  price: 654,
  category: "Shoes",
  status: "Available",
  brand: "Nike"
}, {
  name: "Cactus Plant",
  image: "/static/products/bonsai.png",
  date: new Date(),
  price: 654,
  category: "Tree",
  status: "Available",
  brand: "Bonsai"
}, {
  name: "Minimal Pot",
  image: "/static/products/airbud.png",
  date: new Date(),
  price: 654,
  category: "Accessories",
  status: "Out of Stock",
  brand: "Ikea"
}, {
  name: "Adidas Blaze",
  image: "/static/products/shoe-2.png",
  date: new Date(),
  price: 654,
  category: "Shoes",
  status: "Out of Stock",
  brand: "Adidas"
}];
export default PopularProducts;