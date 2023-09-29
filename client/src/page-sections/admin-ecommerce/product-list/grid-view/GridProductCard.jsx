import { Box, Card, CardContent, CardMedia, IconButton, styled } from "@mui/material";
import AppCheckBox from "components/AppCheckBox";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import { H6 } from "components/Typography";
import Delete from "icons/Delete";
import Edit from "icons/Edit";
import { useState } from "react";
import { lightTheme } from "../../../../constants"; // styled component

const StyledIconButton = styled(IconButton)(({
  theme
}) => {
  const backgroundColor = lightTheme(theme) ? "white" : theme.palette.background.default;
  return {
    backgroundColor,
    "&:hover": {
      backgroundColor
    }
  };
}); // -----------------------------------------------------------

// -----------------------------------------------------------
const GridProductCard = ({
  item
}) => {
  const [checked, setChecked] = useState(false);

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  return <Card sx={{
    position: "relative"
  }}>
      <Box sx={{
      height: 200,
      width: "100%",
      overflow: "hidden",
      position: "relative",
      "& img": {
        transition: "all 0.3s"
      },
      "&:hover img": {
        transform: "scale(1.2)"
      },
      "&::after": {
        top: 0,
        opacity: 0.5,
        width: "100%",
        content: '""',
        height: "100%",
        position: "absolute",
        transition: "background-color 0.2s",
        backgroundColor: checked ? "primary.100" : "transparent"
      }
    }}>
        <CardMedia component="img" alt="Product Image" image={item.image} width="100%" height="100%" />
      </Box>

      <FlexBetween alignItems="flex-start" sx={{
      position: "absolute",
      width: "100%",
      top: 0,
      padding: 1.5
    }}>
        <AppCheckBox checked={checked} onChange={handleChange} />

        {checked && <FlexBox gap={1}>
            <StyledIconButton>
              <Edit sx={{
            fontSize: 12,
            color: "text.disabled"
          }} />
            </StyledIconButton>
            <StyledIconButton>
              <Delete sx={{
            fontSize: 12,
            color: "text.disabled"
          }} />
            </StyledIconButton>
          </FlexBox>}
      </FlexBetween>

      <CardContent sx={{
      textAlign: "center",
      "&:last-child": {
        paddingBottom: 2
      }
    }}>
        <H6 fontSize={12} mb={0.5}>
          {item.name}
        </H6>
        <H6 fontSize={12} color="text.disabled">
          ${item.price}
        </H6>
      </CardContent>
    </Card>;
};

export default GridProductCard;