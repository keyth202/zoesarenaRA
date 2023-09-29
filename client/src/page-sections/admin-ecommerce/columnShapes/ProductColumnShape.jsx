import { Edit } from "@mui/icons-material";
import { Box, IconButton, Rating } from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBox from "components/flexbox/FlexBox";
import { H6, Small } from "components/Typography";
import { Fragment, useState } from "react";
import CreateProductModal from "../CreateProductModal";
const ProductColumnShape = [{
  Header: "Product Details",
  accessor: "productDetails",
  minWidth: 250,
  Cell: ({
    row
  }) => {
    const {
      image,
      name,
      company
    } = row.original;
    return <FlexBox alignItems="center">
          <AppAvatar src={image} alt={name} sx={{
        width: 60,
        borderRadius: "10%"
      }} />
          <Box ml={2}>
            <H6 color="text.primary">{name}</H6>
            <Small>{company}</Small>
          </Box>
        </FlexBox>;
  }
}, {
  Header: "Category",
  accessor: "category",
  Cell: ({
    value
  }) => {
    return <Small sx={{
      backgroundColor: "action.hover",
      borderRadius: 10,
      padding: ".2rem 1rem",
      textAlign: "center"
    }}>
          {value}
        </Small>;
  }
}, {
  Header: "Stock",
  accessor: "stock"
}, {
  Header: "SKU",
  accessor: "sku"
}, {
  Header: "Price",
  accessor: "price"
}, {
  Header: "Rate",
  accessor: "rate",
  Cell: ({
    value
  }) => <Box sx={{
    display: "flex",
    alignItems: "center"
  }}>
        <Rating name="read-only" size="small" value={5} readOnly />
        <Box ml={0.5}>({value})</Box>
      </Box>
}, {
  Header: "Action",
  accessor: "action",
  Cell: ({
    row
  }) => {
    const [openModal, setOpenModal] = useState(false);
    return <Fragment>
          <IconButton onClick={() => setOpenModal(true)}>
            <Edit sx={{
          fontSize: 18,
          color: "text.disabled"
        }} />
          </IconButton>

          <CreateProductModal editProduct open={openModal} data={row.original} onClose={() => setOpenModal(false)} />
        </Fragment>;
  }
}];
export default ProductColumnShape;