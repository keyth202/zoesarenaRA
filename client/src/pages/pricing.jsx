import { Box, Button, Card, Chip, Grid, Stack, styled, Switch } from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import { H2, H5, H6, Small, Span } from "components/Typography";
import DoneIcon from "icons/DoneIcon";
import FolderSpecial from "icons/FolderSpecial";
import Layers from "icons/Layers";
import Premium from "icons/Premium";
// styled components
const StyledSwitch = styled(Switch)(({
  theme
}) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16
    }
  },
  "& .MuiSwitch-thumb": {
    margin: 2,
    width: 16,
    height: 16,
    boxShadow: "none",
    backgroundColor: theme.palette.grey[600]
  },
  ".MuiButtonBase-root.MuiSwitch-switchBase:hover": {
    backgroundColor: "transparent"
  }
}));

const Pricing = () => {
  return <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack alignItems="center" mb={4}>
            <H2 mb={2}>Pricing Plans</H2>
            <FlexBox alignItems="center" gap={2}>
              <H5>Monthly</H5>
              <StyledSwitch />
              <H5>Annually</H5>
            </FlexBox>
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Stack direction="row" flexWrap="wrap" gap={3} justifyContent="center">
            <SingleCard price={49} type="Month" Icon={Layers} planName="Basic" iconColor="warning" description="Perfect plan for starters" features={["One Project", "Share it with 5 team members", "Sync across device"]} />
            <SingleCard price={99} type="Month" planName="Standard" iconColor="primary" Icon={FolderSpecial} description="For users who want to do more" features={["One Project", "Share it with 5 team members", "Sync across device", "Components included", "30 day version history"]} />
            <SingleCard price={149} type="Month" Icon={Premium} iconColor="info" planName="Premium" description="Advance features for pros" features={["One Project", "Share it with 5 team members", "Sync across device", "300+ components", "30 day version history"]} />
          </Stack>
        </Grid>
      </Grid>
    </Box>;
};

export default Pricing; // ---------------------------------------------------------------

// ---------------------------------------------------------------
function SingleCard({
  planName,
  price,
  type,
  description,
  features,
  iconColor,
  Icon
}) {
  return <Card sx={{
    borderRadius: "40px",
    padding: 3,
    width: 290
  }}>
      <Chip label={<Icon sx={{
      color: `${iconColor}.main`,
      display: "block"
    }} />} sx={{
      width: 35,
      height: 35,
      borderRadius: "4px",
      "& .MuiChip-label": {
        padding: 0
      },
      backgroundColor: `${iconColor}.light`
    }} />

      <H2 mt={2}>
        ${price}
        <Span fontSize={12} color="text.secondary">
          / {type}
        </Span>
      </H2>

      <H2 mt={2}>{planName}</H2>
      <H6 fontSize={12} color="text.secondary">
        {description}
      </H6>
      <Stack minHeight={200} mt={3} spacing={1.5}>
        {features.map((item, index) => <FlexBox alignItems="end" gap={1} key={index}>
            <DoneIcon color="success" />
            <Small fontSize={13}>{item}</Small>
          </FlexBox>)}
      </Stack>

      <Button variant="outlined" fullWidth sx={{
      borderColor: "primary.main",
      color: "primary.main",
      borderRadius: 25
    }}>
        Get Started
      </Button>
    </Card>;
}