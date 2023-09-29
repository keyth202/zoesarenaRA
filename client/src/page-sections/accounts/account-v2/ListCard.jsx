import { MoreHoriz } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import { H6, Tiny } from "components/Typography";
import React from "react"; // component interface

const ListCard = ({
  item,
  handleMore
}) => {
  return <FlexBox justifyContent="space-between" alignItems="center">
      <FlexBox alignItems="center">
        <Box width={36} height={36}>
          <img src={item.image} alt="Logo" width="100%" />
        </Box>
        <Box ml="1rem">
          <H6>{item.company}</H6>
          <Tiny>{item.position}</Tiny>
        </Box>
      </FlexBox>
      <IconButton onClick={handleMore}>
        <MoreHoriz sx={{
        color: "text.secondary"
      }} />
      </IconButton>
    </FlexBox>;
};

export default ListCard;