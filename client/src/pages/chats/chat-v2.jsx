import { KeyboardArrowLeft, KeyboardArrowRight, MoreHoriz, Send } from "@mui/icons-material";
import { Avatar, Box, ButtonBase, Card, Divider, Drawer, Grid, IconButton, InputBase, styled, useMediaQuery } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import SearchInput from "components/input-fields/SearchInput";
import Scrollbar from "components/ScrollBar";
import { H4, H6, Small, Tiny } from "components/Typography";
import AttachIcon from "icons/AttachIcon";
import EmojiIcon from "icons/EmojiIcon";
import MicrophoneIcon from "icons/MicrophoneIcon";
import AvatarBadge from "page-sections/chats/chat-v2/AvatarBadge";
import ConversationBox from "page-sections/chats/chat-v2/ConversationBox";
import IncomingMsg from "page-sections/chats/chat-v2/IncomingMsg";
import ListItem from "page-sections/chats/chat-v2/ListItem";
import OutgoingMsg from "page-sections/chats/chat-v2/OutgoingMsg";
import { Fragment, useState } from "react"; // styled components

const LeftButton = styled(Box)(({
  theme,
  screen = "md"
}) => ({
  top: 110,
  padding: 5,
  display: "flex",
  cursor: "pointer",
  alignItems: "center",
  position: "absolute",
  justifyContent: "center",
  backgroundColor: theme.palette.primary.main,
  zIndex: 1,
  [theme.breakpoints.up(screen)]: {
    display: "none"
  }
}));

const Chat = () => {
  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(false);
  const downMd = useMediaQuery(theme => theme.breakpoints.down("md"));
  const downLg = useMediaQuery(theme => theme.breakpoints.down("lg"));
  const leftContent = <Fragment>
      <SearchInput placeholder="Find Conversation..." />
      <Card sx={{
      marginTop: 3
    }}>
        <FlexBox flexDirection="column" alignItems="center" py={4}>
          <AvatarBadge image="/static/avatar/048-boy-5.svg" sx={{
          width: 60,
          height: 60,
          backgroundColor: "primary.100"
        }} />
          <H4 fontWeight={600} mt={2}>
            Elon Mask
          </H4>
          <Tiny display="block" color="text.secondary" fontWeight={500}>
            My Account
          </Tiny>
        </FlexBox>

        <Divider />

        <Box p={2}>
          <FlexBetween>
            <Small fontWeight={600}>Online now</Small>
            <Tiny fontWeight={500} color="text.secondary" sx={{
            padding: "3px 10px",
            borderRadius: "10px",
            backgroundColor: "action.hover"
          }}>
              12
            </Tiny>
          </FlexBetween>

          <FlexBetween mt={2}>
            {onlineNowList.map((item, index) => <AvatarBadge key={index} badgeSize={6} image={item.image} badgeColor={item.offline ? "error" : "success"} sx={{
            width: 28,
            height: 28,
            backgroundColor: "secondary.red"
          }} />)}
          </FlexBetween>
        </Box>

        <Divider />

        <Box mt={2}>
          <H6 px={2} mb={1}>
            Recent Chats
          </H6>

          <Scrollbar style={{
          height: 300
        }}>
            {conversationList.map((item, index) => <ConversationBox key={index} conversation={item} />)}
          </Scrollbar>
        </Box>
      </Card>
    </Fragment>;
  const rightContent = <Card sx={{
    height: "100%"
  }}>
      <FlexBox flexDirection="column" alignItems="center" py={4}>
        <Avatar src="/static/avatar/001-man.svg" sx={{
        width: 60,
        height: 60,
        backgroundColor: "primary.100"
      }} />
        <H4 fontWeight={600} mt={2}>
          Tom Cruise
        </H4>
        <Tiny display="block" color="text.secondary" fontWeight={500}>
          UI Designer
        </Tiny>
      </FlexBox>

      <Divider />

      <FlexBetween p={2}>
        <H6>Shared FIles</H6>
        <ButtonBase sx={{
        color: "secondary.red"
      }} disableRipple>
          See all
        </ButtonBase>
      </FlexBetween>

      <Scrollbar style={{
      height: 200,
      paddingLeft: 16,
      paddingRight: 16
    }}>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </Scrollbar>

      <Divider />

      <FlexBetween p={2}>
        <H6>Shared Links</H6>
        <ButtonBase sx={{
        color: "secondary.red"
      }} disableRipple>
          See all
        </ButtonBase>
      </FlexBetween>

      <Scrollbar style={{
      height: 200,
      paddingLeft: 16,
      paddingRight: 16
    }}>
        <ListItem hideIcon />
        <ListItem hideIcon />
        <ListItem hideIcon />
        <ListItem hideIcon />
        <ListItem hideIcon />
        <ListItem hideIcon />
      </Scrollbar>
    </Card>;
  return <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        {downMd ? <Drawer anchor="left" open={openLeft} onClose={() => setOpenLeft(false)}>
            <Box width={280} padding={2}>
              {leftContent}
            </Box>
          </Drawer> : <Grid item lg={3} md={5}>
            {leftContent}
          </Grid>}

        <Grid item lg={6} md={7} xs={12}>
          <Card sx={{
          position: "relative"
        }}>
            <LeftButton screen="md" onClick={() => setOpenLeft(true)}>
              <KeyboardArrowLeft fontSize="small" color="disabled" />
            </LeftButton>

            <LeftButton screen="lg" onClick={() => setOpenRight(true)} sx={{
            right: 0
          }}>
              <KeyboardArrowRight fontSize="small" color="disabled" />
            </LeftButton>

            <FlexBetween px={3} py={4}>
              <FlexBox alignItems="center">
                <Avatar src="/static/avatar/001-man.svg" sx={{
                backgroundColor: "primary.200"
              }} />
                <Box marginLeft={1}>
                  <H4>Tom Cruise</H4>
                  <Tiny fontWeight={500} display="block" color="text.secondary">
                    Last seen 1 day ago
                  </Tiny>
                </Box>
              </FlexBox>

              <IconButton>
                <MoreHoriz fontSize="small" color="disabled" />
              </IconButton>
            </FlexBetween>

            <Divider />

            <Scrollbar style={{
            height: 500
          }}>
              <Box p={3}>
                <FlexBox justifyContent="center">
                  <Tiny px={1.5} py={0.2} display="block" fontWeight={500} borderRadius="10px" color="text.secondary" bgcolor="action.hover">
                    August 21
                  </Tiny>
                </FlexBox>

                <IncomingMsg />
                <OutgoingMsg />
                <IncomingMsg />
                <OutgoingMsg />
                <IncomingMsg />
                <OutgoingMsg />
                <IncomingMsg />
                <OutgoingMsg />
              </Box>
            </Scrollbar>

            <Divider />

            <FlexBetween p={3}>
              <InputBase placeholder="Write a message..." startAdornment={<IconButton sx={{
              border: 1,
              marginRight: 1.5,
              borderColor: "secondary.300"
            }}>
                    <AttachIcon sx={{
                fontSize: 18
              }} />
                  </IconButton>} sx={{
              width: "100%",
              fontSize: 10,
              fontWeight: 500,
              color: "text.secondary"
            }} endAdornment={<Fragment>
                    <IconButton>
                      <EmojiIcon sx={{
                  fontSize: 18
                }} />
                    </IconButton>
                    <IconButton>
                      <MicrophoneIcon sx={{
                  fontSize: 18
                }} />
                    </IconButton>
                  </Fragment>} />

              <IconButton sx={{
              marginLeft: 1.5,
              backgroundColor: "primary.main",
              "&:hover": {
                backgroundColor: "primary.main"
              }
            }}>
                <Send sx={{
                fontSize: 18,
                color: "background.paper"
              }} />
              </IconButton>
            </FlexBetween>
          </Card>
        </Grid>

        {downLg ? <Drawer anchor="right" open={openRight} onClose={() => setOpenRight(false)}>
            <Box width={280} padding={2}>
              {rightContent}
            </Box>
          </Drawer> : <Grid item md={3}>
            {rightContent}
          </Grid>}
      </Grid>
    </Box>;
};

