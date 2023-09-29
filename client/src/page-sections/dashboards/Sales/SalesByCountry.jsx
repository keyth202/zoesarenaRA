import { Card } from "@mui/material";
import { H5 } from "components/Typography";
import { useTranslation } from "react-i18next";
import VectorMap from "./VectorMap";

const SalesByCountry = () => {
  const {
    t
  } = useTranslation();
  return <Card sx={{
    padding: 3
  }}>
      <H5>{t("Sales By Country")}</H5>

      <VectorMap />
    </Card>;
};

export default SalesByCountry;