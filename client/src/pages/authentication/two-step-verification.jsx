import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import RootLayout from "page-sections/authentication/RootLayout";
import FlexBox from "components/flexbox/FlexBox";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import { H1, Paragraph, Small } from "components/Typography";
// styled components
const StyledInput = styled("input")(({
  theme
}) => ({
  width: 45,
  height: 45,
  outline: 0,
  fontSize: 18,
  fontWeight: 600,
  borderRadius: "4px",
  textAlign: "center",
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.grey[600]}`
}));

const TwoStepVerification = () => {
  return <RootLayout imgLink="/static/illustration/two-step-verify.svg">
      <FlexRowAlign height="100%">
        <Box textAlign="center" maxWidth={420} width="100%" padding={4}>
          <img src="/static/logo/logo-circle.svg" width={80} alt="Logo" />
          <H1 fontWeight={700} mt={2}>
            Two Step Verification
          </H1>
          <Paragraph color="text.disabled" fontWeight={500}>
            Enter the verficitaion code we sent to your mail
          </Paragraph>

          <form>
            <Small mt={5}>Type your *6 digit security code:</Small>

            <FlexBox gap={1} mt={1} mb={4} justifyContent="center">
              <StyledInput type="text" maxLength={1} />
              <StyledInput type="text" maxLength={1} />
              <StyledInput type="text" maxLength={1} />
              <StyledInput type="text" maxLength={1} />
              <StyledInput type="text" maxLength={1} />
              <StyledInput type="text" maxLength={1} />
            </FlexBox>

            <Button variant="contained" fullWidth>
              Submit
            </Button>
          </form>
        </Box>
      </FlexRowAlign>
    </RootLayout>;
};

export default TwoStepVerification;