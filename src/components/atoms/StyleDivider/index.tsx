import { Divider, DividerProps} from "@mui/material";

export const StyleDivider: React.VFC<DividerProps> = ({
    orientation,
    sx,
}) => {
  return (
    <Divider
        orientation={orientation}
        sx={sx}
    />
  );
};