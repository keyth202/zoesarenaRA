import { Box, Button, IconButton, styled } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import SearchInput from "components/input-fields/SearchInput";
import { H6 } from "components/Typography";
import Apps from "icons/Apps";
import FormatBullets from "icons/FormatBullets";
import { useLocation, useNavigate } from "react-router-dom";
import { lightTheme } from "../../../constants";
const SecondaryWrapper = styled(FlexBetween)(({
  theme
}) => ({
  gap: 8,
  flexWrap: "wrap",
  margin: "24px 0",
  [theme.breakpoints.down(550)]: {
    "& .MuiInputBase-root": {
      maxWidth: "calc(100% - 90px)"
    }
  }
})); // --------------------------------------------------------------------

// --------------------------------------------------------------------
const SearchArea = ({
  value,
  onChange,
  setValue,
  selectedItems,
  gridRoute,
  listRoute
}) => {
  const navigate = useNavigate();
  const {
    pathname
  } = useLocation();

  const activeColor = path => pathname === path ? "primary.main" : "text.disabled";

  return <SecondaryWrapper>
      <SearchInput placeholder="Search..." value={value || ""} onChange={e => {
      if (onChange && setValue) {
        setValue(e.target.value);
        onChange(e.target.value);
      }

      onChange(e.target.value);
    }} />

      <FlexBox alignItems="center" gap={1}>
        {selectedItems && selectedItems.length > 0 && <FlexBox alignItems="center" gap={1}>
            <H6>{selectedItems.length} Selected</H6>
            <Button variant="contained" color="error">
              Delete Selected
            </Button>
          </FlexBox>}

        <Box sx={{
        backgroundColor: theme => lightTheme(theme) ? "white" : "background.paper"
      }}>
          <IconButton onClick={() => navigate(listRoute)}>
            <FormatBullets sx={{
            color: activeColor(listRoute)
          }} />
          </IconButton>
          <IconButton onClick={() => navigate(gridRoute)}>
            <Apps sx={{
            color: activeColor(gridRoute)
          }} />
          </IconButton>
        </Box>
      </FlexBox>
    </SecondaryWrapper>;
};

export default SearchArea;