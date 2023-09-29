import { Box, Button, Card } from "@mui/material";
import { H2, Small } from "components/Typography";
import OvalCheckedIcon from "icons/OvalCheckedIcon";
import React from "react";
import { useTranslation } from "react-i18next";

const PaymentSuccess = () => {
  const {
    t
  } = useTranslation();
  return <Card sx={{
    paddingY: 8,
    marginTop: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}>
      <Box sx={{
      maxWidth: 400,
      textAlign: "center"
    }}>
        <OvalCheckedIcon sx={{
        fontSize: 100,
        marginBottom: 2,
        color: "primary.main"
      }} />
        <H2>{t("Success")}</H2>
        <Small marginTop={1} display="block" marginBottom={5} color="text.disabled">
          thank you for shopping using Uko
        </Small>
        <Button variant="contained" fullWidth>
          {t("Back to order")}
        </Button>
      </Box>
    </Card>;
};

export default PaymentSuccess;