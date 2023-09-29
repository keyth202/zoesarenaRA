import { Box, Card, Divider, Stack, useTheme } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import Scrollbar from "components/ScrollBar";
import { H5, Small, Span } from "components/Typography";

const Overviews = () => {
  const theme = useTheme();
  const list = [{
    title: "Invoice Overview",
    color: theme.palette.primary.main,
    element: [{
      name: "Draft",
      value: 6,
      progress: 42
    }, {
      name: "Not Sent",
      value: 8,
      progress: 21
    }, {
      name: "Unpaid",
      value: 3,
      progress: 14
    }, {
      name: "Overdue",
      value: 0,
      progress: 5
    }, {
      name: "Paid",
      value: 6,
      progress: 7
    }]
  }, {
    title: "Estimate Overview",
    color: theme.palette.info.main,
    element: [{
      name: "Draft",
      value: 6,
      progress: 42
    }, {
      name: "Not Sent",
      value: 8,
      progress: 21
    }, {
      name: "Unpaid",
      value: 3,
      progress: 14
    }, {
      name: "Overdue",
      value: 0,
      progress: 5
    }, {
      name: "Paid",
      value: 6,
      progress: 7
    }]
  }, {
    title: "Proposal Overview",
    color: theme.palette.warning.main,
    element: [{
      name: "Draft",
      value: 6,
      progress: 42
    }, {
      name: "Not Sent",
      value: 8,
      progress: 21
    }, {
      name: "Unpaid",
      value: 3,
      progress: 14
    }, {
      name: "Overdue",
      value: 0,
      progress: 5
    }, {
      name: "Paid",
      value: 6,
      progress: 7
    }]
  }];
  return <Card sx={{
    height: "100%"
  }}>
      <Scrollbar autoHide={false}>
        <Stack spacing={2} direction="row" justifyContent="space-between" divider={<Divider orientation="vertical" flexItem />}>
          {list.map((item, index) => <Box padding={3} flex={1} minWidth={200} key={index}>
              <FlexBox alignItems="center" mb={1}>
                <Box sx={{
              width: 10,
              height: 10,
              flexShrink: 0,
              marginRight: 1,
              borderRadius: "50%",
              backgroundColor: item.color
            }} />
                <H5>{item.title}</H5>
              </FlexBox>

              {item.element.map((li, index) => <FlexBetween pt={3} key={index}>
                  <Small fontWeight={500}>
                    <Span fontWeight={600} color={item.color}>
                      {li.value}
                    </Span>{" "}
                    {li.name}
                  </Small>

                  <Small>{li.progress}%</Small>
                </FlexBetween>)}
            </Box>)}
        </Stack>
      </Scrollbar>
    </Card>;
};

export default Overviews;