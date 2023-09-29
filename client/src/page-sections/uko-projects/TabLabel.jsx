import { Badge, Box } from "@mui/material";
import { H2, H5 } from "components/Typography";

const TabLabel = ({
  tabTitle,
  amount,
  badgeColor
}) => {
  return <Badge variant="dot" overlap="circular" badgeContent="" color={badgeColor || "default"}>
      <Box sx={{
      color: "text.secondary"
    }}>
        <H2>{amount}</H2>
        <H5 marginBottom={1}>{tabTitle}</H5>
      </Box>
    </Badge>;
};

export default TabLabel;