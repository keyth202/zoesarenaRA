import { Box, Button, Card } from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import { H5, H6, Small, Tiny } from "components/Typography";
const accountList = [{
  id: 1,
  title: "Facebook",
  body: "www.facebook.com",
  image: "/static/social-media/036-facebook.svg",
  connect: true
}, {
  id: 2,
  title: "Twitter",
  body: "www.twitter.com",
  image: "/static/social-media/008-twitter.svg",
  connect: true
}, {
  id: 3,
  title: "Instagram",
  body: "www.instagram.com",
  image: "/static/social-media/029-instagram.svg",
  connect: true
}, {
  id: 4,
  title: "Linkedin",
  body: "",
  image: "/static/social-media/027-linkedin.svg",
  connect: false
}];

const SocialAccounts = () => {
  return <Card sx={{
    padding: 3
  }}>
      <H5>Social accounts</H5>
      <Small color="text.secondary">
        Integrated features from these accounts make it easier to collaborate
        with people.
      </Small>

      <Box maxWidth={500} mt={3} mb={2}>
        {accountList.map(({
        id,
        title,
        body,
        image,
        connect
      }) => <SingleItem key={id} title={title} body={body} logo={image} connect={connect} />)}
      </Box>
    </Card>;
}; // props types


function SingleItem({
  title,
  body,
  logo,
  connect
}) {
  return <FlexBox alignItems="center" justifyContent="space-between" my={3}>
      <FlexBox alignItems="center">
        <img src={logo} alt={title} width="25px" />
        <Box ml={1}>
          <H6>{title}</H6>
          {connect ? <a href={`https://${body}`} target="_blank" rel="noreferrer" style={{
          fontSize: 12,
          display: "block",
          color: "dodgerblue",
          fontWeight: 500
        }}>
              {body}
            </a> : <Tiny fontWeight={500} display="block" color="text.disabled">
              Not Connected
            </Tiny>}
        </Box>
      </FlexBox>

      {connect ? <Button variant="contained" color="error" size="small" sx={{
      fontSize: 10,
      color: "common.white",
      padding: "7px 15px"
    }}>
          Disconnect
        </Button> : <Button variant="contained" size="small" sx={{
      fontSize: 10,
      padding: "7px 15px"
    }}>
          Connect
        </Button>}
    </FlexBox>;
}

export default SocialAccounts;