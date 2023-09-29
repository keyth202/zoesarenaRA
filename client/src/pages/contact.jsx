import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Card, Grid } from "@mui/material";
import { H1, H2, H6, Small } from "components/Typography";
import ProfileIcon from "icons/ProfileIcon";

const Contact = () => {
  return <Box py={4}>
      <Box textAlign="center" pb={10}>
        <H1 fontSize={24} fontWeight={700}>
          Our teams are here to help
        </H1>
        <H6 color="text.secondary" fontWeight={500}>
          Get in touch and let us know how we can help.
        </H6>
      </Box>

      <Box>
        <Grid container spacing={3}>
          {["Support", "Sales", "Partners", "Docs"].map((item, index) => <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
              <Card sx={{
            padding: 4,
            textAlign: "center"
          }}>
                <Box sx={{
              width: 60,
              height: 60,
              padding: 2,
              margin: "auto",
              display: "flex",
              borderRadius: "50%",
              alignItems: "center",
              justifyContent: "center"
            }}>
                  <ProfileIcon sx={{
                color: "primary.main"
              }} />
                </Box>

                <H2 fontWeight={500} py={1}>
                  {item}
                </H2>
                <Small>
                  We're here to help with any question or code issue.
                </Small>

                <Box paddingTop={5}>
                  <Button fullWidth variant="outlined" endIcon={<ArrowForward fontSize="large" />}>
                    Get Support
                  </Button>
                </Box>
              </Card>
            </Grid>)}
        </Grid>
      </Box>
    </Box>;
};

export default Contact;