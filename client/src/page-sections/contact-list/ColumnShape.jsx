import { Stack } from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import { H6 } from "components/Typography";
const columnShape = [{
  Header: "Name",
  accessor: "name",
  Cell: ({
    row
  }) => {
    return <Stack direction="row" alignItems="center" spacing={1}>
          <AppAvatar src={row.original.avatar} sx={{
        borderRadius: "20%"
      }} />
          <H6 fontSize={12}>{row.original.name}</H6>
        </Stack>;
  }
}, {
  Header: "Position",
  accessor: "position"
}, {
  Header: "Company",
  accessor: "company"
}, {
  Header: "Email",
  accessor: "email"
}, {
  Header: "Phone",
  accessor: "phone"
} // {
//   Header: "Action",
//   accessor: "edit",
//   Cell: (props: any) => {
//     return (
//       <IconButton component="span" disableRipple>
//         <MoreVertical sx={{ color: "text.disabled" }} />
//       </IconButton>
//     );
//   },
// },
];
export default columnShape;