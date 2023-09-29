import FlexBox from "components/flexbox/FlexBox";
import { H6, Small } from "components/Typography";
import React from "react"; // component props interface

const TabLabel = ({
  tabTitle,
  amount
}) => {
  return <FlexBox alignItems="center">
      <H6>{tabTitle}</H6>
      <Small sx={{
      backgroundColor: "divider",
      padding: "0px 10px",
      borderRadius: "10px",
      marginLeft: 1
    }}>
        {amount}
      </Small>
    </FlexBox>;
};

export default TabLabel;