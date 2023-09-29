import { Box, Card, Grid, Stack, styled, Table, TableRow } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import AppPagination from "components/AppPagination";
import Scrollbar from "components/ScrollBar";
import SearchArea from "page-sections/admin-ecommerce/product-list/search-area";
import ColumnShape from "page-sections/contact-list/ColumnShape";
import ContactDetails from "page-sections/contact-list/ContactDetails";
import React, { useEffect, useMemo, useState } from "react";
import { useAsyncDebounce, useGlobalFilter, usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import CONTACT_LIST from "__fakeData__/user-and-contact/contact-list";
import { lightTheme } from "../../constants"; // styled components

const HeadTableCell = styled(TableCell)(({
  theme
}) => ({
  fontSize: 12,
  fontWeight: 600,
  color: theme.palette.text.secondary,
  "&:first-of-type": {
    paddingLeft: 24
  },
  "&:last-of-type": {
    paddingRight: 24
  }
}));
const BodyTableCell = styled(HeadTableCell)(({
  theme
}) => ({
  fontSize: 13,
  fontWeight: 500,
  borderBottom: `1px solid ${lightTheme(theme) ? theme.palette.secondary[100] : theme.palette.divider}`
}));

const ContactListView = () => {
  const [contactData, setContactData] = useState({});
  const columns = useMemo(() => ColumnShape, []);
  const tableData = useMemo(() => CONTACT_LIST, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageOptions,
    gotoPage,
    state,
    setGlobalFilter,
    toggleAllRowsSelected,
    selectedFlatRows
  } = useTable({
    columns,
    data: tableData,
    initialState: {
      //@ts-ignore
      selectedRowIds: {
        "0": true
      }
    }
  }, useGlobalFilter, useSortBy, usePagination, useRowSelect);
  useEffect(() => {
    if (selectedFlatRows.length > 0) {
      setContactData(selectedFlatRows[0].original);
    }
  }, [selectedFlatRows]);
  const [searchValue, setSearchValue] = useState(state.globalFilter);
  const handleSearch = useAsyncDebounce(value => setGlobalFilter(value || undefined), 200); // handle pagination

  const handleChange = (_, currentPageNo) => gotoPage(currentPageNo - 1);

  return <Box pt={2} pb={4}>
      <Grid container>
        <Grid item lg={9} md={8} xs={12}>
          <Card sx={{
          height: "100%"
        }}>
            <Box px={3}>
              <SearchArea value={searchValue} setValue={setSearchValue} onChange={handleSearch} gridRoute="/dashboards/contact-grid" listRoute="/dashboards/contact-list" />
            </Box>

            <Scrollbar autoHide={false}>
              <Table {...getTableProps()} sx={{
              minWidth: 900
            }}>
                <TableHead>
                  {headerGroups.map((headerGroup, index) => <TableRow key={index} {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column, index) => <HeadTableCell key={index} {...column.getHeaderProps(column.getSortByToggleProps())}>
                          {column.render("Header")}
                        </HeadTableCell>)}
                    </TableRow>)}
                </TableHead>

                <TableBody {...getTableBodyProps()}>
                  {page.map((row, index) => {
                  prepareRow(row);
                  return <TableRow key={index} {...row.getRowProps()} onClick={() => {
                    toggleAllRowsSelected(false);
                    row.toggleRowSelected();
                  }} sx={{
                    cursor: "pointer",
                    backgroundColor: row.isSelected ? "action.hover" : "transparent"
                  }}>
                        {row.cells.map((cell, index) => <BodyTableCell key={index} {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </BodyTableCell>)}
                      </TableRow>;
                })}
                </TableBody>
              </Table>
            </Scrollbar>

            <Stack alignItems="center" marginY={4}>
              <AppPagination shape="rounded" onChange={handleChange} count={pageOptions.length} />
            </Stack>
          </Card>
        </Grid>

        <Grid item lg={3} md={4} xs={12}>
          <ContactDetails data={contactData} />
        </Grid>
      </Grid>
    </Box>;
};

export default ContactListView;