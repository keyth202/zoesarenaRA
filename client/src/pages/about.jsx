import { NewReleases } from "@mui/icons-material";
import { Box, Grid, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { H1, H6, Small, Span } from "components/Typography";

const About = () => {
  return <Box py={4}>
      <Box textAlign="center" maxWidth={700} margin="auto">
        <Small letterSpacing={2} fontWeight={500} color="primary.main">
          OUR MISSION
        </Small>

        <H1 fontSize={36} fontWeight={800} lineHeight={1.3}>
          We enable developers to build and publish wonderful things
        </H1>
        <H6 color="text.secondary" fontSize={22} py={4} fontWeight={400}>
          We build products for{" "}
          <Span fontWeight={600} color="primary.main">
            developers and designers
          </Span>
          . And those who aspire to become one.
        </H6>
      </Box>

      <Box pt={6}>
        <Grid container spacing={3}>
          {data.map((item, index) => <Grid item md={4} key={index}>
              <ListItem sx={{
            alignItems: "flex-start"
          }}>
                <ListItemIcon sx={{
              padding: 1,
              borderRadius: 1,
              backgroundColor: "primary.main"
            }}>
                  <NewReleases sx={{
                color: "common.white"
              }} />
                </ListItemIcon>
                <ListItemText primary={item.primary} secondary={item.secondary} sx={{
              marginY: 0,
              "& .MuiListItemText-primary": {
                fontSize: 24,
                color: "text.primary",
                fontWeight: 600,
                lineHeight: 1
              },
              "& .MuiListItemText-secondary": {
                color: "text.primary",
                fontWeight: 500,
                paddingTop: 1
              }
            }} />
              </ListItem>
            </Grid>)}
        </Grid>
      </Box>
    </Box>;
};

const data = [{
  primary: "Easy",
  secondary: "Building and deploying should be as easy as a single tap."
}, {
  primary: "Universal",
  secondary: "To connect the world, sites should be fast from everywhere."
}, {
  primary: "Accessible",
  secondary: "Great care in user experience and design enables everyone."
}];
export default About;