import { KeyboardArrowDown } from "@mui/icons-material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { InputBase, MenuItem, Select, TextField, useTheme } from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBox from "components/flexbox/FlexBox";
import { Small, Tiny } from "components/Typography";
import { useMemo } from "react"; // common cell component

const CommonCell = ({
  title,
  body
}) => <FlexBox flexDirection="column">
    <Small mb={0.5}>{title}</Small>
    <Tiny color="text.secondary">{body}</Tiny>
  </FlexBox>;

const columnShape = [{
  minWidth: 200,
  Header: "Name",
  accessor: "name",
  Cell: ({
    row
  }) => {
    const {
      avatar,
      name,
      id
    } = row.original;
    return <FlexBox alignItems="center">
          <AppAvatar alt={name} src={avatar} />
          <FlexBox flexDirection="column" ml={1.2}>
            <Small mb={0.5}>{name}</Small>
            <Tiny color="text.secondary">{id}</Tiny>
          </FlexBox>
        </FlexBox>;
  }
}, {
  Header: "Position",
  accessor: "position",
  Filter: SelectColumnFilter,
  Cell: ({
    row
  }) => {
    const {
      position,
      experience
    } = row.original;
    return <CommonCell title={position} body={experience} />;
  }
}, {
  minWidth: 100,
  Header: "Team",
  accessor: "team"
}, {
  minWidth: 150,
  Header: "Birth Date",
  accessor: "dateOfBirth",
  Filter: DateColumnFilter
}, {
  minWidth: 150,
  Header: "Email/Mobile",
  accessor: "email",
  Cell: ({
    row
  }) => {
    const {
      email,
      phone
    } = row.original;
    return <CommonCell title={email} body={phone} />;
  }
}, {
  minWidth: 170,
  Header: "Address",
  accessor: "address",
  Filter: SelectColumnFilter
}, {
  Header: "Status",
  accessor: "status",
  Filter: SelectColumnFilter
}];
export function SelectColumnFilter({
  column
}) {
  const {
    filterValue,
    setFilter,
    preFilteredRows,
    id
  } = column;
  const theme = useTheme();
  const options = useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach(row => options.add(row.values[id]));
    return [...options.values()];
  }, [id, preFilteredRows]); // Render a multi-select box

  return <Select value={filterValue || ""} onChange={e => setFilter(e.target.value || undefined)} IconComponent={() => <KeyboardArrowDown color="disabled" />} input={<InputBase sx={{
    height: 40,
    width: 110,
    fontSize: 12,
    fontWeight: 600,
    padding: "0 8px",
    borderRadius: "8px",
    color: "text.primary",
    backgroundColor: theme.palette.mode === "light" ? "#ECEFF5" : "divider",
    "& .MuiPopover-paper": {
      boxShadow: "none"
    },
    "& > .MuiSelect-select": {
      paddingRight: "0 !important"
    }
  }} />}>
      <MenuItem value="" sx={{
      fontSize: 12,
      fontWeight: 500
    }}>
        All
      </MenuItem>
      {options.map((option, i) => <MenuItem key={i} value={option} sx={{
      fontSize: 12,
      fontWeight: 500
    }}>
          {option}
        </MenuItem>)}
    </Select>;
}
export function DateColumnFilter({
  column
}) {
  const {
    filterValue,
    setFilter
  } = column;
  const theme = useTheme();

  const handleChange = newValue => {
    // const date = format(new Date(newValue), "MMM dd, yyyy") || undefined;
    setFilter(newValue);
  };

  return <DatePicker value={filterValue || ""} onChange={handleChange} slots={{
    textField: TextField
  }} slotProps={{
    textField: {
      disabled: true,
      placeholder: "",
      sx: {
        "& .MuiOutlinedInput-root": {
          height: 40,
          fontSize: 13,
          borderRadius: "8px",
          backgroundColor: theme.palette.mode === "light" ? "#ECEFF5" : "divider"
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none"
        },
        "& .MuiOutlinedInput-input": {
          padding: 0,
          paddingLeft: 1
        },
        "& .MuiSvgIcon-root": {
          fontSize: 22,
          color: "text.secondary"
        }
      }
    }
  }} />;
}
export default columnShape;