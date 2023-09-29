import { Add } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import { H6, Tiny } from "components/Typography";

const NewItemCard = () => {
  return <FlexBox alignItems="center">
      <Button variant="dashed">
        <Add fontSize="small" sx={{
        color: "grey.600"
      }} />
      </Button>

      <Box ml="1rem">
        <H6>New Item</H6>
        <Tiny color="text.secondary">Add a new work experience item</Tiny>
      </Box>
    </FlexBox>;
};

export default NewItemCard;