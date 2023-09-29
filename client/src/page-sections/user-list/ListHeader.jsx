import { Button, styled } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import SearchInput from "components/input-fields/SearchInput";
import { useTranslation } from "react-i18next"; // styled component

const StyledFlexBox = styled(FlexBetween)(({
  theme
}) => ({
  flexWrap: "wrap",
  marginBottom: 20,
  [theme.breakpoints.down(500)]: {
    width: "100%",
    "& .MuiInputBase-root": {
      maxWidth: "100%"
    },
    "& .MuiButton-root": {
      width: "100%",
      marginTop: 15
    }
  }
})); // -----------------------------------------------------------

// -----------------------------------------------------------
const ListHeader = ({
  handleClick,
  setSearchValue,
  buttonText = "Add New User"
}) => {
  const {
    t
  } = useTranslation();
  return <StyledFlexBox>
      <SearchInput bordered={false} placeholder="Search..." onChange={e => setSearchValue(e.target.value)} />

      <Button variant="contained" onClick={handleClick}>
        {t(buttonText)}
      </Button>
    </StyledFlexBox>;
};

export default ListHeader;