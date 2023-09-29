import { Card, useTheme } from "@mui/material";
import { H5 } from "components/Typography";
import { chartBarOptions } from "page-sections/dashboards/chart-options";
import { StyledChart } from "../learning-management/StudyTime"; // --------------------------------------------------------------------------

const chartSeries = [{
  name: "Manager",
  data: [22, 30, 46, 50, 46, 30, 22]
}, {
  name: "Marketer",
  data: [36, 40, 56, 75, 56, 40, 36]
}, {
  name: "Developer",
  data: [50, 60, 70, 90, 70, 60, 50]
}];
const chartCategories = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]; // --------------------------------------------------------------------------

const RecentJob = () => {
  const theme = useTheme(); // chart options

  const options = chartBarOptions(theme, chartCategories);
  return <Card sx={{
    padding: 3,
    height: "100%"
  }}>
      <H5 mb={1}>Recent Job Applications</H5>

      <StyledChart type="bar" options={options} series={chartSeries} height={260} />
    </Card>;
};

export default RecentJob;