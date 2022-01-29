import { Paper, PaperProps } from "@mui/material";

export const StylePaper: React.VFC<PaperProps> = ({
  sx,
  children,
}) => {
  return (
    <Paper
      sx={sx}
      component = "form"
    >
      {children}
    </Paper>
  );
};