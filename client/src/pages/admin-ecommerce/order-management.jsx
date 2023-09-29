import { TabContext, TabList } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import SearchInput from "components/input-fields/SearchInput";
import OrderColumnShape from "page-sections/admin-ecommerce/columnShapes/OrderColumnShape";
import CustomTable from "page-sections/admin-ecommerce/CustomTable";
import { ordersFakeData } from "page-sections/admin-ecommerce/fakeData";
import TabLabel from "page-sections/admin-ecommerce/TabLabel";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const OrderManagement = () => {
  const {
    t
  } = useTranslation();
  const [currentTab, setCurrentTab] = useState("1"); // handle tab item change

  const handleTabChange = (_, newValue) => {
    setCurrentTab(newValue);
  }; // search input


  const [searchValue, setSearchValue] = useState("");
  const [filteredItem, setFilteredItem] = useState(ordersFakeData);
  useEffect(() => {
    if (searchValue.length > 0) {
      const searchResult = ordersFakeData.filter(item => item.customer.toLocaleLowerCase().match(searchValue.toLowerCase()));
      setFilteredItem(searchResult);
    } else {
      setFilteredItem(ordersFakeData);
    }
  }, [searchValue]);
  const filteredData = filteredItem.filter(item => item.status === "Paid" && currentTab === "2" || item.status === "Unpaid" && currentTab === "3" || currentTab === "1");
  return <Box pt={2} pb={4}>
      <SearchInput bordered={false} placeholder="Find Orders" onChange={e => setSearchValue(e.target.value)} />

      <TabContext value={currentTab}>
        <TabList onChange={handleTabChange} sx={{
        my: 2
      }}>
          {tabs.map(({
          value,
          label,
          count
        }) => <Tab disableRipple value={value} label={<TabLabel title={t(label)} total={count} />} key={value} />)}
        </TabList>

        <CustomTable columnShape={OrderColumnShape} data={filteredData} />
      </TabContext>
    </Box>;
};

const tabs = [{
  value: "1",
  label: "All",
  count: 35
}, {
  value: "2",
  label: "Available",
  count: 45
}, {
  value: "3",
  label: "Disabled",
  count: 25
}];
export default OrderManagement;