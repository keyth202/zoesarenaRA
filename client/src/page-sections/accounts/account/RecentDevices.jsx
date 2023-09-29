import { Card, Table, TableHead, TableRow } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import { Box } from "@mui/system";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import Scrollbar from "components/ScrollBar";
import { H5, H6, Tiny } from "components/Typography";
import { lightTheme } from "../../../constants";
import { BodyTableCell, HeadTableCell } from "./common/StyledComponents";

const RecentDevices = () => {
  const tableHeadColor = theme => lightTheme(theme) ? "primary.100" : "divider";

  return <Card sx={{
    pb: 1
  }}>
      <FlexBetween padding={3} flexWrap="wrap">
        <H5 lineHeight={1.8}>Recent Devices</H5>
        <Tiny lineHeight={1.5}>
          View and manage devices where you're currently logged in.
        </Tiny>
      </FlexBetween>

      <Box>
        <Scrollbar autoHide={false}>
          <Table sx={{
          minWidth: 800
        }}>
            <TableHead sx={{
            backgroundColor: theme => tableHeadColor(theme)
          }}>
              <TableRow>
                <HeadTableCell>Browser</HeadTableCell>
                <HeadTableCell>Device</HeadTableCell>
                <HeadTableCell>Location</HeadTableCell>
                <HeadTableCell>Recent Activity</HeadTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {activityList.map(item => <TableRow key={item.id}>
                  <BodyTableCell>
                    <FlexBox alignItems="center">
                      <AppAvatar src={item.browserIcon} sx={{
                    width: 20,
                    height: 20,
                    mr: 1
                  }} />
                      <H6>{item.browser}</H6>
                    </FlexBox>
                  </BodyTableCell>
                  <BodyTableCell>{item.device}</BodyTableCell>
                  <BodyTableCell>
                    <FlexBox alignItems="center">
                      <H6>{item.location}</H6>
                      {item.current && <Tiny sx={{
                    ml: 1,
                    color: "white",
                    borderRadius: 2,
                    padding: "3px 10px",
                    backgroundColor: "success.main"
                  }}>
                          current
                        </Tiny>}
                    </FlexBox>
                  </BodyTableCell>
                  <BodyTableCell>{item.recentActivity}</BodyTableCell>
                </TableRow>)}
            </TableBody>
          </Table>
        </Scrollbar>
      </Box>
    </Card>;
};

const activityList = [{
  id: 1,
  browser: "Chrome on Windows",
  browserIcon: "/static/browser/chrome.svg",
  device: "Dell XPS 12",
  location: "New York, USA",
  recentActivity: "Now",
  current: true
}, {
  id: 2,
  browser: "Mozilla Firefox",
  browserIcon: "/static/browser/mozilla.svg",
  device: "Acer Aspire 300",
  location: "New York, USA",
  recentActivity: "15 June 2020"
}, {
  id: 3,
  browser: "Safari Browser",
  browserIcon: "/static/browser/safari.svg",
  device: "Macbook Pro 2020",
  location: "London, UK",
  recentActivity: "05 October 2020"
}, {
  id: 4,
  browser: "Apple Browser",
  browserIcon: "/static/browser/apple.svg",
  device: "IPhone 13 Pro Max",
  location: "Manchester, UK",
  recentActivity: "05 October 2020"
}];
export default RecentDevices;