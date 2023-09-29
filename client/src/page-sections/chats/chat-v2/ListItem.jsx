import { Box } from "@mui/system";
import FlexBox from "components/flexbox/FlexBox";
import { Tiny } from "components/Typography";
import FileIcon from "icons/FileIcon";
import React from "react"; // component props interface

const ListItem = ({
  hideIcon
}) => {
  return <FlexBox alignItems="center" justifyContent="space-between" mb={2}>
      <FlexBox alignItems="center">
        {!hideIcon && <FileIcon sx={{
        color: "text.secondary",
        marginRight: 1
      }} />}
        <Box>
          <Tiny fontWeight={500} display="block" color="text.primary">
            Reference Zip
          </Tiny>
          <Tiny fontWeight={500} color="text.secondary" display="block">
            Oct 21, 2021
          </Tiny>
        </Box>
      </FlexBox>

      <Tiny fontWeight={500} color="text.secondary" display="block">
        1.8MB
      </Tiny>
    </FlexBox>;
};

export default ListItem;