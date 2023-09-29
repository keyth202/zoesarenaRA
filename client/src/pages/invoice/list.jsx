import { Box, Button, Stack } from "@mui/material";
import { styled } from "@mui/system";
import FlexBetween from "components/flexbox/FlexBetween";
import IconWrapper from "components/IconWrapper";
import SearchInput from "components/input-fields/SearchInput";
import { H5 } from "components/Typography";
import Add from "icons/Add";
import Invoice from "icons/sidebar/Invoice";
import InvoiceListTable from "page-sections/invoice/list";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { searchByName } from "utils/utils";
import INVOICE_LIST from "__fakeData__/invoice_data"; // styled components

const StyledStack = styled(Stack)(({
  theme
}) => ({
  [theme.breakpoints.down(565)]: {
    width: "100%"
  }
}));

const InvoiceList = () => {
  const {
    t
  } = useTranslation();
  let navigate = useNavigate(); // search input

  const [searchValue, setSearchValue] = useState("");
  const [filteredItem, setFilteredItem] = useState(INVOICE_LIST);
  useEffect(() => {
    const result = searchByName(INVOICE_LIST, searchValue);
    setFilteredItem(result);
  }, [searchValue]);
  return <Box pt={2} pb={4}>
      <FlexBetween flexWrap="wrap" gap={1} mb={2}>
        <Stack direction="row" alignItems="center">
          <IconWrapper>
            <Invoice sx={{
            color: "primary.main"
          }} />
          </IconWrapper>
          <H5>{t("Invoice List")}</H5>
        </Stack>

        <StyledStack alignItems="center" direction="row" gap={2}>
          <SearchInput bordered={false} placeholder="Search" onChange={e => setSearchValue(e.target.value)} />
          <Button onClick={() => navigate("/dashboards/create-invoice")} variant="contained" startIcon={<Add />} sx={{
          flexShrink: 0
        }}>
            Add New
          </Button>
        </StyledStack>
      </FlexBetween>

      <InvoiceListTable invoiceList={filteredItem} />
    </Box>;
};

export default InvoiceList;