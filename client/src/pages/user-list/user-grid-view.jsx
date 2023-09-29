import { Box, Card, Grid, IconButton, Stack, useTheme } from "@mui/material";
import AppCheckBox from "components/AppCheckBox";
import AppPagination from "components/AppPagination";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBetween from "components/flexbox/FlexBetween";
import { H6, Tiny } from "components/Typography";
import Chat from "icons/Chat";
import Email from "icons/Email";
import MoreHorizontal from "icons/MoreHorizontal";
import UserBigIcon from "icons/UserBigIcon";
import SearchArea from "page-sections/admin-ecommerce/product-list/search-area";
import HeadingArea from "page-sections/user-list/heading-area";
import { useEffect, useState } from "react";
import { searchByName } from "utils/utils";
import USER_LIST from "__fakeData__/user-and-contact/user_list";

const UserGridView = () => {
  const [value, setValue] = useState("");
  const theme = useTheme(); // handle change for tab list

  const changeTab = (_, newValue) => setValue(newValue); // search input


  const [searchValue, setSearchValue] = useState("");

  const handleSearch = value => setSearchValue(value);

  const [filteredItem, setFilteredItem] = useState(USER_LIST);
  useEffect(() => {
    const result = searchByName(USER_LIST, searchValue);
    setFilteredItem(result);
  }, [searchValue]);
  const iconStyle = {
    color: "text.disabled",
    fontSize: 16
  };
  return <Box pt={2} pb={4}>
      <Card sx={{
      px: 3,
      py: 2
    }}>
        <HeadingArea value={value} changeTab={changeTab} />

        <SearchArea value={searchValue} onChange={handleSearch} gridRoute="/dashboards/user-grid" listRoute="/dashboards/user-list" />

        <Grid container spacing={3}>
          {filteredItem.map((item, index) => <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
              <Box sx={{
            padding: 2,
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 1
          }}>
                <FlexBetween>
                  <AppCheckBox />
                  <IconButton sx={{
                padding: 0
              }}>
                    <MoreHorizontal sx={iconStyle} />
                  </IconButton>
                </FlexBetween>

                <Stack direction="row" alignItems="center" py={2} spacing={2}>
                  <AppAvatar src={item.avatar} sx={{
                borderRadius: "20%"
              }} />
                  <Box>
                    <H6>{item.name}</H6>
                    <Tiny color="text.secondary" fontSize={12}>
                      {item.username}
                    </Tiny>
                  </Box>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1}>
                  <Email sx={iconStyle} />
                  <Tiny color="text.secondary" fontSize={12}>
                    {item.email}
                  </Tiny>
                </Stack>

                <Stack direction="row" alignItems="center" mt={1} spacing={1}>
                  <UserBigIcon sx={iconStyle} />
                  <Tiny color="text.secondary" fontSize={12}>
                    Status: {item.role}
                  </Tiny>
                </Stack>

                <Stack direction="row" alignItems="center" mt={1} spacing={1}>
                  <Chat sx={iconStyle} />
                  <Tiny color="text.secondary" fontSize={12}>
                    Posts: 12
                  </Tiny>
                </Stack>
              </Box>
            </Grid>)}

          <Grid item xs={12}>
            <Stack alignItems="center" py={2}>
              <AppPagination shape="rounded" count={5} />
            </Stack>
          </Grid>
        </Grid>
      </Card>
    </Box>;
};

export default UserGridView;