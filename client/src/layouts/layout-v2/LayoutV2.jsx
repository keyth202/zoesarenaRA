import DashboardHeader from "layouts/layout-parts/DashboardHeader";
import LayoutBodyWrapper from "layouts/layout-parts/LayoutBodyWrapper";
import { Fragment, useState } from "react";
import { Outlet } from "react-router";
import { secondarySideBarGap, secondarySideBarWidth } from "../../constants";
import Layout2SideBar from "./Layout2SideBar"; // --------------------------------------------

// --------------------------------------------
const LayoutV2 = ({
  children
}) => {
  const [sideBarLocked, setSideBarLocked] = useState(true);
  const [showMobileSideBar, setShowMobileSideBar] = useState(false);
  const [openSecondarySideBar, setOpenSecondarySideBar] = useState(true);

  const handleToggleSidebar = () => {
    setSideBarLocked(state => !state);
    setOpenSecondarySideBar(state => !state);
  }; // dashboard body wrapper custom style


  const space = secondarySideBarWidth + secondarySideBarGap;
  const customStyle = {
    marginLeft: openSecondarySideBar ? `${space}px` : "80px",
    width: `calc(100% - ${openSecondarySideBar ? `${space}px` : "80px"})`
  };
  return <Fragment>
      <Layout2SideBar sideBarLocked={sideBarLocked} showMobileSideBar={showMobileSideBar} openSecondarySideBar={openSecondarySideBar} setOpenSecondarySideBar={setOpenSecondarySideBar} closeMobileSideBar={() => setShowMobileSideBar(false)} />

      <LayoutBodyWrapper sx={customStyle}>
        <DashboardHeader setShowSideBar={handleToggleSidebar} setShowMobileSideBar={() => setShowMobileSideBar(state => !state)} />
        {children || <Outlet />}
      </LayoutBodyWrapper>
    </Fragment>;
};

export default LayoutV2;