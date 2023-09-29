import { Box } from "@mui/system";
import { H6, Paragraph } from "components/Typography";
import React from "react";

const DescriptionCard = () => {
  return <Box padding={3}>
      <H6 mb={1}>Specification:</H6>
      <Paragraph fontSize={12} mb={5}>
        You can't go wrong with a pair of Jordan sneakers. Crafted from black
        and white leather, these Air Jordan 1 Mid SE sneakers are a timeless
        Easy as that.{" "}
      </Paragraph>

      <H6 mb={1}>MATERIAL AND WASHING INSTRUCTIONS</H6>
      <Paragraph fontSize={12}>
        Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65%
        polyester,35% cotton. Insole: 100% polyurethane. Sole: 100%
        thermoplastic. Fixing sole: 100% glued
      </Paragraph>
    </Box>;
};

export default DescriptionCard;