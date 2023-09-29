import { Apps } from "@mui/icons-material";
import { Avatar, Badge, Box, useTheme, styled, IconButton } from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import { H6, Tiny } from "components/Typography";
import { Fragment, useRef, useState } from "react";
import PopoverLayout from "./PopoverLayout"; // dummy  data

const services = [{
  id: "5e8883f1b51cc1956a5a1ec0",
  title: "Slack",
  body: "Email collaboration software",
  image: "/static/connect-accounts/slack.svg"
}, {
  id: "5e8883f7ed1486d665d8be1e",
  title: "Github",
  body: "Email collaboration software",
  image: "/static/connect-accounts/github.svg"
}, {
  id: "5e8883fca0e8612044248ecf",
  title: "Stack Overflow",
  body: "Email collaboration software",
  image: "/static/connect-accounts/stack-overflow.svg"
}];
const StyledIconButton = styled(IconButton)(({
  theme
}) => ({
  "&:hover": {
    backgroundColor: theme.palette.action.hover
  }
}));

const ServicePopover = () => {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  return <Fragment>
      <StyledIconButton ref={anchorRef} onClick={() => setOpen(true)}>
        <Badge color="error" badgeContent={0}>
          <Apps sx={{
          color: "text.disabled"
        }} />
        </Badge>
      </StyledIconButton>

      <PopoverLayout hiddenViewButton popoverOpen={open} anchorRef={anchorRef} title="Web apps & services" popoverClose={() => setOpen(false)}>
        {services.map(service => <ListItem service={service} key={service.id} />)}
      </PopoverLayout>
    </Fragment>;
}; // -----------------------------------------------------------------


function ListItem({
  service
}) {
  const theme = useTheme();
  const colorbg = theme.palette.mode === "light" ? "secondary.light" : "divider";
  return <FlexBox p={2} alignItems="center" sx={{
    cursor: "pointer",
    "&:hover": {
      backgroundColor: colorbg
    }
  }}>
      <Avatar src={service.image} sx={{
      width: 35,
      height: 35
    }} />

      <Box ml={2}>
        <H6>{service.title}</H6>
        <Tiny display="block" fontWeight={500} color="text.disabled">
          {service.body}
        </Tiny>
      </Box>
    </FlexBox>;
}

export default ServicePopover;