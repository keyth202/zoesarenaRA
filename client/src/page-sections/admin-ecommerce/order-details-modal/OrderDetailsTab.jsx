import { Edit } from "@mui/icons-material";
import { Box, Grid, IconButton } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import Scrollbar from "components/ScrollBar";
import { H3, H5, H6, Small, Span } from "components/Typography";

const OrderDetailsTab = () => {
  return <Scrollbar>
      <Box padding={3} sx={{
      minWidth: 700,
      overflow: "auto"
    }}>
        <FlexBetween>
          <H3>
            Order Info <Span color="text.disabled">#UY3769</Span>
          </H3>

          <IconButton onClick={() => {}}>
            <Edit sx={{
            fontSize: 18,
            color: "text.disabled"
          }} />
          </IconButton>
        </FlexBetween>

        <Box my={2}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <H5 fontWeight={600}>Order From</H5>
              <Box mt={1.5}>
                <H6 lineHeight={1.8}>Mark Rufflo</H6>
                <H6 lineHeight={1.8}>Arizona, USA</H6>
                <H6 lineHeight={1.8}>+003344422</H6>

                <FlexBox alignItems="center" mt={3}>
                  <Box sx={{
                  width: 50,
                  height: 50,
                  overflow: "hidden",
                  borderRadius: "50%",
                  backgroundColor: "primary.100"
                }}>
                    <img src="/static/avatar/001-man.svg" width="100%" alt="User" />
                  </Box>
                  <Box marginLeft={1}>
                    <H6>Mark Rufflo</H6>
                    <Small>Product Manager</Small>
                  </Box>
                </FlexBox>
              </Box>
            </Grid>

            <Grid item xs={4}>
              <H5 fontWeight={600}>Payment Method</H5>
              <Box mt={1.5}>
                <H6 lineHeight={1.8}>Paypal</H6>
                <H6 lineHeight={1.8} fontWeight={500}>
                  Amount: $789
                </H6>
                <H6 lineHeight={1.8} fontWeight={500}>
                  Id: 00000-XH3453
                </H6>
                <H6 lineHeight={1.8} fontWeight={500}>
                  Date: 03.02.2021
                </H6>
                <H6 lineHeight={1.8} fontWeight={500}>
                  Status: paid
                </H6>
              </Box>
            </Grid>

            <Grid item xs={4}>
              <H5 fontWeight={600}>Billing Address</H5>
              <Box mt={1.5}>
                <H6 lineHeight={1.8}>Corner view</H6>
                <H6 lineHeight={1.8} fontWeight={500}>
                  Corner view, Sylhet zindabazar
                </H6>
                <H6 lineHeight={1.8} fontWeight={500}>
                  Uilib@gmail.com
                </H6>
                <H6 lineHeight={1.8} fontWeight={500}>
                  Number: +013145813
                </H6>
                <H6 lineHeight={1.8} fontWeight={500}>
                  Post code: 3100
                </H6>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Scrollbar>;
};

export default OrderDetailsTab;