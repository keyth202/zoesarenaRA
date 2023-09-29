import { Button, Card, Chip, Grid, Stack, styled, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import RadioGroup from "@mui/material/RadioGroup";
import ColorRadio from "components/ColorRadio";
import FlexBox from "components/flexbox/FlexBox";
import { H2, H5, Tiny } from "components/Typography";
import ChevronDown from "icons/ChevronDown";
import Facebook from "icons/Facebook";
import Heart from "icons/Heart";
import Instagram from "icons/Instagram";
import Twitter from "icons/Twitter";
import { CarouselProvider, Dot, Image, Slide, Slider } from "pure-react-carousel";
import { useState } from "react";
import QuantityButtons from "../QuantityButtons"; // styled components

const StyledCarouselProvider = styled(CarouselProvider)(({
  theme
}) => ({
  display: "flex",
  position: "relative",
  "& .carousel__slider": {
    flexGrow: 1,
    marginLeft: 10
  },
  "& .carousel__slide-focus-ring": {
    display: "none"
  },
  "& button": {
    border: "none !important",
    opacity: 0.7
  },
  "& button:disabled": {
    opacity: 1,
    position: "relative",
    "&::after": {
      left: 0,
      height: 3,
      content: '""',
      width: "100%",
      borderRadius: 3,
      position: "absolute",
      backgroundColor: theme.palette.primary.main
    }
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
    "& .carousel__slider": {
      marginLeft: 0
    }
  }
}));
const StyledStack = styled(Stack)(({
  theme
}) => ({
  [theme.breakpoints.down("sm")]: {
    marginTop: 10,
    flexDirection: "row",
    "& .carousel__dot": {
      marginTop: 0,
      marginRight: 8
    }
  }
}));
const StyledIconButton = styled(IconButton)(({
  theme
}) => ({
  top: 10,
  right: 10,
  position: "absolute",
  backgroundColor: theme.palette.grey[400],
  "&:hover": {
    backgroundColor: theme.palette.grey[400]
  }
}));
const StyledChip = styled(Chip)(({
  theme
}) => ({
  height: 25,
  borderRadius: "4px",
  color: theme.palette.common.white,
  backgroundColor: theme.palette.success.main
}));

const ProductViewCard = () => {
  const [colorSelect, setColorSelect] = useState("red");
  const [quantity, setQuantity] = useState(1); // handle change color function

  const handleChangeColor = event => {
    setColorSelect(event.target.value);
  };

  return <Card sx={{
    padding: 2
  }}>
      <Grid container spacing={3}>
        <Grid item md={7} xs={12}>
          <StyledCarouselProvider totalSlides={3} dragEnabled={false} naturalSlideWidth={100} naturalSlideHeight={75}>
            <StyledStack spacing={1}>
              {[0, 1, 2].map(item => <Dot slide={item} key={item} style={{
              width: 60,
              height: 55
            }}>
                  <Image hasMasterSpinner={true} src="/static/products/shoe-1.png" style={{
                objectFit: "cover"
              }} />
                </Dot>)}
            </StyledStack>

            <Slider>
              {[0, 1, 2].map(item => <Slide index={item} key={item}>
                  <Image hasMasterSpinner={true} src="/static/products/shoe-1.png" style={{
                objectFit: "cover"
              }} />
                </Slide>)}
            </Slider>

            <StyledIconButton>
              <Heart />
            </StyledIconButton>
          </StyledCarouselProvider>
        </Grid>

        <Grid item md={5}>
          <StyledChip label="In Stock" />
          <Tiny mt={2} fontWeight={500} fontSize={13}>
            NIKE
          </Tiny>
          <H2>Air Jordan 270</H2>

          <H2 color="primary.main" my={2}>
            $350
          </H2>

          <FlexBox alignItems="center" gap={3}>
            <H5>Colors:</H5>

            <RadioGroup row value={colorSelect} onChange={handleChangeColor} sx={{
            gap: 1
          }}>
              <ColorRadio value="red" icon_color="#FF316F" />
              <ColorRadio value="pumpkin" icon_color="#FE8969" />
              <ColorRadio value="purple" icon_color="#8C8DFF" />
              <ColorRadio value="green" icon_color="#27CE88" />
            </RadioGroup>
          </FlexBox>

          <FlexBox alignItems="center" gap={3} mt={3}>
            <H5>Select size:</H5>

            <TextField select color="grey" size="small" variant="outlined" SelectProps={{
            native: true,
            IconComponent: ChevronDown
          }} sx={{
            ".MuiNativeSelect-select": {
              lineHeight: 1
            }
          }}>
              <option value="42">42</option>
              <option value="41">41</option>
              <option value="40">40</option>
            </TextField>
          </FlexBox>

          <FlexBox alignItems="center" gap={3} mt={3}>
            <H5>Quantity:</H5>

            <QuantityButtons quantity={quantity} increment={() => setQuantity(state => state + 1)} decrement={() => setQuantity(state => state - 1)} />

            <Tiny fontWeight={500}>Available: 12</Tiny>
          </FlexBox>

          <FlexBox alignItems="center" gap={3} mt={3}>
            <Button variant="contained">Add to cart</Button>
            <Button variant="contained" color="success">
              Buy Now
            </Button>
          </FlexBox>

          <FlexBox mt={2}>
            <IconButton>
              <Facebook sx={{
              color: "text.disabled"
            }} />
            </IconButton>
            <IconButton>
              <Instagram sx={{
              color: "text.disabled"
            }} />
            </IconButton>
            <IconButton>
              <Twitter sx={{
              color: "text.disabled"
            }} />
            </IconButton>
          </FlexBox>
        </Grid>
      </Grid>
    </Card>;
};

export default ProductViewCard;