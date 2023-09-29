import { Box } from "@mui/system";
import CustomTable from "page-sections/admin-ecommerce/CustomTable";
import InvoiceColumnShape from "page-sections/invoice/columnShape";
import { invoiceFakeData } from "page-sections/invoice/fakeData";
import ListHeader from "page-sections/user-list/ListHeader";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchByName } from "utils/utils";

const InvoiceListV2 = () => {
  const navigate = useNavigate(); // search input

  const [searchValue, setSearchValue] = useState("");
  const [filteredItem, setFilteredItem] = useState(invoiceFakeData);

  const handleRowClick = rowData => () => {
    navigate("/dashboards/invoice-details-v2", {
      state: rowData
    });
  };

  useEffect(() => {
    const result = searchByName(invoiceFakeData, searchValue);
    setFilteredItem(result);
  }, [searchValue]);
  return <Box pt={2} pb={4}>
      <ListHeader buttonText="Add New" setSearchValue={setSearchValue} handleClick={() => navigate("/dashboards/create-invoice")} />

      <Box mt={2}>
        <CustomTable showFooter hidePagination data={filteredItem} rowClick={handleRowClick} columnShape={InvoiceColumnShape} />
      </Box>
    </Box>;
};

export default InvoiceListV2;