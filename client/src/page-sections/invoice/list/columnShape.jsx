import { IconButton, Stack } from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import { Paragraph, Small } from "components/Typography";
import { format } from "date-fns";
import MoreHorizontal from "icons/MoreHorizontal";
const InvoiceColumnShape = [{
  Header: "Invoice id",
  accessor: "invoiceId"
}, {
  Header: "Name",
  accessor: "name",
  Cell: ({
    row
  }) => {
    const {
      avatar,
      name
    } = row.original;
    return <Stack direction="row" spacing={1} alignItems="center">
          <AppAvatar src={avatar} alt={name} />
          <Paragraph fontSize={13} color="text.secondary">
            {name}
          </Paragraph>
        </Stack>;
  }
}, {
  Header: "Email",
  accessor: "email",
  Cell: ({
    value
  }) => <Small color="text.secondary">{value}</Small>
}, {
  Header: "Date",
  accessor: "date",
  Cell: ({
    value
  }) => <Small color="text.secondary">{format(value, "MMM dd, yyyy")}</Small>
}, {
  Header: "Status",
  accessor: "status",
  Cell: ({
    value
  }) => <Small sx={{
    width: 100,
    fontSize: 10,
    color: "#fff",
    borderRadius: "4px",
    textAlign: "center",
    padding: ".2rem 1rem",
    backgroundColor: value === "Complete" ? "success.main" : "error.main"
  }}>
        {value}
      </Small>
}, {
  Header: "Edit",
  accessor: "edit",
  Cell: ({
    value
  }) => <IconButton sx={{
    padding: 0
  }}>
        <MoreHorizontal sx={{
      color: "text.disabled"
    }} />
      </IconButton>
}];
export default InvoiceColumnShape;