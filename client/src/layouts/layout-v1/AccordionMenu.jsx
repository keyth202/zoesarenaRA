import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Accordion as MuiAccordion, AccordionDetails as MuiAccordionDetails, AccordionSummary as MuiAccordionSummary, styled } from "@mui/material";
// ---------------------------------------------------
// styled components
const Accordion = styled(MuiAccordion)(({
  theme
}) => ({
  marginBottom: 8,
  color: theme.palette.text.disabled,
  "&:before": {
    display: "none"
  },
  "&:not(:last-child)": {
    borderBottom: 0
  },
  "&.Mui-expanded": {
    boxShadow: theme.shadows[theme.palette.mode === "light" ? 3 : 4],
    borderRadius: 4
  }
}));
const AccordionSummary = styled(props => <MuiAccordionSummary {...props} expandIcon={<ArrowForwardIosSharpIcon sx={{
  fontSize: "0.9rem",
  color: "secondary.300"
}} />} />)(({
  theme
}) => ({
  padding: "12px 12px",
  color: theme.palette.text.primary,
  "& .MuiListItemButton-root": {
    padding: 0
  },
  "& .MuiSvgIcon-root": {
    color: theme.palette.text.secondary
  },
  "& .Mui-expanded": {
    color: theme.palette.primary.main,
    "& .MuiSvgIcon-root": {
      color: theme.palette.primary.main
    }
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)"
  }
}));

const AccordionMenu = ({
  title,
  children,
  expandedItem,
  handleChange,
  accordionHeader
}) => {
  return <Accordion square disableGutters elevation={0} expanded={expandedItem === title} onChange={handleChange(title)} sx={{
    left: "0 !important"
  }}>
      <AccordionSummary>{accordionHeader}</AccordionSummary>

      <MuiAccordionDetails sx={{
      padding: 0
    }}>{children}</MuiAccordionDetails>
    </Accordion>;
};

export default AccordionMenu;