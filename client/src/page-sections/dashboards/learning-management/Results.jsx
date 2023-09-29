import { Box, Card, LinearProgress } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import { H5, H6, Tiny } from "components/Typography";
import React from "react";
import { useTranslation } from "react-i18next";
const RESULTS = [{
  id: 1,
  progress: 40,
  title: "React",
  date: "20 March"
}, {
  id: 2,
  progress: 80,
  title: "Angular",
  date: "15 March"
}, {
  id: 3,
  progress: 60,
  title: "Vue",
  date: "10 March"
}, {
  id: 4,
  progress: 90,
  title: "Html",
  date: "1 March"
}, {
  id: 5,
  progress: 80,
  title: "Css",
  date: "5 March"
}];

const Results = () => {
  const {
    t
  } = useTranslation();
  return <Card sx={{
    padding: 3,
    height: "100%"
  }}>
      <H5>{t("Results")}</H5>

      {RESULTS.map(item => <FlexBetween mt={3} key={item.id}>
          <FlexBox gap={1}>
            <Box sx={{
          mt: 0.1,
          width: 10,
          height: 10,
          borderRadius: "50%",
          backgroundColor: "primary.main"
        }} />

            <Box>
              <H6 lineHeight={1}>{item.title}</H6>
              <Tiny>{item.date}</Tiny>
            </Box>
          </FlexBox>

          <Box flexGrow={1} marginX={4}>
            <LinearProgress variant="determinate" value={item.progress} />
          </Box>

          <H6>{item.progress}%</H6>
        </FlexBetween>)}
    </Card>;
};

export default Results;