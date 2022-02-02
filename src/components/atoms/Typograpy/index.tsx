import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@mui/material';

interface TypographyProps extends MuiTypographyProps {}

export const Typography: React.VFC<TypographyProps> = ({
  color,
  variant,
  noWrap,
  gutterBottom,
  sx,
  children,
}) => {
  return (
    <MuiTypography
      color={color}
      variant={variant}
      noWrap={noWrap}
      gutterBottom={gutterBottom}
      sx={sx}
    >
      {children}
    </MuiTypography>
  );
};
