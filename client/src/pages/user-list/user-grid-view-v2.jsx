import { Box, Grid } from "@mui/material";
import ListHeader from "page-sections/user-list/ListHeader";
import UserCard from "page-sections/user-list/UserCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchByName } from "utils/utils";

const UserGrid = () => {
  const navigate = useNavigate();

  const handleAddUser = () => navigate("/dashboard/add-user"); // search input


  const [searchValue, setSearchValue] = useState("");
  const [filteredItem, setFilteredItem] = useState(userList);
  useEffect(() => {
    const result = searchByName(userList, searchValue);
    setFilteredItem(result);
  }, [searchValue]);
  return <Box pt={2} pb={4}>
      <ListHeader setSearchValue={setSearchValue} handleClick={handleAddUser} />

      <Grid container spacing={3}>
        {filteredItem.map((user, index) => <Grid item md={4} sm={6} xs={12} key={index}>
            <UserCard user={user} />
          </Grid>)}
      </Grid>
    </Box>;
};

const userList = [{
  cover: "/static/cover/cover-1.png",
  avatar: "/static/avatar/001-man.svg",
  name: "Natalie Dormer",
  position: "Marketing Manager",
  post: 121,
  follower: 575,
  following: 632
}, {
  cover: "/static/cover/cover-4.png",
  avatar: "/static/avatar/002-girl.svg",
  name: "Selena Gomez",
  position: "Font End Developer",
  post: 121,
  follower: 575,
  following: 632
}, {
  cover: "/static/cover/cover-3.png",
  avatar: "/static/avatar/005-man-1.svg",
  name: "Mark Dhoner",
  position: "UI Designer",
  post: 121,
  follower: 575,
  following: 632
}, {
  cover: "/static/cover/cover-4.png",
  avatar: "/static/avatar/014-man-3.svg",
  name: "Tom Hardy",
  position: "Marketing Manager",
  post: 121,
  follower: 575,
  following: 632
}, {
  cover: "/static/cover/cover-5.png",
  avatar: "/static/avatar/023-man-6.svg",
  name: "Logan Paul",
  position: "Font End Developer",
  post: 121,
  follower: 575,
  following: 632
}, {
  cover: "/static/cover/cover-6.png",
  avatar: "/static/avatar/027-man-7.svg",
  name: "Tom Holland",
  position: "UI Designer",
  post: 121,
  follower: 575,
  following: 632
}];
export default UserGrid;