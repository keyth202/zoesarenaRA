import { Box, Button, Checkbox, styled, Table } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import Scrollbar from "components/ScrollBar";
import BlankCheckBoxIcon from "icons/BlankCheckBoxIcon";
import CheckBoxIcon from "icons/CheckBoxIcon";
import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { useAsyncDebounce, useGlobalFilter, usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import LIST_PRODUCTS from "__fakeData__/admin/list_products";
import { lightTheme } from "../../../../constants";
import SearchArea from "../search-area";
import ColumnShape from "./column-shape"; // styled components

const BodyTableCell = styled(TableCell)(() => ({
  fontSize: 12,
  fontWeight: 600,
  borderBottom: 0,
  transition: "color 0.3s",
  "&:first-of-type": {
    paddingLeft: 24
  },
  "&:last-of-type": {
    textAlign: "center"
  },
  "&:nth-child(9)": {
    maxWidth: 50,
    textAlign: "center"
  }
}));
const HeadTableCell = styled(BodyTableCell)(({
  theme
}) => ({
  color: theme.palette.text.disabled
}));
const BodyTableRow = styled(TableRow)(({
  theme,
  select_row
}) => ({
  transition: "background-color 0.3s",
  backgroundColor: select_row ? theme.palette.primary[400] : theme.palette.background.paper,
  "& td:first-of-type": {
    borderTopLeftRadius: "4px",
    borderBottomLeftRadius: "4px"
  },
  "& td:last-of-type": {
    textAlign: "center",
    borderTopRightRadius: "4px",
    borderBottomRightRadius: "4px"
  },
  "& td": {
    color: select_row ? "white" : "inherit"
  }
})); // custom select checkbox include

const SelectCheckBox = forwardRef(({
  indeterminate,
  ...rest
}, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;
  useEffect(() => {
    if (resolvedRef) {
      resolvedRef.current.indeterminate = indeterminate;
    }
  }, [resolvedRef, indeterminate]);
  return <Checkbox {...rest} disableRipple ref={resolvedRef} checkedIcon={<CheckBoxIcon fontSize="small" color="primary" />} icon={<BlankCheckBoxIcon fontSize="small" color="primary" />} />;
});

const ProductListView = () => {
  const tableData = useMemo(() => LIST_PRODUCTS, []);
  const columns = useMemo(() => ColumnShape, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    // pageOptions,
    // gotoPage,
    setGlobalFilter,
    state,
    selectedFlatRows
  } = useTable({
    columns,
    data: tableData
  }, useGlobalFilter, useSortBy, usePagination, useRowSelect, hooks => {
    hooks.visibleColumns.push(columns => [{
      id: "selection",
      Header: ({
        getToggleAllRowsSelectedProps
      }) => <SelectCheckBox {...getToggleAllRowsSelectedProps()} />,
      Cell: ({
        row
      }) => <SelectCheckBox {...row.getToggleRowSelectedProps()} />
    }, ...columns]);
  }); // search input

  const [searchValue, setSearchValue] = useState(state.globalFilter);
  const handleSearch = useAsyncDebounce(value => setGlobalFilter(value || undefined), 200); // find selected row

  const selectRow = id => selectedFlatRows.find(item => item.id === id);

  return <Box>
      <SearchArea value={searchValue} onChange={handleSearch} setValue={setSearchValue} selectedItems={selectedFlatRows} gridRoute="/dashboards/product-grid" listRoute="/dashboards/product-list" />

      <Scrollbar autoHide={false}>
        <Table {...getTableProps()} sx={{
        minWidth: 900,
        borderSpacing: "0 10px",
        borderCollapse: "separate"
      }}>
          <TableHead>
            {headerGroups.map((headerGroup, index) => <TableRow key={index} {...headerGroup.getHeaderGroupProps()} sx={{
            backgroundColor: theme => lightTheme(theme) ? "primary.100" : "divider"
          }}>
                {headerGroup.headers.map((column, index) => <HeadTableCell key={index} {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                  </HeadTableCell>)}
              </TableRow>)}
          </TableHead>

          <TableBody {...getTableBodyProps()}>
            {page.map((row, index) => {
            prepareRow(row);
            const selected = selectRow(row.id);
            return <BodyTableRow key={index} {...row.getRowProps()} select_row={selected} // onClick={rowClick && rowClick(row.original)}
            >
                  {row.cells.map((cell, index) => <BodyTableCell key={index} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </BodyTableCell>)}
                </BodyTableRow>;
          })}
          </TableBody>
        </Table>
      </Scrollbar>

      <FlexRowAlign mt={2}>
        <Button variant="white">Load More Products</Button>
      </FlexRowAlign>
    </Box>;
};

export default ProductListView;