import { Button, Card, Divider, Stack, styled, useTheme } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";
import AppSelect from "components/AppSelect";
import FlexBetween from "components/flexbox/FlexBetween";
import Scrollbar from "components/ScrollBar";
import { H5, Span, Tiny } from "components/Typography";
import ChartIcon from "icons/ChartIcon";
import DownloadTo from "icons/DownloadTo";
import ReceiptOutlined from "icons/ReceiptOutlined";
import ChartDonut from "icons/sidebar/ChartDonutIcon";
import numeral from "numeral";
import { lightTheme } from "../../../constants";
import { BodyTableCellV2, HeadTableCellV2 } from "./common/StyledComponents"; // styled components

const EarningBoxWrapper = styled(FlexBetween)(({
  theme
}) => ({
  [theme.breakpoints.down(555)]: {
    flexDirection: "column",
    "& > .MuiButton-root": {
      width: "100%"
    }
  },
  [theme.breakpoints.down(706)]: {
    "& > .MuiButton-root": {
      marginTop: 16
    }
  }
}));
const StyledStack = styled(Stack)(({
  theme
}) => ({
  [theme.breakpoints.down(555)]: {
    width: "100%",
    flexDirection: "column",
    "& > .MuiBox-root": {
      marginLeft: 0,
      width: "100%",
      marginBottom: 16
    }
  }
}));
const EarningBox = styled(Box)(({
  theme
}) => ({
  width: 130,
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
    maxWidth: 130
  }
}));
const HeadTableCell = styled(HeadTableCellV2)(() => ({
  "&:last-of-type": {
    maxWidth: 130
  }
}));

const Statements = () => {
  const theme = useTheme();
  const earningList = [{
    id: 1,
    amount: 4550,
    Icon: ChartIcon,
    name: "Net Earnings",
    iconColor: theme.palette.primary.main
  }, {
    id: 2,
    amount: 80,
    Icon: ChartDonut,
    name: "Change",
    iconColor: theme.palette.warning.main
  }, {
    id: 3,
    amount: 2800,
    Icon: ReceiptOutlined,
    name: "Fees",
    iconColor: theme.palette.info.main
  }];
  return <Card sx={{
    pb: 2
  }}>
      <H5 padding={3}>Earnings</H5>
      <Divider />

      <Box padding={3}>
        <Tiny fontWeight={500}>
          Last <Span color="primary.main">15</Span> day earnings calculated
        </Tiny>

        <EarningBoxWrapper flexWrap="wrap" pt={2}>
          <StyledStack direction="row" flexWrap="wrap" spacing={2}>
            {earningList.map(item => <EarningBox key={item.id}>
                <item.Icon sx={{
              color: item.iconColor
            }} />
                <H5 my={0.5}>${numeral(item.amount).format("0,0")}</H5>
                <Tiny fontWeight={500}>{item.name}</Tiny>
              </EarningBox>)}
          </StyledStack>

          <Button variant="contained">Withdraw $4,550</Button>
        </EarningBoxWrapper>
      </Box>

      <FlexBetween px={3} py={2}>
        <H5>Statement</H5>

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
              <HeadTableCell>Date</HeadTableCell>
              <HeadTableCell>Order ID</HeadTableCell>
              <HeadTableCell>Order Details</HeadTableCell>
              <HeadTableCell>Amount</HeadTableCell>
              <HeadTableCell>Invoice</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {[1, 2, 3, 4, 5, 6].map(item => <TableRow key={item}>
                <BodyTableCell>Nov 12, 2021</BodyTableCell>
                <BodyTableCell>202745788</BodyTableCell>
                <BodyTableCell>The Icon of full icon set</BodyTableCell>
                <BodyTableCell>$650</BodyTableCell>
                <BodyTableCell>
                  <Button variant="contained" disabled={item === 1} startIcon={<DownloadTo />}>
                    Download
                  </Button>
                </BodyTableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>;
};

export default Statements;