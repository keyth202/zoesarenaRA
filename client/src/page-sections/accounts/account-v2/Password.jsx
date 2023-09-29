import { Box, Button, Card, LinearProgress } from "@mui/material";
import { H5, H6, Tiny } from "components/Typography";
import React from "react";
import { useTranslation } from "react-i18next";
import AppTextField from "components/input-fields/AppTextField";

const Password = () => {
  const {
    t
  } = useTranslation();
  return <Card sx={{
    padding: 3,
    pb: 5,
    "& li": {
      fontSize: 13,
      fontWeight: 500,
      color: "text.disabled"
    }
  }}>
      <H5>{t("Change Your Password")}</H5>
      <Box maxWidth={350}>
        <AppTextField fullWidth sx={{
        mt: 2
      }} placeholder="Enter current password" />
        <AppTextField fullWidth sx={{
        mt: 2,
        mb: 1
      }} placeholder="Enter new password" />
        <LinearProgress variant="determinate" value={10} />
        <AppTextField fullWidth sx={{
        mt: 2
      }} placeholder="Confirm new password" />

        <Box my={3}>
          <H6>{t("Password requirements:")}</H6>
          <Tiny fontWeight={500} color="text.secondary">
            Ensure that these requirements are met:
          </Tiny>
          <ul>
            <li>Minimum 8 characters long - the more, the better</li>
            <li>At least one lowercase character</li>
            <li>At least one uppercase character</li>
            <li>At least one number, symbol, or whitespace character</li>
          </ul>
        </Box>

        <Button variant="contained">{t("Save Changes")}</Button>
      </Box>
    </Card>;
};

export default Password;