import { Card } from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import { H3, Span } from "components/Typography";
import React from "react";

const UpgradeCard = () => {
  return <Card sx={{
    padding: 3,
    height: "100%"
  }}>
      <FlexBox height="100%" alignItems="center" flexDirection="column" justifyContent="space-between">
        <H3 pb={2} maxWidth={200} textAlign="center">
          Upgrade to <Span color="primary.main">PRO</Span> for more resources
        </H3>

        <img src="/static/illustration/job-management.svg" width="100%" alt="" />
      </FlexBox>
    </Card>;
};

export default UpgradeCard;