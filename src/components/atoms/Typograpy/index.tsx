import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@mui/material';

interface TypographyProps extends MuiTypographyProps {}

export const Typography: React.VFC<TypographyProps> = (props) => {
  return <MuiTypography {...props} />;
};
