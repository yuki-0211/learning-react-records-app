import { Paper as MuiPaper, PaperProps as MuiPaperProps } from '@mui/material';

interface PaperProps extends MuiPaperProps {}

export const Paper: React.VFC<PaperProps> = (
  props,
  { variant = 'outlined' }
) => {
  return <MuiPaper {...props} variant={variant} />;
};
