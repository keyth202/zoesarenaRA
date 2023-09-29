import { Card, IconButton, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { H6, Tiny } from "components/Typography";
import Delete from "icons/Delete";
import Edit from "icons/Edit";
import HomeOutlined from "icons/HomeOutlined";
import React from "react";
import { lightTheme } from "../../../../constants";

const BillingAddressListItem = () => {
  return <Card sx={{
    border: 1,
    padding: 2,
    display: "flex",
    boxShadow: "none",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: theme => lightTheme(theme) ? "grey.300" : "divider"
  }}>
      <Box maxWidth="60%">
        <Stack direction="row" alignItems="center" spacing={1}>
          <HomeOutlined sx={{
          color: "text.disabled"
        }} />
          <H6>Home</H6>
        </Stack>
        <Tiny mt={1} lineHeight={1.8} fontWeight={500} color="text.primary">
          Ap #285-7193 Ullamcorper Avenue Amesbury HI 93373 US
        </Tiny>
      </Box>

      <Stack direction="row">
        <IconButton>
          <Edit sx={{
          fontSize: 17,
          color: "text.disabled"
        }} />
        </IconButton>
        <IconButton>
          <Delete sx={{
          fontSize: 17,
          color: "text.disabled"
        }} />
        </IconButton>
      </Stack>
    </Card>;
};

export default BillingAddressListItem;