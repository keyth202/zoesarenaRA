import { Button, Card, IconButton, Stack } from "@mui/material";
import { Box } from "@mui/system";
import AppModal from "components/AppModal";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBetween from "components/flexbox/FlexBetween";
import { H5, Small, Tiny } from "components/Typography";
import Add from "icons/Add";
import Birthday from "icons/Birthday";
import Call from "icons/Call";
import City from "icons/City";
import Edit from "icons/Edit";
import Email from "icons/Email";
import Facebook from "icons/Facebook";
import Flag from "icons/Flag";
import Messenger from "icons/Messenger";
import MoreHorizontal from "icons/MoreHorizontal";
import ShareVs from "icons/ShareVs";
import Skype from "icons/Skype";
import User from "icons/User";
import Whatsapp from "icons/Whatsapp";
import { useState } from "react";
import AddContactForm from "./AddContactForm"; // --------------------------------------------------

// --------------------------------------------------
const ContactDetails = ({
  data
}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => setOpenModal(false);

  return <Card sx={{
    padding: 3,
    height: "100%",
    backgroundColor: "action.hover"
  }}>
      <Button fullWidth variant="contained" startIcon={<Add />} onClick={() => setOpenModal(true)}>
        Add Contact
      </Button>

      <AppModal open={openModal} handleClose={handleCloseModal}>
        <AddContactForm handleCancel={handleCloseModal} />
      </AppModal>

      <FlexBetween mt={4}>
        <IconButton>
          <Edit sx={{
          color: "text.disabled"
        }} />
        </IconButton>

        <IconButton>
          <MoreHorizontal sx={{
          color: "text.disabled"
        }} />
        </IconButton>
      </FlexBetween>

      <Stack alignItems="center">
        <AppAvatar src={data.avatar} sx={{
        width: 120,
        height: 120,
        backgroundColor: "white"
      }} />
        <H5 mt={2}>{data.name}</H5>
        <Tiny mt={0.5}>{data.position}</Tiny>
      </Stack>

      <Box mt={4}>
        <ListItem Icon={Birthday} title="June 3, 1996" />
        <ListItem Icon={User} title="Female" />
        <ListItem Icon={City} title="New Company L.T.D." />
        <ListItem Icon={Email} title="carrie-page@gmail.com" />
        <ListItem Icon={Call} title="(01) 4563 4556" />
        <ListItem Icon={ShareVs} title="http://carriepage.com" />
        <ListItem Icon={Flag} title="6956 Henderson Park" />
      </Box>

      <Box mt={2}>
        <ListItem Icon={Messenger} title="(01) 4563 4556" />
        <ListItem Icon={Facebook} title="facebook-carrie-page" />
        <ListItem Icon={Skype} title="carrie-page" />
        <ListItem Icon={Whatsapp} title="+1 (345) 556-2248" />
      </Box>
    </Card>;
}; // ----------------------------------------


// ----------------------------------------
function ListItem({
  Icon,
  title
}) {
  return <Stack direction="row" spacing={1.5} pb={2} alignItems="center">
      <Icon sx={{
      color: "text.disabled",
      fontSize: 20
    }} />
      <Small fontSize={12}>{title}</Small>
    </Stack>;
}

export default ContactDetails;