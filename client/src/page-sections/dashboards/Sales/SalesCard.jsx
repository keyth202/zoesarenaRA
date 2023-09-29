import { alpha, Box, Card, Stack } from "@mui/material";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import { H2, Tiny } from "components/Typography";
import numeral from "numeral";

// --------------------------------------------------
const SalesCard = ({
  list
}) => {
  return <Card sx={{
    padding: 3,
    height: "100%"
  }}>
      <Stack spacing={2} height="100%" direction="row" alignItems="center" justifyContent="space-between">
        {list.map(item => <FlexRowAlign key={item.id} flexDirection="column">
            <FlexRowAlign flexShrink={0} sx={{
          width: 40,
          height: 40,
          borderRadius: 2,
          marginBottom: 2,
          backgroundColor: alpha(item.color, 0.2)
        }}>
              <item.Icon sx={{
            color: item.color
          }} />
            </FlexRowAlign>

            <Box textAlign="center">
              <Tiny fontWeight={600} mb={1}>
                {item.title}
              </Tiny>
              <H2 color={item.color} lineHeight={1}>
                {numeral(item.amount).format("0a")}
              </H2>
            </Box>
          </FlexRowAlign>)}
      </Stack>
    </Card>;
};

export default SalesCard;