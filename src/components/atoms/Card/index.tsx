import { Card as MuiCard, CardProps as MuiCardProps } from '@mui/material';

interface CardProps extends MuiCardProps {}

export const Card: React.VFC<CardProps> = ({ variant, sx, children }) => {
  return (
    <MuiCard variant={variant} sx={sx}>
      {children}
    </MuiCard>
  );
};
