import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Divider, styled, Tab } from "@mui/material";
import AppModal from "components/AppModal";
import React, { useState } from "react";
import InvoiceTab from "./InvoiceTab";
import OrderDetailsTab from "./OrderDetailsTab";
import PriceTab from "./PriceTab"; // custom styled components

const StyledTab = styled(Tab)(({
  theme
}) => ({
  fontSize: 13,
  minHeight: "auto",
  color: theme.palette.text.primary
}));
const StyledAppModal = styled(AppModal)(({
  theme
}) => ({
  padding: 0,
  maxWidth: 700,
  minWidth: 370
})); // ------------------------------------------------------------------

// ------------------------------------------------------------------
const OrderDetailsModal = ({
  openModal,
  closeModal,
  data
}) => {
  const [tabValue, setTabValue] = useState("1");

  const handleChange = (e, value) => {
    setTabValue(value);
  };

  return <StyledAppModal open={openModal} handleClose={closeModal}>
      <TabContext value={tabValue}>
        <TabList onChange={handleChange} sx={{
        minHeight: 25,
        margin: "1.5rem 1rem"
      }}>
          <StyledTab label="Order Details" value="1" disableRipple />
          <StyledTab label="Price" value="2" disableRipple />
          <StyledTab label="Invoice" value="3" disableRipple />
        </TabList>

        <Divider />

        <TabPanel value="1">
          <OrderDetailsTab />
        </TabPanel>
        <TabPanel value="2">
          <PriceTab />
        </TabPanel>
        <TabPanel value="3">
          <InvoiceTab />
        </TabPanel>
      </TabContext>
    </StyledAppModal>;
};

export default OrderDetailsModal;