import { Box } from "@mui/system";
import FlexBox from "components/flexbox/FlexBox";
import { H6, Small } from "components/Typography";
import { useTranslation } from "react-i18next";

const ActivityListItem = ({
  activity
}) => {
  const {
    title,
    Icon,
    date
  } = activity;
  const {
    t
  } = useTranslation();
  return <FlexBox marginBottom={2} sx={{
    "&:last-child": {
      mb: 0
    }
  }}>
      <Box marginRight={1.5}>
        <Box sx={{
        width: 30,
        height: 30,
        display: "flex",
        marginTop: "5px",
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "action.hover"
      }}>
          <Icon sx={{
          color: "text.secondary",
          fontSize: 16
        }} />
        </Box>
      </Box>
      <Box>
        <H6>{t(title)}</H6>
        <Small color="text.disabled">{date}</Small>
      </Box>
    </FlexBox>;
};

export default ActivityListItem;