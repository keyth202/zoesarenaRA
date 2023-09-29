import { Menu, MenuItem } from "@mui/material";
import DeleteIcon from "icons/DeleteIcon";
import PencilIcon from "icons/PencilIcon";
import { Small } from "./Typography"; // component props interface

const MoreOptions = ({
  anchorEl,
  handleMoreClose
}) => {
  return <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMoreClose}>
      <MenuItem onClick={handleMoreClose} sx={{
      "&:hover": {
        color: "primary.main"
      }
    }}>
        <PencilIcon sx={{
        fontSize: 14,
        marginRight: 1
      }} />
        <Small fontWeight={500}>Edit</Small>
      </MenuItem>

      <MenuItem onClick={handleMoreClose} sx={{
      "&:hover": {
        color: "primary.main"
      }
    }}>
        <DeleteIcon sx={{
        fontSize: 14,
        marginRight: 1
      }} />
        <Small fontWeight={500}>Remove</Small>
      </MenuItem>
    </Menu>;
};

export default MoreOptions;