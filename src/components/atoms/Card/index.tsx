import { Card as MuiCard, CardProps as MuiCardProps } from '@mui/material';

interface CardProps extends MuiCardProps {}

export const Card: React.VFC<CardProps> = ({ sx, children }) => {
  return <MuiCard sx={sx}>{children}</MuiCard>;
};
