import { CheckCircleOutline, Instagram, SportsBasketball, Twitter } from "@mui/icons-material";
import { Box, Card, FormControlLabel, IconButton, styled, Switch } from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import { H4, H6, Small, Tiny } from "components/Typography";
import FacebookIcon from "icons/FacebookIcon";
import UserPlusIcon from "icons/UserPlusIcon";
// styled components
const MainWrapper = styled(Card)(({
  theme
}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  "&::after": {
    content: '""',
    height: 125,
    width: "100%",
    backgroundColor: "#C6D3ED",
    position: "absolute",
    top: 0
  },
  [theme.breakpoints.down(500)]: {
    "& .MuiFormControlLabel-root": {
      display: "none"
    }
  }
}));
const ContentWrapper = styled(Box)(({
  theme
}) => ({
  textAlign: "center",
  zIndex: 1,
  maxWidth: 430,
  marginTop: 85,
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 20,
    paddingRight: 20
  }
}));
const ImageWrapper = styled(Box)(() => ({
  width: 80,
  height: 80,
  borderRadius: "50%",
  border: "4px solid",
  borderColor: "white",
  margin: "auto"
}));

const UserBio = () => {
  return <MainWrapper>
      <ContentWrapper>
        <ImageWrapper>
          <img src="/static/user/team-pro-pic.png" alt="Team Member" width="100%" />
        </ImageWrapper>

        <FormControlLabel label="Notifications" control={<Switch defaultChecked={true} />} sx={{
        position: "absolute",
        right: 0,
        top: 135,
        flexDirection: "row-reverse",
        "& .MuiTypography-root": {
          fontWeight: 600,
          fontSize: 12,
          color: "text.disabled"
        }
      }} />

        <Box py={2}>
          <H4 fontWeight={600} lineHeight={1.3}>
            Peter Mcknon
          </H4>
          <Tiny color="text.secondary">UI/UX Designer</Tiny>

          <FlexBox justifyContent="space-between" alignItems="center" maxWidth={250} margin="auto" py={2}>
            <FlexBox>
              <UserPlusIcon sx={{
              fontSize: 18,
              color: "primary.main",
              marginRight: 1
            }} />
              <H6>500+ Followers</H6>
            </FlexBox>
            <FlexBox>
              <CheckCircleOutline sx={{
              fontSize: 18,
              color: "error.main",
              marginRight: 1
            }} />
              <H6>75 projects</H6>
            </FlexBox>
          </FlexBox>

          <Small color="text.secondary" lineHeight={1.9} display="block" marginTop={2}>
            Hey everyone, I am a product manager from New York and I am looking
            for new opportunities in the software business.
          </Small>

          <Box marginTop={2}>
            <IconButton>
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <Twitter color="primary" />
            </IconButton>
            <IconButton>
              <Instagram color="warning" />
            </IconButton>
            <IconButton>
              <SportsBasketball color="error" />
            </IconButton>
          </Box>
        </Box>
      </ContentWrapper>
    </MainWrapper>;
};

export default UserBio;