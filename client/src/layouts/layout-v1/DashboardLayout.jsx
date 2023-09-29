import LayoutBodyWrapper from "layouts/layout-parts/LayoutBodyWrapper";
import { Fragment, useState } from "react";
import { Outlet } from "react-router";
import DashboardHeader from "../layout-parts/DashboardHeader";
import DashboardSidebar from "./DashboardSidebar"; // --------------------------------------------

// --------------------------------------------
const DashboardLayout = ({
  children
}) => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [showMobileSideBar, setShowMobileSideBar] = useState(false); // dashboard body wrapper custom style

  const customStyle = {
    width: `calc(100% - ${showSideBar ? "260px" : "0px"})`,
    marginLeft: showSideBar ? "260px" : "0px"
  };
  return <Fragment>
      <DashboardSidebar showSideBar={showSideBar} showMobileSideBar={showMobileSideBar} closeMobileSideBar={() => setShowMobileSideBar(false)} />

      <LayoutBodyWrapper sx={customStyle}>
        <DashboardHeader setShowSideBar={() => setShowSideBar(state => !state)} setShowMobileSideBar={() => setShowMobileSideBar(state => !state)} />
        {children || <Outlet />}
      </LayoutBodyWrapper>
    </Fragment>;
};

export default DashboardLayout;