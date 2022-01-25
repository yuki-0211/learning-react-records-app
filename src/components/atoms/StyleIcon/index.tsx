import {Icon, IconProps} from "@mui/material";

interface Props extends IconProps {
}

export const StyleIcon: React.VFC<Props> = ({
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
    >
      {children}
    </Icon>
  );
};