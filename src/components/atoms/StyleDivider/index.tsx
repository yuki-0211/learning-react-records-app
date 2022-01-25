import { Divider, DividerProps} from "@mui/material";

interface Props extends DividerProps {
}
export const StyleDivider: React.VFC<Props> = ({
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