import { Box } from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import { H6, Tiny } from "components/Typography";

const ListItemCard = ({
  item
}) => {
  return <FlexBox alignItems="center">
      <Box width={36} height={36}>
        <img src={item.image} alt="Logo" width="100%" />
      </Box>
      <Box ml="1rem">
        <H6>{item.company}</H6>
        <Tiny color="text.secondary">{item.position}</Tiny>
      </Box>
    </FlexBox>;
};

export default ListItemCard;