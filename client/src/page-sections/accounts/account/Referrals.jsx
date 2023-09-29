import { ButtonBase, Card, Divider, Grid, InputBase, Stack, styled, useTheme } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";
import AppSelect from "components/AppSelect";
import FlexBetween from "components/flexbox/FlexBetween";
import Scrollbar from "components/ScrollBar";
import { H5, Tiny } from "components/Typography";
import ChartIcon from "icons/ChartIcon";
import CheckMarkCircleOutlined from "icons/CheckMarkCircleOutlined";
import DollarOutlined from "icons/DollarOutlined";
import SignIn from "icons/SignIn";
import numeral from "numeral";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { lightTheme } from "../../../constants";
import Alert from "./common/Alert";
import { BodyTableCellV2, HeadTableCellV2 } from "./common/StyledComponents";
const EarningBox = styled(Box)(({
  theme
}) => ({
  paddingTop: 8,
  paddingBottom: 8,
  textAlign: "center",
  borderRadius: "8px",
  border: `1px solid ${lightTheme(theme) ? theme.palette.grey[300] : theme.palette.divider}`
}));
const BodyTableCell = styled(BodyTableCellV2)(() => ({
  "&:first-of-type": {
    fontWeight: 500
  },
  "&:last-of-type": {
    maxWidth: 60
  }
}));
const HeadTableCell = styled(HeadTableCellV2)(() => ({
  "&:last-of-type": {
    maxWidth: 60
  }
}));

const Referrals = () => {
  const theme = useTheme();
  const [referLink] = useState("https://Example.com/reffer/?refid=345re66787k8");
  const earningList = [{
    id: 1,
    amount: 85460,
    Icon: ChartIcon,
    name: "Net Earnings",
    iconColor: theme.palette.primary.main
  }, {
    id: 2,
    amount: 44550,
    Icon: DollarOutlined,
    name: "Balance",
    iconColor: theme.palette.success.main
  }, {
    id: 3,
    amount: 4550,
    Icon: CheckMarkCircleOutlined,
    name: "Avg Deal Size",
    iconColor: theme.palette.error.main
  }, {
    id: 4,
    amount: 4550,
    Icon: SignIn,
    name: "Referral Signup",
    iconColor: theme.palette.info.main
  }];
  return <Card sx={{
    pb: 2
  }}>
      <H5 padding={3}>Referrals</H5>
      <Divider />

      <Box padding={3}>
        <Grid container spacing={3} mb={3}>
          {earningList.map(item => <Grid item md={3} sm={6} xs={12} key={item.id}>
              <EarningBox key={item.id}>
                <item.Icon sx={{
              color: item.iconColor
            }} />
                <H5 my={0.5}>${numeral(item.amount).format("0,0")}</H5>
                <Tiny fontWeight={500}>{item.name}</Tiny>
              </EarningBox>
            </Grid>)}
        </Grid>

        <Alert btnText="Withdraw $44,550" title="We Need Your Attention" description="Writing headlines for blog posts is as much an art as it is a science, and warrants its own post, but for now, all I’d advise is experimenting what works for your audience, especially if it’s not resonating with your audience" />

        <Box py={3}>
          <Grid container spacing={2}>
            <Grid item lg={5} xs={12}>
              <H5 mb={0.5}>Your Referral Link</H5>
              <Tiny lineHeight={1.8} fontWeight={500}>
                Plan your blog post by choosing a topic, creating an outline
                conduct research, and checking facts
              </Tiny>
            </Grid>
            <Grid item lg={7} xs={12}>
              <Stack direction="row" spacing={2}>
                <InputBase value={referLink} disabled sx={{
                fontSize: 12,
                maxWidth: 350,
                width: "100%",
                fontWeight: 500,
                padding: "5px 12px",
                backgroundColor: lightTheme(theme) ? "primary.100" : "divider"
              }} />
                <CopyToClipboard text={referLink} onCopy={() => true}>
                  <ButtonBase sx={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: "text.secondary",
                  padding: "0.6rem 1.5rem",
                  backgroundColor: lightTheme(theme) ? "primary.100" : "divider" //   flexGrow: 1

                }}>
                    Copy Link
                  </ButtonBase>
                </CopyToClipboard>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <FlexBetween px={3} pb={2}>
        <H5>Referred Users</H5>

        <AppSelect value="2021" onChange={() => {}}>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </AppSelect>
      </FlexBetween>

      <Scrollbar autoHide={false}>
        <Table sx={{
        minWidth: 800
      }}>
          <TableHead sx={{
          backgroundColor: lightTheme(theme) ? "primary.100" : "divider"
        }}>
            <TableRow>
              <HeadTableCell>Order ID</HeadTableCell>
              <HeadTableCell>User</HeadTableCell>
              <HeadTableCell>Date</HeadTableCell>
              <HeadTableCell>Bonus</HeadTableCell>
              <HeadTableCell>Profit</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {referList.map(item => <TableRow key={item.orderId}>
                <BodyTableCell>{item.orderId}</BodyTableCell>
                <BodyTableCell>{item.user}</BodyTableCell>
                <BodyTableCell>{item.date}</BodyTableCell>
                <BodyTableCell>{item.bonus}%</BodyTableCell>
                <BodyTableCell sx={{
              color: "success.main"
            }}>
                  ${numeral(item.profit).format("0,0.00")}
                </BodyTableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>;
};

const referList = [{
  orderId: "678935899",
  user: "Marcus Harris",
  date: "Nov 12, 2021",
  bonus: 15,
  profit: 1200
}, {
  orderId: "678935900",
  user: "Robert Smith",
  date: "Nov 14, 2021",
  bonus: 53,
  profit: 2400
}, {
  orderId: "678935901",
  user: "Williams Brown",
  date: "Nov 15, 2021",
  bonus: 76,
  profit: 1200
}, {
  orderId: "678935902",
  user: "Robert Smith",
  date: "Nov 14, 2021",
  bonus: 53,
  profit: 2400
}];
export default Referrals;