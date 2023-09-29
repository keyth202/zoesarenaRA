import { Button, Card } from "@mui/material";
import { Box } from "@mui/system";
import { H6, Tiny } from "components/Typography";
import React from "react";
import { lightTheme } from "../../../../constants";

const NewAddressCard = () => {
  return <Card sx={{
    border: 1,
    padding: 2,
    height: "100%",
    minHeight: 100,
    display: "flex",
    boxShadow: "none",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: theme => lightTheme(theme) ? "grey.300" : "divider",
    backgroundColor: theme => lightTheme(theme) ? "grey.200" : "divider"
  }}>
      <Box maxWidth="60%">
        <H6>Enter a new address</H6>
        <Tiny lineHeight={1.8} fontWeight={500} color="text.primary">
          Add your new destination..
        </Tiny>
      </Box>

      <Button variant="contained">New Address</Button>
    </Card>;
};

export default NewAddressCard;