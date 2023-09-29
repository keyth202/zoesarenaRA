import { Delete, Search, SearchOff } from "@mui/icons-material";
import { Box, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled, useTheme } from "@mui/material/styles";
// ----------------------------------------------------------------------
// styled components
const RootStyle = styled(Toolbar)(({
  theme
}) => ({
  height: 96,
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1, 0, 3)
}));
const SearchStyle = styled(OutlinedInput)(({
  theme
}) => ({
  width: 240,
  transition: theme.transitions.create(["box-shadow", "width"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  "&.Mui-focused": {
    width: 320,
    boxShadow: theme.shadows[1]
  },
  "& fieldset": {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[400]} !important`
  }
}));

const ListToolbar = props => {
  const {
    numSelected,
    filterName,
    onFilterName
  } = props;
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";
  return <RootStyle sx={{ ...(numSelected > 0 && {
      color: isLight ? "primary.main" : "text.primary",
      backgroundColor: isLight ? "primary.lighter" : "primary.dark"
    })
  }}>
      {numSelected > 0 ? <Typography component="div" variant="subtitle1">
          {numSelected} selected
        </Typography> : <SearchStyle value={filterName} onChange={e => onFilterName(e.target.value)} placeholder="Search user..." startAdornment={<InputAdornment position="start">
              <Box component={Search} sx={{
        color: "text.disabled"
      }} />
            </InputAdornment>} />}

      {numSelected > 0 ? <Tooltip title="Delete">
          <IconButton>
            <Delete />
          </IconButton>
        </Tooltip> : <Tooltip title="Filter list">
          <IconButton>
            <SearchOff />
          </IconButton>
        </Tooltip>}
    </RootStyle>;
};

export default ListToolbar;