import { Box, Card, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import LinearProgress from "@mui/material/LinearProgress";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBox from "components/flexbox/FlexBox";
import { H5, H6, Small } from "components/Typography";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useRowSelect, useTable } from "react-table";
import ScrollBar from "simplebar-react";

const TeamProgress = () => {
  const {
    t
  } = useTranslation();
  const columns = useMemo(() => columnShape, []);
  const data = useMemo(() => fakeData, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows
  } = useTable({
    columns,
    data
  }, useRowSelect);
  return <Card sx={{
    padding: 2
  }}>
      <H5>{t("Team Progress")}</H5>
      <Small color="text.secondary" display="block" mb={2}>
        890,344 Sales
      </Small>

      <ScrollBar>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map(headerGroup => <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => <TableCell {...column.getHeaderProps({
              style: {
                minWidth: column.minWidth,
                maxWidth: column.maxWidth
              }
            })} sx={{
              fontSize: 12,
              fontWeight: 600,
              color: "text.secondary",
              paddingBottom: 0
            }}>
                    {column.render("Header")}
                  </TableCell>)}
              </TableRow>)}
          </TableHead>

          <TableBody {...getTableBodyProps()}>
            {rows.map(row => {
            prepareRow(row);
            return <TableRow {...row.getRowProps()}>
                  {row.cells.map(cell => <TableCell {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </TableCell>)}
                </TableRow>;
          })}
          </TableBody>
        </Table>
      </ScrollBar>
    </Card>;
};

const columnShape = [{
  Header: "Author",
  accessor: "author",
  minWidth: 200,
  maxWidth: 200,
  Cell: ({
    value
  }) => <FlexBox alignItems="center">
        <AppAvatar src={value.image} alt={value.name} sx={{
      borderRadius: "15%"
    }} />

        <Box ml={1}>
          <H6>{value.name}</H6>
          <Small color="text.secondary" display="block">
            {value.skill}
          </Small>
        </Box>
      </FlexBox>
}, {
  Header: "Company",
  accessor: "company",
  minWidth: 150,
  maxWidth: 150,
  Cell: ({
    value
  }) => <>
        <H6>{value.name}</H6>
        <Small color="text.secondary" display="block">
          {value.service}
        </Small>
      </>
}, {
  Header: "Progress",
  accessor: "progress",
  minWidth: 150,
  maxWidth: 150,
  Cell: ({
    value
  }) => {
    return <LinearProgress variant="determinate" value={value} sx={{
      height: 5,
      borderRadius: 5
    }} />;
  }
}, {
  Header: "Action",
  accessor: "action",
  Cell: props => {
    const navigate = useNavigate();
    return <ButtonBase sx={{
      padding: "5px 10px",
      borderRadius: "8px",
      color: "text.secondary",
      backgroundColor: "action.hover"
    }} onClick={() => navigate("/dashboard/project-details")}>
          View
        </ButtonBase>;
  }
}];
const fakeData = [{
  id: 1,
  author: {
    name: "Brad Simmons",
    skill: "HTML, JS, ReactJS",
    image: "/static/avatar/001-man.svg"
  },
  company: {
    name: "Intertico",
    service: "Web, UI/UX Design"
  },
  progress: 90
}, {
  id: 2,
  author: {
    name: "Selena Williams",
    skill: "HTML, JS, VueJS",
    image: "/static/avatar/002-girl.svg"
  },
  company: {
    name: "Web Devs",
    service: "Web, Mobile Apps"
  },
  progress: 65
}, {
  id: 3,
  author: {
    name: "Steve Jobs",
    skill: "Python, Django",
    image: "/static/avatar/005-man-1.svg"
  },
  company: {
    name: "PyCharm",
    service: "ML, DS"
  },
  progress: 78
}];
export default TeamProgress;