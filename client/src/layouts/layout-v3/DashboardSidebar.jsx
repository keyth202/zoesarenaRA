import { Box, IconButton, styled, useMediaQuery } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import Scrollbar from "components/ScrollBar";
import { useState } from "react";
import ArrowLeftToLine from "icons/duotone/ArrowLeftToLine";
import MultiLevelMenu from "./MultiLevelMenu";
import MobileSidebar from "./MobileSidebar";
const TOP_HEADER_AREA = 70;
const SidebarWrapper = styled(Box)(({
  theme,
  compact
}) => ({
  height: "100vh",
  position: "fixed",
  width: compact ? 86 : 280,
  transition: "all .2s ease",
  zIndex: theme.zIndex.drawer,
  backgroundColor: theme.palette.background.paper,
  "&:hover": compact && {
    width: 280
  }
}));
const NavWrapper = styled(Box)(() => ({
  paddingLeft: 16,
  paddingRight: 16,
  height: "100%"
}));
const StyledLogo = styled(Box)(() => ({
  paddingLeft: 8,
  fontWeight: 700,
  fontSize: 20
}));
const StyledArrow = styled(ArrowLeftToLine)(() => ({
  display: "block"
}));
const StyledIconButton = styled(IconButton)(({
  theme
}) => ({
  "&:hover": {
    backgroundColor: theme.palette.action.hover
  }
})); // -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
const DashboardSidebar = props => {
  const {
    sidebarCompact,
    showMobileSideBar,
    setShowMobileSideBar,
    setSidebarCompact
  } = props;
  const [onHover, setOnHover] = useState(false);
  const downLg = useMediaQuery(theme => theme.breakpoints.down("lg")); // Activate compact when toggle button clicked and not on hover state

  const COMPACT = sidebarCompact && !onHover ? 1 : 0; //   IF MOBILE

  if (downLg) {
    return <MobileSidebar sidebarCompact={!!COMPACT} showMobileSideBar={!!showMobileSideBar} setShowMobileSideBar={setShowMobileSideBar} />;
  }

  return <SidebarWrapper compact={sidebarCompact ? 1 : 0} onMouseEnter={() => setOnHover(true)} onMouseLeave={() => sidebarCompact && setOnHover(false)}>
      <FlexBetween pt={3} pr={2} pl={4} pb={1} height={TOP_HEADER_AREA}>
        {
        /* LOGO */
      }
        <FlexBox>
          <img src="/static/logo/logo.svg" alt="logo" width={18} />
          {!COMPACT && <StyledLogo>UKO</StyledLogo>}
        </FlexBox>
        <Box mx={"auto"}></Box>

        {
        /* SIDEBAR COLLAPSE BUTTON */
      }
        <StyledIconButton onClick={setSidebarCompact} sx={{
        display: COMPACT ? "none" : "block"
      }}>
          <StyledArrow />
        </StyledIconButton>
      </FlexBetween>

      {
      /* NAVIGATION ITEMS */
    }
      <Scrollbar autoHide clickOnTrack={false} sx={{
      overflowX: "hidden",
      maxHeight: `calc(100vh - ${TOP_HEADER_AREA}px)`
    }}>
        <NavWrapper>
          <MultiLevelMenu sidebarCompact={!!COMPACT} />
        </NavWrapper>
      </Scrollbar>
    </SidebarWrapper>;
};

export default DashboardSidebar;