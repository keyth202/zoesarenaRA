import { Stack } from "@mui/material";
import { H5 } from "components/Typography";
import IconWrapper from "components/IconWrapper";
import React from "react"; // ---------------------------------------------------

// ---------------------------------------------------
const Heading = ({
  title,
  Icon
}) => {
  return <Stack direction="row" alignItems="center">
      <IconWrapper>
        <Icon sx={{
        color: "primary.main"
      }} />
      </IconWrapper>
      <H5>{title}</H5>
    </Stack>;
};

export default Heading;