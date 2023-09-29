import { Box, Button, Stack } from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import AppTextField from "components/input-fields/AppTextField";
import { H1, Paragraph } from "components/Typography";
import RootLayout from "page-sections/authentication/RootLayout";

const ForgetPassword = () => {
  return <RootLayout imgLink="/static/illustration/forget-password.svg">
      <FlexRowAlign height="100%">
        <Box textAlign="center" maxWidth={550} width="100%" padding={4}>
          <img src="/static/logo/logo.svg" width={40} alt="Logo" />
          <H1 fontWeight={700} mt={2}>
            Forgot Password?
          </H1>
          <Paragraph color="text.disabled" fontWeight={500}>
            Enter your mail to reset the password?
          </Paragraph>

          <form>
            <Stack gap={3} mt={5}>
              <AppTextField fullWidth label="Email" />

              <FlexBox gap={2}>
                <Button fullWidth variant="outlined">
                  Cancel
                </Button>
                <Button variant="contained" fullWidth>
                  Submit
                </Button>
              </FlexBox>
            </Stack>
          </form>
        </Box>
      </FlexRowAlign>
    </RootLayout>;
};

export default ForgetPassword;