import { Box, Card, styled, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import Scrollbar from "components/ScrollBar";
import { H5, H6, Tiny } from "components/Typography";
import { useTranslation } from "react-i18next"; // Styled components

const HeadTableCell = styled(TableCell)(({
  theme
}) => ({
  fontWeight: 600,
  paddingBottom: 8,
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&:last-of-type": {
    textAlign: "right"
  }
}));
const BodyTableCell = styled(TableCell)(() => ({
  padding: "0.5rem 0",
  paddingLeft: "1rem",
  "&:first-of-type": {
    minWidth: 200
  },
  "&:nth-of-type(2)": {
    minWidth: 150
  },
  "&:last-of-type": {
    textAlign: "right"
  }
}));

const CourseStatus = () => {
  const {
    t
  } = useTranslation();
  return <Card sx={{
    padding: 3,
    height: "100%"
  }}>
      <H5>{t("Course Status")}</H5>

      <Scrollbar autoHide={false}>
        <Table>
          <TableHead>
            <TableRow>
              <HeadTableCell>Name</HeadTableCell>
              <HeadTableCell>Category</HeadTableCell>
              <HeadTableCell>Earned</HeadTableCell>
              <HeadTableCell>Visitor</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {courseList.map((item, index) => <TableRow key={index}>
                <BodyTableCell>
                  <FlexBox alignItems="center">
                    <img src={item.image} alt="product title" width="40px" />
                    <Box ml={1}>
                      <H6>{item.name}</H6>
                      <Tiny mt={0.5}>{item.description}</Tiny>
                    </Box>
                  </FlexBox>
                </BodyTableCell>
                <BodyTableCell>{item.category}</BodyTableCell>
                <BodyTableCell>${item.earned}.00</BodyTableCell>
                <BodyTableCell>{item.visitor}</BodyTableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>;
};

const courseList = [{
  earned: 19.0,
  visitor: 1500,
  category: "Graphic Template",
  name: "Flat Line Illustration",
  image: "/static/courses/1.png",
  description: "Sketch App, Adobe Illustration"
}, {
  earned: 45.0,
  visitor: 1200,
  name: "React Live",
  category: "Development",
  image: "/static/courses/2.png",
  description: "Visual Studio, React"
}, {
  earned: 35.0,
  visitor: 1100,
  category: "Music",
  name: "Guitar Lessons",
  description: "Squarespace",
  image: "/static/courses/3.png"
}, {
  earned: 34.0,
  visitor: 1300,
  category: "Editing",
  name: "Video Editing",
  description: "After Effects",
  image: "/static/courses/4.png"
}];
export default CourseStatus;