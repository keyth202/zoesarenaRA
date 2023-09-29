import { Add, ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Button, IconButton, styled, useTheme } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import { H3 } from "components/Typography";
import { format } from "date-fns";
const StyledIconButton = styled(IconButton)(() => ({
  padding: 0
}));

const HeaderToolbar = ({
  onDateNext,
  onDatePrev,
  onAddEventForm,
  date
}) => {
  const theme = useTheme();
  return <FlexBetween flexWrap="wrap" sx={{
    padding: "1rem 1.5rem",
    backgroundColor: "primary.main"
  }}>
      <FlexBox alignItems="center" sx={{
      [theme.breakpoints.down(490)]: {
        width: "100%",
        justifyContent: "space-between"
      }
    }}>
        <H3 color="white">{format(date, "MMMM yyyy")}</H3>
        <Box ml="1rem">
          <StyledIconButton onClick={onDatePrev}>
            <ChevronLeft sx={{
            color: "white"
          }} />
          </StyledIconButton>
          <StyledIconButton onClick={onDateNext}>
            <ChevronRight sx={{
            color: "white"
          }} />
          </StyledIconButton>
        </Box>
      </FlexBox>

      <Button sx={{
      fontSize: 12,
      color: "primary.main",
      backgroundColor: "white",
      padding: "0.6rem 1.5rem",
      "&:hover": {
        backgroundColor: "white"
      },
      [theme.breakpoints.down(490)]: {
        width: "100%",
        mt: 1
      }
    }} startIcon={<Add />} onClick={onAddEventForm}>
        Add Event
      </Button>
    </FlexBetween>;
};

export default HeaderToolbar;