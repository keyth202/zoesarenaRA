import { alpha, Avatar, Card, styled, Table, TableBody, TableCell, TableHead, TableRow, useTheme } from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import { H5, Small, Tiny } from "components/Typography";
import React from "react";
import ScrollBar from "simplebar-react"; // styled components

const StyledTableCell = styled(TableCell)(({
  theme
}) => ({
  fontSize: 13,
  fontWeight: 500,
  color: theme.palette.text.secondary,
  "&:first-of-type": {
    paddingLeft: 0
  },
  "&:last-of-type": {
    paddingRight: 0
  }
}));

const RecentDevices = () => {
  const theme = useTheme();
  return <Card sx={{
    padding: 3,
    pb: 5
  }}>
      <H5>Recent Devices</H5>
      <Small color="text.secondary">
        View and manage devices where you're currently logged in.
      </Small>

      <ScrollBar>
        <Table sx={{
        mt: 3,
        minWidth: 700,
        "& th": {
          paddingBottom: 0,
          fontWeight: 600
        }
      }}>
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{
              color: "text.primary"
            }}>
                Browser
              </StyledTableCell>
              <StyledTableCell sx={{
              color: "text.primary"
            }}>
                Device
              </StyledTableCell>
              <StyledTableCell sx={{
              color: "text.primary"
            }}>
                Location
              </StyledTableCell>
              <StyledTableCell sx={{
              color: "text.primary"
            }}>
                Recent Activity
              </StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {activityList.map(item => <TableRow key={item.id}>
                <StyledTableCell>
                  <FlexBox alignItems="center">
                    <Avatar src={item.browserIcon} sx={{
                  width: 20,
                  height: 20,
                  mr: 1
                }} />
                    <Small fontWeight={600}>{item.browser}</Small>
                  </FlexBox>
                </StyledTableCell>
                <StyledTableCell>
                  {item.device}
                  {item.current && <Tiny sx={{
                ml: 1,
                display: "inline-block",
                fontWeight: 600,
                borderRadius: 2,
                padding: "0 10px",
                color: "success.main",
                backgroundColor: alpha(theme.palette.success.main, 0.2)
              }}>
                      current
                    </Tiny>}
                </StyledTableCell>
                <StyledTableCell>{item.location}</StyledTableCell>
                <StyledTableCell>{item.recentActivity}</StyledTableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </ScrollBar>
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
}];
export default RecentDevices;