import { Box, Grid, useMediaQuery } from "@mui/material";
import FlexRowAlign from "components/flexbox/FlexRowAlign";

// --------------------------------------------------------------
const RootLayout = ({
  children,
  imgLink
}) => {
  const downMd = useMediaQuery(theme => theme.breakpoints.down("md"));
  return <Grid container height="100%">
      <Grid item md={6} xs={12} order={downMd ? 2 : 1}>
        <FlexRowAlign sx={{
        padding: 4,
        height: "100%",
        backgroundColor: "grey.300"
      }}>
          <Box>
            <img width="100%" alt="Forget Password" src={imgLink} />
          </Box>
        </FlexRowAlign>
      </Grid>

      <Grid item md={6} xs={12} order={downMd ? 1 : 2}>
        {children}
      </Grid>
    </Grid>;
};

export default RootLayout;