import { Box, Card, Divider, Stack, useTheme } from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import { H2, H6 } from "components/Typography";

// --------------------------------------------------
const LongCard = ({
  list
}) => {
  const theme = useTheme();
  return <Card sx={{
    padding: 3,
    height: "100%"
  }}>
      <Stack spacing={2} height="100%" direction="row" alignItems="center" justifyContent="space-between" divider={<Divider flexItem orientation="vertical" sx={{
      height: 50,
      alignSelf: "center"
    }} />} sx={{
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "flex-start",
        "& hr": {
          display: "none"
        },
        "& .MuiBox-root": {
          marginLeft: 0
        }
      }
    }}>
        {list.map(item => <FlexBox key={item.id} gap={1.5} alignItems="center" sx={{
        [theme.breakpoints.down("sm")]: {
          marginLeft: 0,
          marginBottom: "1.5rem !important",
          "&:last-of-type": {
            marginBottom: "0 !important"
          }
        }
      }}>
            <FlexRowAlign flexShrink={0} sx={{
          width: 40,
          height: 40,
          borderRadius: 2,
          backgroundColor: item.color
        }}>
              <item.Icon sx={{
            color: "common.white"
          }} />
            </FlexRowAlign>

            <Box>
              <H6 lineHeight={1.5} mb={0.4}>
                {item.title}
              </H6>
              <H2 color={item.color} lineHeight={1}>
                {item.amount}
              </H2>
            </Box>
          </FlexBox>)}
      </Stack>
    </Card>;
};

export default LongCard;