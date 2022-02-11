import { Card as MuiCard, CardProps as MuiCardProps } from '@mui/material';

interface CardProps extends MuiCardProps {}

export const Card: React.VFC<CardProps> = (props) => {
  return <MuiCard {...props} />;
};
