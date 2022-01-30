import { Paper as MuiPaper, PaperProps as MuiPaperProps } from '@mui/material';

interface PaperProps extends MuiPaperProps {}

export const Paper: React.VFC<PaperProps> = ({ sx, children }) => {
  return (
    <MuiPaper sx={sx} component="form">
      {children}
    </MuiPaper>
  );
};
