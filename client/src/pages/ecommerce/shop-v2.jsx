import { Add, Favorite } from "@mui/icons-material";
import { Box, Button, ButtonBase, Grid, IconButton, Stack, styled } from "@mui/material";
import AppModal from "components/AppModal";
import FlexBetween from "components/flexbox/FlexBetween";
import SearchInput from "components/input-fields/SearchInput";
import { H3, H6 } from "components/Typography";
import { StyledPagination } from "page-sections/data-table/dataTableV2/styledComponents";
import ModalAccordion from "page-sections/ecommerce/ModalAccordion";
import ProductCard from "page-sections/ecommerce/ProductCard";
import SearchFilter from "page-sections/ecommerce/SearchFilter";
import { CarouselProvider, Dot, Slide, Slider } from "pure-react-carousel";
import { useEffect, useState } from "react";
import { searchByName } from "utils/utils"; // styled components

const StyledAppModal = styled(AppModal)(({
  theme
}) => ({
  maxWidth: 700,
  minWidth: 300,
  outline: "none",
  [theme.breakpoints.down("sm")]: {
    maxHeight: 400,
    overflow: "auto"
  }
}));
const CustomButton = styled(ButtonBase)(({
  active,
  theme
}) => ({
  fontSize: 13,
  border: "none",
  fontWeight: 600,
  color: active === "true" ? theme.palette.primary.main : "inherit"
}));
const CustomDot = styled(Dot)(() => ({
  width: 80,
  height: 70,
  padding: 0,
  border: "none",
  overflow: "hidden"
}));

const ShopV2 = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activeSize, setActiveSize] = useState("Small"); // search input

  const [searchValue, setSearchValue] = useState("");
  const [filteredItem, setFilteredItem] = useState(productList);
  useEffect(() => {
    const result = searchByName(productList, searchValue);
    setFilteredItem(result);
  }, [searchValue]);
  return <Box pt={2} pb={4}>
      <SearchInput bordered={false} placeholder="Find Products" onChange={e => setSearchValue(e.target.value)} />

      <Box marginTop={3}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={4} xs={12}>
            <SearchFilter />
          </Grid>
          <Grid item lg={9} sm={8} xs={12}>
            <Grid container spacing={3}>
              {filteredItem.map(item => <Grid item lg={4} md={6} xs={12} key={item.id}>
                  <ProductCard product={item} handleClick={() => setOpenModal(true)} />
                </Grid>)}
            </Grid>

            <Stack alignItems="center" marginTop={4}>
              <StyledPagination count={4} shape="rounded" //   onChange={handleChange}
            />
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <StyledAppModal open={openModal} handleClose={() => setOpenModal(false)}>
        <Grid container spacing={3}>
          <Grid item sm={5} xs={12}>
            <Box sx={{
            "& .carousel .carousel__dot--selected": {
              border: theme => `2px solid ${theme.palette.primary.main}`
            }
          }}>
              <CarouselProvider totalSlides={3} naturalSlideWidth={100} naturalSlideHeight={115}>
                <Slider style={{
                marginBottom: 10
              }}>
                  {[0, 1, 2].map(item => <Slide index={item} key={item}>
                      <img alt="" width="100%" height="100%" src="/static/products/airbud-2.png" style={{
                    objectFit: "cover"
                  }} />
                    </Slide>)}
                </Slider>

                <FlexBetween>
                  {[0, 1, 2].map(item => <CustomDot slide={item} key={item}>
                      <img alt="" width="100%" height="100%" src="/static/products/airbud-2.png" style={{
                    objectFit: "cover"
                  }} />
                    </CustomDot>)}
                </FlexBetween>
              </CarouselProvider>
            </Box>
          </Grid>

          <Grid item sm={7} xs={12}>
            <H3 mb={0.5}>Lamp Light</H3>
            <H6 fontWeight={500} color="text.disabled">
              Built for natural motion, the flex and motion
            </H6>

            <FlexBetween width={200} marginTop={2}>
              <H6>Sizes:</H6>
              {["Small", "Medium", "Big"].map(item => <CustomButton disableRipple key={item} onClick={() => setActiveSize(item)} active={(activeSize === item).toString()}>
                  {item}
                </CustomButton>)}
            </FlexBetween>

            <H3 fontWeight={700} marginTop={2}>
              $215
            </H3>

            <Box mt={1}>
              <Button variant="contained" size="small" endIcon={<Add />}>
                Add To Cart
              </Button>
              <IconButton sx={{
              marginLeft: 1.5,
              backgroundColor: "grey.100"
            }}>
                <Favorite sx={{
                color: "text.disabled"
              }} />
              </IconButton>
            </Box>

            <Box marginTop={3}>
              <ModalAccordion />
            </Box>
          </Grid>
        </Grid>
      </StyledAppModal>
    </Box>;
};

const productList = [{
  id: 1,
  name: "Nike airmax 170",
  description: "Rave BD",
  price: 215,
  rating: 4.5,
  image: "/static/products/shoe-8.png"
}, {
  id: 2,
  name: "Nike Off white",
  description: "Sneaker Pimps",
  price: 170,
  rating: 4.5,
  image: "/static/products/shoe-5.png"
}, {
  id: 3,
  name: "Nike Flyknit",
  description: "Fight Club",
  price: 340,
  rating: 4.5,
  image: "/static/products/shoe-6.png"
}, {
  id: 4,
  name: "Nike Airmax 270",
  description: "Rave BD",
  price: 150,
  rating: 4.5,
  image: "/static/products/shoe-7.png"
}, {
  id: 5,
  name: "Nike Roshe",
  description: "Rave BD",
  price: 150,
  rating: 4.5,
  image: "/static/products/shoe-9.png"
}, {
  id: 6,
  name: "Nike airmax 170",
  description: "Rave BD",
  price: 215,
  rating: 4.5,
  image: "/static/products/shoe-8.png"
}];
export default ShopV2;