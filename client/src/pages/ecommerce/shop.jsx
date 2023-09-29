import { Button, Grid, Stack, styled } from "@mui/material";
import { Box } from "@mui/system";
import AppPagination from "components/AppPagination";
import FlexBetween from "components/flexbox/FlexBetween";
import ChevronDown from "icons/ChevronDown";
import FilterList from "icons/FilterList";
import Shopping from "icons/Shopping";
import Heading from "page-sections/ecommerce/Heading";
import FilterBar from "page-sections/ecommerce/shop/FilterBar";
import ProductCard from "page-sections/ecommerce/shop/ProductCard";
import { useState } from "react";
import SHOP_PRODUCTS from "__fakeData__/shop_products"; //  styled components

const ButtonWrapper = styled(Stack)(({
  theme
}) => ({
  [theme.breakpoints.down(460)]: {
    width: "100%",
    marginTop: 16,
    "& .MuiButton-root": {
      width: "100%"
    }
  }
}));

const Shop = () => {
  const [openFilterBar, setOpenFilterBar] = useState(false);
  return <Box pt={2} pb={4}>
      <FlexBetween flexWrap="wrap" mb={4}>
        <Heading title="E-commerce" Icon={Shopping} />

        <ButtonWrapper direction="row" spacing={2}>
          <Button color="secondary" variant="GreyOutlined" startIcon={<FilterList />} onClick={() => setOpenFilterBar(true)}>
            Filter
          </Button>

          <Button variant="GreyOutlined" endIcon={<ChevronDown />} color="secondary">
            Sort By
          </Button>
        </ButtonWrapper>
      </FlexBetween>

      <FilterBar open={openFilterBar} onClose={() => setOpenFilterBar(false)} />

      <Grid container spacing={3}>
        {SHOP_PRODUCTS.map(product => <Grid item md={4} sm={6} xs={12} key={product.id}>
            <ProductCard product={product} />
          </Grid>)}
      </Grid>

      <Stack alignItems="center" marginTop={8}>
        <AppPagination shape="rounded" count={4} />
      </Stack>
    </Box>;
};

export default Shop;