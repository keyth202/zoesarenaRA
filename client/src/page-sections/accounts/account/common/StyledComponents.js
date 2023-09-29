import { styled, TableCell } from "@mui/material";
import { lightTheme } from "../../../../constants"; // ---------------------------------------------------------
// table cell component version 1 - example account page - recent devices and notifications tab

export const BodyTableCell = styled(TableCell)(({
  theme
}) => ({
  fontSize: 14,
  fontWeight: 500,
  paddingTop: "1.5rem",
  paddingBottom: "1.5rem",
  color: theme.palette.text.secondary,
  borderBottom: `1px solid ${lightTheme(theme) ? theme.palette.grey[200] : theme.palette.divider}`,
  "&:first-of-type": {
    paddingLeft: 24
  },
  "&:last-of-type": {
    paddingRight: 24
  }
}));
export const HeadTableCell = styled(BodyTableCell)(({
  theme
}) => ({
  paddingTop: "1rem",
  paddingBottom: "1rem",
  fontWeight: 600,
  color: theme.palette.text.primary
})); // ----------------------------------------------------------
// ---------------------------------------------------------
// table cell component version 1 - example account page - billing, statements referrals etc.

export const BodyTableCellV2 = styled(TableCell)(({
  theme
}) => ({
  fontSize: 12,
  fontWeight: 500,
  paddingTop: "1rem",
  paddingBottom: "1rem",
  borderBottom: `1px solid ${lightTheme(theme) ? theme.palette.grey[200] : theme.palette.divider}`,
  "&:first-of-type": {
    paddingLeft: 24,
    fontWeight: 600
  },
  "&:last-of-type": {
    paddingRight: 24,
    maxWidth: 90
  }
}));
export const HeadTableCellV2 = styled(BodyTableCellV2)(({
  theme
}) => ({
  fontWeight: 600,
  paddingTop: "1rem",
  paddingBottom: "1rem",
  color: theme.palette.text.primary
})); // ----------------------------------------------------------