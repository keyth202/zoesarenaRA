import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const EditButton = props => {
  return <IconButton {...props}>
      <Edit sx={{
      fontSize: 15,
      color: "text.secondary"
    }} />
    </IconButton>;
};

export default EditButton;