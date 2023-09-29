import AppAvatar from "components/avatars/AppAvatar";
import FlexBox from "components/flexbox/FlexBox";
import { H6, Small, Tiny } from "components/Typography";
const InvoiceColumnShape = [{
  Header: "Client",
  accessor: "client",
  minWidth: 200,
  Cell: ({
    row
  }) => {
    const {
      avatar,
      name,
      position
    } = row.original;
    return <FlexBox alignItems="center">
          <AppAvatar src={avatar} alt={name} sx={{
        mr: 1
      }} />
          <FlexBox flexDirection="column">
            <H6 color="text.primary">{name}</H6>
            <Tiny color="text.disabled">{position}</Tiny>
          </FlexBox>
        </FlexBox>;
  }
}, {
  Header: "Name",
  accessor: "name",
  minWidth: 200
}, {
  Header: "Date",
  accessor: "date",
  minWidth: 150
}, {
  Header: "Amount",
  accessor: "amount",
  minWidth: 150,
  Cell: ({
    value
  }) => <Small>${value}</Small>
}, {
  Header: "Status",
  accessor: "status",
  minWidth: 130,
  maxWidth: 130,
  Cell: ({
    value
  }) => <Small sx={{
    backgroundColor: value.toLowerCase() === "paid" ? "success.main" : "error.main",
    color: "background.paper",
    borderRadius: 10,
    padding: ".2rem 1rem"
  }}>
        {value}
      </Small>
}];
export default InvoiceColumnShape;