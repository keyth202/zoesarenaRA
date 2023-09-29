import { Box } from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import { Tiny } from "components/Typography";
import React from "react";

const OutgoingMsg = () => {
  return <FlexBox mt={3} justifyContent="end">
      <Box sx={{
      padding: 2,
      maxWidth: 250,
      marginLeft: 1.5,
      borderRadius: "8px 0px 8px 8px",
      backgroundColor: "primary.main"
    }}>
        <Tiny display="block" color="white" fontWeight={500} lineHeight={1.7}>
          Hey, Pixy can we get on a quick call? i need to show you something
        </Tiny>
      </Box>
    </FlexBox>;
};

export default OutgoingMsg;