import { KeyboardArrowDown } from "@mui/icons-material";
import { Button, MenuItem, Popover } from "@mui/material";
import { Small } from "components/Typography";
import { useRef, useState } from "react"; // dummy options

const selectOptions = ["All Categories", "2 Weeks Ago", "3 Weeks Ago", "1 Month Ago"];

const AllCategoriesPopover = () => {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(selectOptions[0]);

  const handleChange = item => {
    setSelected(item);
    setOpen(false);
  };

  return <>
      <Button disableRipple onClick={() => setOpen(true)} ref={anchorRef} endIcon={<KeyboardArrowDown sx={{
      color: "text.disabled"
    }} />} sx={{
      "&:hover": {
        backgroundColor: "background.paper"
      },
      backgroundColor: "background.paper",
      borderRadius: "0px",
      border: "1px solid #E5EAF2",
      justifyContent: "space-between",
      height: 50,
      borderTopLeftRadius: "8px",
      borderBottomLeftRadius: "8px"
    }} fullWidth>
        <Small color="text.disabled" minWidth={100} textAlign="left">
          {selected}
        </Small>
      </Button>
      <Popover keepMounted open={open} onClose={() => setOpen(false)} anchorEl={anchorRef.current} anchorOrigin={{
      horizontal: "left",
      vertical: "bottom"
    }} PaperProps={{
      sx: {
        py: "0.5rem"
      }
    }}>
        {selectOptions.map((item, index) => <MenuItem key={index} onClick={() => handleChange(item)} sx={{
        "&:hover": {
          color: "primary.main"
        }
      }}>
            <Small fontWeight={500} py={0.5}>
              {item}
            </Small>
          </MenuItem>)}
      </Popover>
    </>;
};

export default AllCategoriesPopover;