const onlineNowList = [{
  image: "/static/avatar/001-man.svg"
}, {
  image: "/static/avatar/003-boy.svg",
  offline: true
}, {
  image: "/static/avatar/004-woman.svg"
}, {
  image: "/static/avatar/010-girl-1.svg",
  offline: true
}, {
  image: "/static/avatar/020-man-4.svg"
}, {
  image: "/static/avatar/026-girl-4.svg",
  offline: true
}];
const conversationList = [{
  name: "Ella knox",
  lastMsg: "Hi. Our deadlines are.....",
  image: "/static/avatar/070-man-15.svg",
  time: "11:50pm"
}, {
  name: "Sean mila",
  lastMsg: "Hi. Our deadlines are.....",
  image: "/static/avatar/069-woman-15.svg",
  time: "11:40pm"
}, {
  name: "Taylor Swift",
  lastMsg: "Hi. Our deadlines are.....",
  image: "/static/avatar/067-man-14.svg",
  time: "11:30pm"
}, {
  name: "Ella knox",
  lastMsg: "Hi. Our deadlines are.....",
  image: "/static/avatar/070-man-15.svg",
  time: "11:50pm"
}, {
  name: "Sean mila",
  lastMsg: "Hi. Our deadlines are.....",
  image: "/static/avatar/069-woman-15.svg",
  time: "11:40pm"
}, {
  name: "Taylor Swift",
  lastMsg: "Hi. Our deadlines are.....",
  image: "/static/avatar/067-man-14.svg",
  time: "11:30pm"
}];
export default Chat;