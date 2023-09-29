import { Box, Button, Stack, useMediaQuery } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import { H5, Tiny } from "components/Typography";
import NotificationAlert from "icons/NotificationAlert";
import { lightTheme } from "../../../../constants";

const Alert = ({
  title,
  description,
  btnText,
  hiddenButton
}) => {
  const downSM = useMediaQuery(theme => theme.breakpoints.down("sm"));
  return <FlexBetween sx={{
    border: 1,
    padding: 3,
    flexWrap: "wrap",
    borderRadius: "4px",
    borderColor: "primary.400",
    backgroundColor: theme => lightTheme(theme) ? "grey.200" : "divider"
  }}>
      <Stack direction="row" alignItems="center" spacing={2} width={hiddenButton ? "100%" : {
      lg: "60%",
      sm: "60%",
      xs: "100%"
    }}>
        <NotificationAlert color="primary" />
        <Box>
          <H5 lineHeight={1.5}>{title}</H5>
          <Tiny fontSize={10} lineHeight={1.5}>
            {description}
          </Tiny>
        </Box>
      </Stack>

      {!hiddenButton && <Button variant="contained" fullWidth={downSM} sx={{
      marginTop: {
        xs: 2,
        sm: 0
      }
    }}>
          {btnText}
        </Button>}
    </FlexBetween>;
};

export default Alert;