import { Paper as MuiPaper, PaperProps as MuiPaperProps } from '@mui/material';

interface PaperProps extends MuiPaperProps {}

export const Paper: React.VFC<PaperProps> = ({
  variant = 'outlined',
  sx,
  children,
}) => {
  return (
    <MuiPaper variant={variant} sx={sx} component="form">
      {children}
    </MuiPaper>
  );
};
