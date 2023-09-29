import { Card } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import { H5, Paragraph } from "components/Typography";
import React from "react";
import EditButton from "../EditButton";

const Summery = () => {
  return <Card sx={{
    padding: 3
  }}>
      <FlexBetween>
        <H5>Summary</H5>
        <EditButton />
      </FlexBetween>

      <Paragraph mt={2} fontWeight={400}>
        The new iPad combines the power and capability of a computer with the
        ease of use and versatility you’d never expect from one. <br /> <br />{" "}
        And now it’s even more versatile, with a larger 10.2‑inch Retina
        display, support he new iPad combines the power and capability of a
        computer with the ease of use and versatility you’d never expect
      </Paragraph>
    </Card>;
};

export default Summery;