import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@mui/material';

interface TypographyProps extends MuiTypographyProps {}

export const Typography: React.VFC<TypographyProps> = ({
  variant,
  noWrap,
  sx,
  children,
}) => {
  return (
    <MuiTypography variant={variant} noWrap={noWrap} sx={sx}>
      {children}
    </MuiTypography>
  );
};
