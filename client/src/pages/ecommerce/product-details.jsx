import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Card, Grid, Tab } from "@mui/material";
import Shopping from "icons/Shopping";
import Heading from "page-sections/ecommerce/Heading";
import DescriptionCard from "page-sections/ecommerce/productDetails/DescriptionCard";
import ProductViewCard from "page-sections/ecommerce/productDetails/ProductViewCard";
import ReviewsCard from "page-sections/ecommerce/productDetails/ReviewsCard";
import { useState } from "react";
import { lightTheme } from "../../constants";

const ProductDetails = () => {
  const [tab, setTab] = useState("1");

  const tabChange = (_, value) => setTab(value);

  return <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Heading title="Product Details" Icon={Shopping} />
        </Grid>

        <Grid item xs={12}>
          <ProductViewCard />
        </Grid>

        <Grid item xs={12}>
          <Card>
            <TabContext value={tab}>
              <Box sx={{
              paddingTop: 1,
              paddingLeft: 2,
              borderBottom: 1,
              borderColor: "divider",
              backgroundColor: theme => lightTheme(theme) ? "grey.200" : "divider",
              "& .MuiTab-root": {
                fontSize: 12,
                fontWeight: 600
              }
            }}>
                <TabList onChange={tabChange}>
                  <Tab disableRipple label="Description" value="1" />
                  <Tab disableRipple label="Reviews" value="2" />
                </TabList>
              </Box>

              <TabPanel value="1">
                <DescriptionCard />
              </TabPanel>

              <TabPanel value="2">
                <ReviewsCard />
              </TabPanel>
            </TabContext>
          </Card>
        </Grid>
      </Grid>
    </Box>;
};

export default ProductDetails;