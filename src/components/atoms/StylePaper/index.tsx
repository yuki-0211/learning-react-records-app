import { Paper, PaperProps } from "@mui/material";

interface Props extends PaperProps {
}
export const StylePaper: React.VFC<Props> = ({
  sx,
  children,
}) => {
  return (
    <Paper
      sx={sx}
    >
      {children}
    </Paper>
  );
};