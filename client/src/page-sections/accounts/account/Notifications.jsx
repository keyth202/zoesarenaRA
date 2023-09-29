import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Button, Card, Stack, Table } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AppCheckBox from "components/AppCheckBox";
import Scrollbar from "components/ScrollBar";
import { H5, Tiny } from "components/Typography";
import AppTextField from "components/input-fields/AppTextField";
import { lightTheme } from "../../../constants";
import { BodyTableCell, HeadTableCell } from "./common/StyledComponents";

const Notifications = () => {
  const tableHeadColor = theme => lightTheme(theme) ? "primary.100" : "divider";

  return <Card>
      <Box padding={3}>
        <H5>Notifications</H5>
        <Tiny mt={1} fontWeight={500}>
          We need permission from your browser to show notifications. Request
          permission
        </Tiny>
      </Box>

      <Scrollbar autoHide={false}>
        <Table sx={{
        minWidth: 600
      }}>
          <TableHead sx={{
          backgroundColor: theme => tableHeadColor(theme)
        }}>
            <TableRow>
              <HeadTableCell>Type</HeadTableCell>
              <HeadTableCell>Email</HeadTableCell>
              <HeadTableCell>Browser</HeadTableCell>
              <HeadTableCell>App</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {notificationSettings.map(item => <TableRow key={item.id}>
                <BodyTableCell>{item.type}</BodyTableCell>
                <BodyTableCell>
                  <AppCheckBox defaultChecked={item.email} />
                </BodyTableCell>
                <BodyTableCell>
                  <AppCheckBox defaultChecked={item.browser} />
                </BodyTableCell>
                <BodyTableCell>
                  <AppCheckBox defaultChecked={item.app} />
                </BodyTableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>

      <Box padding={3}>
        <Box mb={6} mt={2}>
          <AppTextField select fullWidth label="When should we send you notifications?" variant="outlined" placeholder="Language" value="always" SelectProps={{
          native: true,
          IconComponent: KeyboardArrowDown
        }} sx={{
          maxWidth: 400
        }}>
            <option value="always">Always</option>
          </AppTextField>

          <Tiny fontWeight={500} mt={2}>
            In order to cut back on noise, email notifications are grouped
            together and only sent when you're idle or offline.
          </Tiny>
        </Box>

        <Stack direction="row" spacing={2}>
          <Button variant="contained">Save Changes</Button>
          <Button variant="outlined">Cancel</Button>
        </Stack>
      </Box>
    </Card>;
};

const notificationSettings = [{
  id: 1,
  type: "New for you",
  email: true,
  browser: false,
  app: false
}, {
  id: 2,
  type: "Account activity",
  email: true,
  browser: true,
  app: true
}, {
  id: 3,
  type: "A new browser used to sign in",
  email: true,
  browser: true,
  app: true
}, {
  id: 4,
  type: "A new device is linked",
  email: false,
  browser: true,
  app: false
}, {
  id: 5,
  type: "A new device connected",
  email: true,
  browser: false,
  app: false
}];
export default Notifications;