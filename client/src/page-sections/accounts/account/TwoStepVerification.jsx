import { Button, Card, Divider, Stack, Switch } from "@mui/material";
import { Box } from "@mui/system";
import { H5, Tiny } from "components/Typography";
import AppTextField from "components/input-fields/AppTextField";
import React from "react";

const TwoStepVerification = () => {
  return <Card>
      <Box padding={3}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <H5>Two-step verification</H5>
          <Switch defaultChecked />
        </Stack>

        <Tiny mt={1} fontWeight={500}>
          Start by entering your password so that we know it's you. Then we'll
          walk you through two more simple steps.
        </Tiny>
      </Box>

      <Divider />

      <Box px={3} py={4} maxWidth={450}>
        <AppTextField fullWidth label="Account Password" value="Enter Current Password" />
        <Tiny mt={1.5} fontWeight={500}>
          This is the password you use to log in to your Front account.
        </Tiny>

        <Stack direction="row" spacing={2} mt={4}>
          <Button variant="contained">Save Changes</Button>
          <Button variant="outlined">Cancel</Button>
        </Stack>
      </Box>
    </Card>;
};

export default TwoStepVerification;