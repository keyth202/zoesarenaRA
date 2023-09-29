import { alpha, Box, Card, styled } from "@mui/material";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import { H2, H4 } from "components/Typography";
import { useTranslation } from "react-i18next"; // ------------------------------------------------------------

// ------------------------------------------------------------
const StyledCard = styled(Card)(() => ({
  height: "100%",
  display: "flex",
  padding: "1.5rem",
  alignItems: "center"
}));

const LearningCard = ({
  card
}) => {
  const {
    Icon,
    title,
    color,
    price
  } = card;
  const {
    t
  } = useTranslation();
  return <StyledCard>
      <FlexRowAlign sx={{
      width: 40,
      height: 40,
      marginRight: 2,
      borderRadius: "50%",
      backgroundColor: alpha(color, 0.1)
    }}>
        <Icon sx={{
        color
      }} />
      </FlexRowAlign>

      <Box>
        <H4 lineHeight={1}>{t(title)}</H4>
        <H2 color={color}>${price}</H2>
      </Box>
    </StyledCard>;
};

export default LearningCard;