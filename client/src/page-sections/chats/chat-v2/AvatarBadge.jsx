import { Avatar, Badge, styled } from "@mui/material";
const StyledBadge = styled(Badge)(({
  theme,
  badgesize
}) => ({
  "& .MuiBadge-badge": {
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    height: badgesize || 10,
    minWidth: badgesize || 10,
    borderRadius: "50%"
  }
}));

const AvatarBadge = ({
  badgeColor,
  badgeSize,
  image,
  ...props
}) => {
  return <StyledBadge variant="dot" color={badgeColor || "success"} overlap="circular" badgesize={badgeSize} anchorOrigin={{
    vertical: "bottom",
    horizontal: "right"
  }}>
      <Avatar src={image} {...props} />
    </StyledBadge>;
};

export default AvatarBadge;