import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
const columnShape = [{
  Header: "Avatar",
  accessor: "avatar",
  Cell: ({
    value
  }) => <AppAvatar src={value} sx={{
    borderRadius: "20%"
  }} />
}, {
  Header: "Name",
  accessor: "name"
}, {
  Header: "Company",
  accessor: "company"
}, {
  Header: "Role",
  accessor: "role"
}, {
  Header: "Edit",
  accessor: "edit",
  Cell: props => {
    return <IconButton>
          <Edit sx={{
        color: "text.disabled",
        fontSize: 18
      }} />
        </IconButton>;
  }
}];
export default columnShape;