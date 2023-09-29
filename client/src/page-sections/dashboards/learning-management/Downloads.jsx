import { Box, Card, LinearProgress } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import { H5, H6, Small, Tiny } from "components/Typography";
import { useTranslation } from "react-i18next";

const Downloads = () => {
  const {
    t
  } = useTranslation();
  return <Card sx={{
    padding: 3,
    height: "100%"
  }}>
      <H5 pb={1}>{t("Your Downloads")}</H5>

      <FlexBox alignItems="center" mt={2}>
        <Box width={40} mr={0.5}>
          <img src="/static/files-icon/pdf.svg" width="100%" alt="file" />
        </Box>

        <Box flexGrow={1}>
          <FlexBetween>
            <H6 fontWeight={500}>ReactJS-for-beginner.pdf</H6>
            <Small sx={{
            cursor: "pointer",
            color: "text.secondary"
          }}>
              Cancel
            </Small>
          </FlexBetween>

          <Tiny lineHeight={1.5}>4.5 MB</Tiny>

          <FlexBetween gap={2}>
            <LinearProgress variant="determinate" value={60} sx={{
            flexGrow: 1
          }} />
            <H6>60%</H6>
          </FlexBetween>
        </Box>
      </FlexBox>

      {downloadList.map(item => <FlexBetween mt={2} key={item.id}>
          <FlexBox alignItems="center">
            <Box width={40} mr={0.5}>
              <img src={item.image} width="100%" alt="file" />
            </Box>
            <Box>
              <H6 fontWeight={500}>{item.name}</H6>
              <Tiny lineHeight={1.5}>{item.size} MB</Tiny>
            </Box>
          </FlexBox>

          <Small color="primary.main" fontSize={12} sx={{
        cursor: "pointer"
      }}>
            Download
          </Small>
        </FlexBetween>)}
    </Card>;
};

const downloadList = [{
  id: 1,
  size: 3.5,
  name: "Wordpress for beginner",
  image: "/static/files-icon/pdf.svg"
}, {
  id: 2,
  size: 3.9,
  name: "Master in Node.js",
  image: "/static/files-icon/doc.svg"
}, {
  id: 3,
  size: 4.9,
  name: "Vue Zero to Hero",
  image: "/static/files-icon/doc.svg"
}];
export default Downloads;