import { ArrowRightAlt } from "@mui/icons-material";
import { Box, ButtonBase, styled, Table } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import FlexBetween from "components/flexbox/FlexBetween";
import Scrollbar from "components/ScrollBar";
import { Paragraph } from "components/Typography";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useExpanded, usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import InvoiceColumnShape from "./columnShape";
const StyledTableRow = styled(TableRow)(({
  theme
}) => ({
  backgroundColor: theme.palette.background.paper,
  "& td:first-of-type": {
    borderTopLeftRadius: "4px",
    borderBottomLeftRadius: "4px"
  },
  "& td:last-of-type": {
    textAlign: "center",
    borderTopRightRadius: "4px",
    borderBottomRightRadius: "4px"
  }
}));
const HeadTableCell = styled(TableCell)(({
  theme
}) => ({
  padding: 0,
  fontSize: 12,
  fontWeight: 600,
  borderBottom: 0,
  color: theme.palette.text.secondary,
  "&:first-of-type": {
    paddingLeft: 16
  },
  "&:last-child": {
    textAlign: "center"
  }
}));
const BodyTableCell = styled(HeadTableCell)(({
  theme
}) => ({
  padding: "10px 0",
  color: theme.palette.text.primary
}));

const InvoiceListTable = ({
  invoiceList
}) => {
  const tableData = useMemo(() => invoiceList, [invoiceList]);
  const columns = useMemo(() => InvoiceColumnShape, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    state,
    gotoPage,
    pageCount
  } = useTable({
    columns,
    data: tableData
  }, useSortBy, useExpanded, usePagination, useRowSelect); // handle pagination

  const handleChange = () => gotoPage(invoiceList.length);

  const navigate = useNavigate();
  return <Box>
      <Scrollbar autoHide={false}>
        <Table {...getTableProps()} sx={{
        borderSpacing: "0 1rem",
        borderCollapse: "separate",
        minWidth: 900
      }}>
          <TableHead>
            {headerGroups.map((headerGroup, key) => <TableRow key={key} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, index) => <HeadTableCell key={index} {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                  </HeadTableCell>)}
              </TableRow>)}
          </TableHead>

          <TableBody {...getTableBodyProps()}>
            {page.map((row, index) => {
            prepareRow(row);
            return <StyledTableRow key={index} {...row.getRowProps()} sx={{
              cursor: "pointer"
            }} onClick={() => navigate("/dashboards/invoice-details")}>
                  {row.cells.map((cell, index) => <BodyTableCell key={index} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </BodyTableCell>)}
                </StyledTableRow>;
          })}
          </TableBody>
        </Table>
      </Scrollbar>

      <FlexBetween>
        <Paragraph color="text.secondary" fontSize={13}>
          Showing 1-12 of {pageCount * state.pageSize} result
        </Paragraph>

        <ButtonBase onClick={handleChange} disableRipple sx={{
        fontSize: 13,
        fontWeight: 600
      }}>
          View All
          <ArrowRightAlt sx={{
          marginLeft: 0.5
        }} />
        </ButtonBase>
      </FlexBetween>
    </Box>;
};

export default InvoiceListTable;