import { Badge, Chip, FormControlLabel, InputBase, styled } from "@mui/material";
export const StyledInput = styled(InputBase)(({
  theme
}) => ({
  height: 52,
  //   fontSize: 12,
  fontWeight: 500,
  borderRadius: "8px",
  border: "1px solid",
  paddingLeft: 8,
  paddingright: 8,
  color: theme.palette.text.primary,
  borderColor: theme.palette.mode === "light" ? theme.palette.text.disabled : theme.palette.divider
}));
export const StyledSelectInput = styled(InputBase)(({
  theme
}) => ({
  height: 40,
  fontSize: 12,
  width: "100%",
  fontWeight: 600,
  padding: "0 8px",
  border: "1px solid",
  borderRadius: "8px",
  color: theme.palette.text.primary,
  borderColor: theme.palette.divider,
  "& .MuiPopover-paper": {
    boxShadow: "none"
  },
  "& > .MuiSelect-select": {
    paddingRight: "0 !important"
  }
}));
export const StyledBadge = styled(Badge)(({
  theme
}) => ({
  "& .MuiBadge-badge": {
    width: 25,
    height: 25,
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.main,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
  }
}));
export const StyledFormControlLabel = styled(FormControlLabel)(() => ({
  "& .MuiTypography-root": {
    fontSize: 13,
    fontWeight: 600
  }
}));
export const StyledChip = styled(Chip)(({
  theme
}) => ({
  fontSize: 12,
  fontWeight: 500,
  color: theme.palette.text.disabled,
  backgroundColor: theme.palette.mode === "light" ? theme.palette.text.secondary : theme.palette.divider,
  "& .MuiSvgIcon-root": {
    fontSize: 18
  }
}));