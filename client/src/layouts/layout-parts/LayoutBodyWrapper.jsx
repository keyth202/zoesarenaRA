import { Box, styled } from "@mui/material";
import { Fragment } from "react";
import LayoutSetting from "./LayoutSetting"; // styled components

const Wrapper = styled(Box)(({
  theme
}) => ({
  paddingLeft: "3rem",
  paddingRight: "3rem",
  transition: "all 0.3s",
  [theme.breakpoints.down(1200)]: {
    width: "100%",
    marginLeft: 0,
    paddingLeft: "2rem",
    paddingRight: "2rem"
  }
}));
const InnerWrapper = styled(Box)(({
  theme
}) => ({
  [theme.breakpoints.up("lg")]: {
    maxWidth: 1200,
    margin: "auto"
  }
})); // --------------------------------------------

// --------------------------------------------
const LayoutBodyWrapper = ({
  children,
  sx
}) => {
  return <Fragment>
      <Wrapper sx={sx}>
        <InnerWrapper>{children}</InnerWrapper>
      </Wrapper>

      <LayoutSetting />
    </Fragment>;
};

export default LayoutBodyWrapper;