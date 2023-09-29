import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { H6, Small } from "components/Typography";
import { Fragment, useState } from "react";
import OrderDetailsModal from "../order-details-modal";
const OrderColumnShape = [{
  Header: "Order Number",
  accessor: "orderNo",
  minWidth: 130,
  Cell: ({
    value
  }) => {
    return <H6 color="text.primary">{value}</H6>;
  }
}, {
  Header: "Customer",
  accessor: "customer",
  minWidth: 150
}, {
  Header: "Date",
  accessor: "date",
  minWidth: 100
}, {
  Header: "Total",
  accessor: "total",
  minWidth: 100
}, {
  Header: "Status",
  accessor: "status",
  Cell: ({
    value
  }) => <Small sx={{
    display: "inline",
    backgroundColor: value.toLowerCase() === "unpaid" ? "error.main" : "success.main",
    color: "background.paper",
    borderRadius: 10,
    padding: ".2rem 1rem"
  }}>
        {value}
      </Small>
}, {
  Header: "Action",
  accessor: "action",
  Cell: ({
    row
  }) => {
    const [openModal, setOpenModal] = useState(false);
    return <Fragment>
          <IconButton onClick={() => setOpenModal(true)}>
            <Edit sx={{
          fontSize: 18,
          color: "text.disabled"
        }} />
          </IconButton>

          <OrderDetailsModal openModal={openModal} closeModal={() => setOpenModal(false)} data={row.original} />
        </Fragment>;
  }
}];
export default OrderColumnShape;