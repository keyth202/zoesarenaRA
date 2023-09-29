/* eslint-disable array-callback-return */
import { Box, List, ListItemButton, styled, useMediaQuery } from "@mui/material";
import Scrollbar from "components/ScrollBar";
import { H6, Small } from "components/Typography";
import LayoutDrawer from "layouts/layout-parts/LayoutDrawer";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBox from "../../components/flexbox/FlexBox";
import { lightTheme } from "../../constants";
import sideMenuList from "../layout-parts/navList";
import AccordionMenu from "./AccordionMenu"; // --------------------------------------------------------------
// root component props type

// --------------------------------------------------------------
// custom styled components
const SidebarWrapper = styled(Box)(({
  theme,
  show
}) => ({
  left: show ? 0 : -260,
  width: 260,
  height: "100%",
  position: "fixed",
  boxShadow: theme.shadows[2],
  transition: "left 0.3s ease",
  zIndex: theme.zIndex.drawer,
  backgroundColor: theme.palette.background.paper
}));
const StyledLogo = styled(Box)(() => ({
  paddingLeft: 8,
  fontWeight: 700,
  fontSize: 20
}));
const StyledListItemButton = styled(ListItemButton)(({
  active,
  theme
}) => ({
  padding: 12,
  marginBottom: 8,
  color: active ? theme.palette.primary.main : "inherit",
  "&:hover": {
    backgroundColor: "transparent"
  },
  "& .MuiSvgIcon-root": {
    color: active ? theme.palette.primary.main : theme.palette.text.secondary
  }
}));
const Dot = styled(Box)(() => ({
  width: 5,
  height: 5,
  marginRight: 10,
  borderRadius: "50%"
}));
const SubMenuItem = styled(FlexBox)(({
  theme,
  active
}) => ({
  cursor: "pointer",
  overflow: "hidden",
  alignItems: "center",
  position: "relative",
  padding: "0.6rem 1rem",
  backgroundColor: active ? lightTheme(theme) ? theme.palette.grey[200] : theme.palette.divider : "transparent",
  "& div": {
    backgroundColor: active ? theme.palette.primary.main : theme.palette.grey[600]
  },
  "& small": {
    color: active ? theme.palette.primary.main : theme.palette.text.primary
  },
  "&:hover": {
    backgroundColor: lightTheme(theme) ? theme.palette.grey[200] : theme.palette.divider,
    "& div": {
      backgroundColor: theme.palette.primary.main
    },
    "& small": {
      color: theme.palette.primary.main
    },
    "&::before": {
      opacity: 1
    }
  },
  "&::before": {
    left: 0,
    width: 2,
    content: '""',
    height: "100%",
    borderRadius: 5,
    position: "absolute",
    opacity: active ? 1 : 0,
    transition: "opacity 0.3s ease",
    backgroundColor: theme.palette.primary.main
  }
})); // root component

const DashboardSidebar = props => {
  const {
    showSideBar,
    showMobileSideBar,
    closeMobileSideBar
  } = props;
  const {
    t
  } = useTranslation();
  const navigate = useNavigate();
  const {
    pathname
  } = useLocation();
  const [expanded, setExpanded] = useState("");
  const downMd = useMediaQuery(theme => theme.breakpoints.down(1200)); // active accordion

  const activeAccordion = () => {
    sideMenuList.forEach(list => {
      if (list.children && list.children.length > 0) {
        const findItem = list.children.find(item => item.path === pathname);
        if (findItem) setExpanded(list.title);
      }
    });
  };

  useEffect(activeAccordion, [pathname]);

  const handleAccordionChange = panel => (_, expand) => {
    setExpanded(expand ? panel : false);
  };

  const handleSubMenuItem = path => {
    if (path) navigate(path);
  };

  const activeRoute = path => path === pathname ? 1 : 0; // common side bar content


  const sideBarContent = <Scrollbar autoHide clickOnTrack={false}>
      <List sx={{
      height: "100%",
      padding: 2
    }}>
        {
        /* LOGO */
      }
        <FlexBox ml={1.5} mb={2}>
          <img src="/static/logo/logo.svg" alt="logo" width={18} />
          <StyledLogo>UKO</StyledLogo>
        </FlexBox>

        {sideMenuList.map((item, index) => {
        if (item.children && item.children.length > 0) {
          return <AccordionMenu key={index} title={item.title} expandedItem={expanded} handleChange={handleAccordionChange} accordionHeader={<FlexBox alignItems="center" gap={1}>
                    <item.Icon sx={{
              fontSize: 20
            }} />
                    <H6 lineHeight={1}>{t(item.title)}</H6>
                  </FlexBox>}>
                {item.children.map((menuItem, key) => {
              if (!menuItem.subChildren) {
                return <SubMenuItem key={key} active={activeRoute(menuItem.path)} onClick={() => handleSubMenuItem(menuItem.path)}>
                        <Dot />
                        <Small color="text.primary">{t(menuItem.name)}</Small>
                      </SubMenuItem>;
              }
            })}
              </AccordionMenu>;
        }

        return <StyledListItemButton key={index} disableRipple active={item.path === pathname ? 1 : 0} onClick={() => {
          setExpanded(false);
          handleSubMenuItem(item.path);
        }}>
              <item.Icon sx={{
            color: "text.secondary",
            fontSize: 20
          }} />
              <H6 ml={1} lineHeight={1}>
                {t(item.title)}
              </H6>
            </StyledListItemButton>;
      })}
      </List>
    </Scrollbar>; // for mobile device

  if (downMd) {
    return <LayoutDrawer open={showMobileSideBar} onClose={closeMobileSideBar}>
        {sideBarContent}
      </LayoutDrawer>;
  }

  return <SidebarWrapper show={showSideBar ? 1 : 0}>{sideBarContent}</SidebarWrapper>;
};

export default DashboardSidebar;