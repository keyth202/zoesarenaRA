import { IconButton } from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBox from "components/flexbox/FlexBox";
import { H6 } from "components/Typography";
import Delete from "icons/Delete";
import Edit from "icons/Edit";
const ColumnShape = [{
  Header: "Product",
  accessor: "product",
  Cell: ({
    row: {
      original
    }
  }) => {
    return <FlexBox alignItems="center" gap={1}>
          <AppAvatar src={original.image} sx={{
        borderRadius: "10%",
        width: 50,
        height: 50
      }} />
          <H6>{original.name}</H6>
        </FlexBox>;
  }
}, {
  Header: "Producer",
  accessor: "producer"
}, {
  Header: "ID",
  accessor: "id"
}, {
  Header: "Category",
  accessor: "category"
}, {
  Header: "Cost",
  accessor: "cost",
  Cell: ({
    value
  }) => <H6 fontSize={12}>${value}</H6>
}, {
  Header: "Extra",
  accessor: "extra",
  Cell: ({
    value
  }) => <H6 fontSize={12}>{value}%</H6>
}, {
  Header: "Price",
  accessor: "price",
  Cell: ({
    value
  }) => <H6 fontSize={12}>${value}</H6>
}, {
  Header: "Priority",
  accessor: "priority"
}, {
  Header: "Edit",
  accessor: "edit",
  Cell: ({
    row
  }) => {
    const style = {
      fontSize: 19,
      transition: "color 0.3s",
      color: row.isSelected ? "white" : "text.disabled"
    };
    return <FlexBox justifyContent="center">
          <IconButton>
            <Edit sx={style} />
          </IconButton>
          <IconButton>
            <Delete sx={style} />
          </IconButton>
        </FlexBox>;
  }
}];
export default ColumnShape;