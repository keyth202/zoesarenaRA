import { Box } from "@mui/material";
import CustomTable from "page-sections/admin-ecommerce/CustomTable";
import UserListColumnShape from "page-sections/user-list/columnShape";
import { userListFakeData } from "page-sections/user-list/fakeData";
import ListHeader from "page-sections/user-list/ListHeader";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchByName } from "utils/utils";

const UserList = () => {
  const navigate = useNavigate();

  const handleAddUser = () => navigate("/dashboard/add-user");

  const [searchValue, setSearchValue] = useState("");
  const [filteredItem, setFilteredItem] = useState(userListFakeData);
  useEffect(() => {
    const result = searchByName(userListFakeData, searchValue);
    setFilteredItem(result);
  }, [searchValue]);
  return <Box pt={2} pb={4}>
      <ListHeader setSearchValue={setSearchValue} handleClick={handleAddUser} />

      <CustomTable columnShape={UserListColumnShape} data={filteredItem} />
    </Box>;
};

export default UserList;