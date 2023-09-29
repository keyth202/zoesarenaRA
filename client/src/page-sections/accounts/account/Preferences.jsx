import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Button, Card, Divider, Grid, Stack, Switch } from "@mui/material";
import AppCheckBox from "components/AppCheckBox";
import { H5, H6, Tiny } from "components/Typography";
import AppTextField from "components/input-fields/AppTextField";

const Preferences = () => {
  return <Card>
      <H5 padding={3}>General Preferences</H5>
      <Divider />

      <Box padding={3}>
        <Grid container spacing={4}>
          <Grid item sm={6} xs={12}>
            <AppTextField select fullWidth label="Language" variant="outlined" placeholder="Language" value="english" SelectProps={{
            native: true,
            IconComponent: KeyboardArrowDown
          }}>
              <option value="english">English</option>
              <option value="bangla">Bangla</option>
              <option value="hindi">Hindi</option>
            </AppTextField>
          </Grid>

          <Grid item sm={6} xs={12}>
            <AppTextField variant="outlined" label="Time Zone" fullWidth value="12:00 AM" />
          </Grid>

          <Grid item sm={6} xs={12}>
            <Stack direction="row" justifyContent="space-between">
              <Box>
                <H6 fontSize={14} mb={0.5}>
                  Early release
                </H6>
                <Tiny fontWeight={500}>Get included on new features.</Tiny>
              </Box>

              <Switch defaultChecked />
            </Stack>

            <Stack direction="row" justifyContent="space-between" mt={2}>
              <Box>
                <H6 fontSize={14} mb={0.5}>
                  See info about people who view my profile
                </H6>
                <Tiny fontWeight={500}>More about viewer info.</Tiny>
              </Box>

              <Switch defaultChecked />
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <H5 padding={3}>Email Preferences</H5>
      <Divider />

      <Stack spacing={2} padding={3}>
        <Stack direction="row" spacing={2}>
          <AppCheckBox />
          <Box>
            <H6 mb={0.5}>Successful Payments</H6>
            <Tiny>Receive a notification for every successful payment.</Tiny>
          </Box>
        </Stack>

        <Stack direction="row" spacing={2}>
          <AppCheckBox checked />
          <Box>
            <H6 mb={0.5}>Payouts</H6>
            <Tiny>Receive a notification for every initiated payout.</Tiny>
          </Box>
        </Stack>

        <Stack direction="row" spacing={2}>
          <AppCheckBox checked />
          <Box>
            <H6 mb={0.5}>Fee Collection</H6>
            <Tiny>
              Receive a notification each time you collect a fee from sales
            </Tiny>
          </Box>
        </Stack>

        <Stack direction="row" spacing={2}>
          <AppCheckBox />
          <Box>
            <H6 mb={0.5}>Invoice Payments</H6>
            <Tiny>
              Receive a notification if a customer sends an incorrect amount to
              pay their invoice.
            </Tiny>
          </Box>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={3} padding={3}>
        <Button variant="contained">Save Changes</Button>
        <Button variant="outlined">Cancel</Button>
      </Stack>
    </Card>;
};

export default Preferences;