import { TabContext, TabList } from "@mui/lab";
import { Button, Tab } from "@mui/material";
import { Box, styled } from "@mui/system";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import IconWrapper from "components/IconWrapper";
import { H5 } from "components/Typography";
import Add from "icons/Add";
import ShoppingBasket from "icons/ShoppingBasket";
import ProductListView from "page-sections/admin-ecommerce/product-list/list-view";
import React, { useState } from "react"; //  styled components

const HeadingWrapper = styled(FlexBetween)(({
  theme
}) => ({
  gap: 8,
  flexWrap: "wrap",
  [theme.breakpoints.down(453)]: {
    "& .MuiButton-root": {
      order: 2
    },
    "& .MuiTabs-root": {
      order: 3,
      width: "100%",
      "& .MuiTabs-flexContainer": {
        justifyContent: "space-between"
      }
    }
  }
}));

const ProductList = () => {
  const [selectTab, setSelectTab] = useState("1");

  const handleChangeTab = (_, newTab) => setSelectTab(newTab);

  return <Box pt={2} pb={4}>
      <TabContext value={selectTab}>
        <HeadingWrapper>
          <FlexBox gap={0.5} alignItems="center">
            <IconWrapper>
              <ShoppingBasket sx={{
              color: "primary.main"
            }} />
            </IconWrapper>
            <H5>Products</H5>
          </FlexBox>

          <TabList onChange={handleChangeTab}>
            <Tab disableRipple label="Active" value="1" />
            <Tab disableRipple label="Draft" value="2" />
            <Tab disableRipple label="Assembly" value="3" />
          </TabList>

          <Button variant="contained" startIcon={<Add />}>
            Add Product
          </Button>
        </HeadingWrapper>

        <ProductListView />
      </TabContext>
    </Box>;
};

export default ProductList;