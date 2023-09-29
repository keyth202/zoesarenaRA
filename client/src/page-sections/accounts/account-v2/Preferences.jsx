import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Button, Card, MenuItem, Select, Switch } from "@mui/material";
import { H5, H6, Tiny } from "components/Typography";
import { useState } from "react";
import { StyledFormControlLabel, StyledSelectInput } from "./StyledComponent";
import AppTextField from "components/input-fields/AppTextField";

const Preferences = () => {
  const [language, setLanguage] = useState("english");
  return <Card sx={{
    padding: 3,
    pb: 5
  }}>
      <H5 mb={2}>Preferences</H5>
      <Box maxWidth={350}>
        <H6 mb={1}>Language</H6>
        <Select value={language} onChange={e => setLanguage(e.target.value)} IconComponent={() => <KeyboardArrowDown />} input={<StyledSelectInput />}>
          <MenuItem value="english" sx={{
          fontSize: 12,
          fontWeight: 500
        }}>
            English
          </MenuItem>
        </Select>

        <H6 mb={1} mt={2}>
          Time Zone
        </H6>
        <AppTextField placeholder="Time Zone" fullWidth sx={{
        mb: 2
      }} />

        <StyledFormControlLabel label={<Label title="Early release" body="Get included on early releases for new Front features." />} control={<Switch defaultChecked />} sx={{
        mt: "1rem"
      }} />

        <StyledFormControlLabel label={<Label title="See info about people who view my profile" body="More about viewer info." />} control={<Switch defaultChecked />} sx={{
        mt: "1rem"
      }} />

        <Button variant="contained" sx={{
        mt: 4
      }}>
          Save Changes
        </Button>
      </Box>
    </Card>;
};

function Label({
  title,
  body
}) {
  return <Box>
      <H6>{title}</H6>
      <Tiny fontWeight={500} color="text.disabled">
        {body}
      </Tiny>
    </Box>;
}

export default Preferences;