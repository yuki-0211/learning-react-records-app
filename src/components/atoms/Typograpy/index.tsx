import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@mui/material';

interface TypographyProps extends MuiTypographyProps {}

export const Typograpys: React.VFC<TypographyProps> = ({ sx, children }) => {
  return <MuiTypography sx={sx}>{children}</MuiTypography>;
};
