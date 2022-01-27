import {Icon, IconProps} from "@mui/material";

export const StyleIcon: React.VFC<IconProps> = ({
    sx,
    color,
    fontSize,
    children
}) => {
  return (
    <Icon 
    sx={sx}
    color={color}
    fontSize={fontSize}
    >{children}</Icon>
  );
};