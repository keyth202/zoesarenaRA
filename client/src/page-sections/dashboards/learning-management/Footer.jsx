import { Box, Button, Card, styled } from "@mui/material";
import { H2, Paragraph } from "components/Typography";
import { useTranslation } from "react-i18next"; // ----------------------------------

// ----------------------------------
// styled components
const StyledCard = styled(Card)(({
  theme
}) => ({
  display: "flex",
  alignItems: "center",
  padding: "1rem 2rem",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    padding: "2rem",
    textAlign: "center",
    flexDirection: "column-reverse",
    "& > .MuiBox-root": {
      paddingBottom: 0
    },
    "& img": {
      marginBottom: "1.5rem"
    }
  }
}));

const Footer = ({
  imageLink
}) => {
  const {
    t
  } = useTranslation();
  return <StyledCard>
      <Box py={2}>
        <H2>{t("Dashboard & UI kit")}</H2>
        <Paragraph fontSize={13} color="text.disabled">
          {t("Clean design & code for your next project.")}
        </Paragraph>
        <Button variant="contained" size="small" sx={{
        mt: 3,
        maxWidth: 150,
        width: "100%"
      }}>
          Buy Now
        </Button>
      </Box>

      <Box height={150}>
        <img src={imageLink} width="100%" height="100%" alt="footer" />
      </Box>
    </StyledCard>;
};

export default Footer;