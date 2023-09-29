import { Box, Button, Stack } from "@mui/material";
import AppCheckBox from "components/AppCheckBox";
import RootLayout from "page-sections/authentication/RootLayout";
import FlexBox from "components/flexbox/FlexBox";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import { H1, Paragraph, Small } from "components/Typography";
import AppTextField from "components/input-fields/AppTextField";
import { Link } from "react-router-dom";

const NewPassword = () => {
  return <RootLayout imgLink="/static/illustration/new-password.svg">
      <FlexRowAlign height="100%">
        <Box textAlign="center" maxWidth={550} width="100%" padding={4}>
          <img src="/static/logo/logo-circle.svg" width={80} alt="Logo" />
          <H1 fontWeight={700} mt={2}>
            Setup New Password
          </H1>
          <Paragraph color="text.disabled" fontWeight={500}>
            Already have reset you password? <Link to="/login">Sign In</Link>
          </Paragraph>

          <form>
            <Stack gap={3} mt={5}>
              <AppTextField fullWidth label="Password" />
              <AppTextField fullWidth label="Confirm Password" />
              <FlexBox alignItems="center" gap={1}>
                <AppCheckBox defaultChecked />
                <Small fontSize={12}>
                  I agree to the <Link to="#">terms and conditions</Link>
                </Small>
              </FlexBox>

              <Button variant="contained" fullWidth>
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </FlexRowAlign>
    </RootLayout>;
};

export default NewPassword;