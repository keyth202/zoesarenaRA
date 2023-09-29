import { Add, Favorite, Star } from "@mui/icons-material";
import { alpha, Box, Card, IconButton, useTheme } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import { H3, H5, Small, Tiny } from "components/Typography";

const ProductCard = ({
  product,
  handleClick
}) => {
  const theme = useTheme();
  return <Card sx={{
    border: 0
  }}>
      <FlexRowAlign onClick={handleClick} sx={{
      cursor: "pointer",
      overflow: "hidden"
    }}>
        <img src={product.image} alt="Product" style={{
        objectFit: "cover",
        maxWidth: "100%"
      }} />
      </FlexRowAlign>

      <Box padding={1.5} bgcolor={theme.palette.mode === "dark" ? alpha("#fff", 0.03) : ""}>
        <FlexBox alignItems="flex-start" justifyContent="space-between">
          <Box>
            <H5>{product.name}</H5>
            <Tiny fontSize={12} color="text.disabled">
              {product.description}
            </Tiny>
          </Box>

          <FlexBox alignItems="center" gap={0.5}>
            <Star fontSize="small" color="warning" />
            <Small lineHeight={1} color="text.disabled">
              {product.rating}
            </Small>
          </FlexBox>
        </FlexBox>

        <FlexBetween>
          <H3>${product.price}</H3>

          <Box>
            <IconButton sx={{
            marginRight: 1,
            backgroundColor: "grey.50",
            "&:hover": {
              backgroundColor: "grey.200"
            }
          }}>
              <Favorite fontSize="small" color="disabled" />
            </IconButton>

            <IconButton sx={{
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "primary.main"
            }
          }}>
              <Add fontSize="small" sx={{
              color: "white"
            }} />
            </IconButton>
          </Box>
        </FlexBetween>
      </Box>
    </Card>;
};

export default ProductCard;