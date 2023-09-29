import { Box, Grid, Table, styled, TableRow, useTheme, TableBody, TableHead, TableCell } from "@mui/material";
import PriceCard from "page-sections/pricing/PriceCard";
import { H1, H6 } from "components/Typography";
/// styled components
const TableHeadCell = styled(TableCell)(({
  theme
}) => ({
  fontSize: 21,
  fontWeight: 700,
  borderBottomColor: theme.palette.divider,
  "&:not(:first-of-type)": {
    textAlign: "center"
  }
}));
const TableBodyCell = styled(TableCell)(({
  theme
}) => ({
  fontWeight: 500,
  color: theme.palette.text.secondary,
  borderBottomColor: theme.palette.divider,
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:first-of-type)": {
    textAlign: "center"
  },
  "&:last-of-type": {
    borderBottom: `1px solid ${theme.palette.divider}`
  }
}));

const Pricing = () => {
  const theme = useTheme();
  return <Box py={4}>
      <Box textAlign="center" pb={6}>
        <H1 fontSize={36} fontWeight={700}>
          A Great Experience is Priceless.
        </H1>
        <H6 color="text.secondary" fontWeight={500}>
          A better experience for developers creates a better experience for
          users.
        </H6>
      </Box>

      <Box pb={8}>
        <Grid container spacing={3}>
          {priceList.map((item, index) => <Grid item lg={4} md={6} xs={12} key={index}>
              <PriceCard item={item} />
            </Grid>)}
        </Grid>
      </Box>

      <Box pb={6}>
        <Box textAlign="center" py={4}>
          <H1 fontSize={36} fontWeight={700}>
            Compare Plans
          </H1>
          <H6 color="text.secondary" fontWeight={500}>
            A better experience for developers creates a better experience for
            users.
          </H6>
        </Box>

        <Box sx={{
        [theme.breakpoints.down("sm")]: {
          overflowX: "auto"
        }
      }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeadCell>Features</TableHeadCell>
                <TableHeadCell>Hobby</TableHeadCell>
                <TableHeadCell>Professional</TableHeadCell>
                <TableHeadCell>Enterprise</TableHeadCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {tableData.map((item, index) => <TableRow key={index}>
                  <TableBodyCell>{item[0]}</TableBodyCell>
                  <TableBodyCell>{item[1]}</TableBodyCell>
                  <TableBodyCell>{item[2]}</TableBodyCell>
                  <TableBodyCell>{item[3]}</TableBodyCell>
                </TableRow>)}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Box>;
};

const priceList = [{
  title: "Hobby",
  subTitle: "Free for non-commercial sites",
  list: ["For non-commercial & hobby sites", "Deploy from CLI or personal git integrations", "Built-in CI/CD", "Previews for every git push", "Email support"],
  btnText: "Deploy Hobby Project"
}, {
  title: "Professional",
  subTitle: "$20/mo per member",
  list: ["For non-commercial & hobby sites", "Deploy from CLI or personal git integrations", "Built-in CI/CD", "Previews for every git push", "Email support"],
  btnText: "Start free 14 day pro trial"
}, {
  title: "Enterprise",
  subTitle: "Suited to your business",
  list: ["Maximize developer productivity", "SSO/SAML", "Scaled bandwidth pricing", "Isolated infrastructure for the fastest builds & zero queues", "Dedicated support manager & SLAs"],
  btnText: "Contact Sales"
}];
const tableData = [["Bandwidth", "100 GB", "1 TB", "Custom"], ["Serverless Function Execution", "100 GB", "1,000 GB", "Custom"], ["Serverless Function Execution Timeout", "5 seconds", "15 seconds", "30 seconds"], ["Image Optimization", "1000", "5000", "Custom"], ["Multi-Region Serverless Functions", "", "", "Custom"]];
export default Pricing;