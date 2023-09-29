import { Box, Card, LinearProgress } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import { H5, Small } from "components/Typography";
const RESULTS = [{
  id: 1,
  progress: 10,
  title: "Application"
}, {
  id: 2,
  progress: 80,
  title: "Shortlisted"
}, {
  id: 3,
  progress: 60,
  title: "Certified"
}, {
  id: 4,
  progress: 70,
  title: "On hold"
}, {
  id: 5,
  progress: 20,
  title: "Rejected"
}, {
  id: 6,
  progress: 60,
  title: "Hired"
}];

const Acquisitions = () => {
  return <Card sx={{
    padding: 3,
    height: "100%"
  }}>
      <H5 mb={1}>Acquisitions</H5>

      {RESULTS.map(item => <FlexBetween mt={3} key={item.id}>
          <FlexBox gap={1} minWidth={90} alignItems="center">
            <Box sx={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          backgroundColor: "primary.main"
        }} />
            <Small lineHeight={1}>{item.title}</Small>
          </FlexBox>

          <Box flexGrow={1} marginX={4}>
            <LinearProgress variant="determinate" value={item.progress} />
          </Box>

          <Small>{item.progress}%</Small>
        </FlexBetween>)}
    </Card>;
};

export default Acquisitions;