import {
  CardContent as MuiCardContent,
  CardContentProps as MuiCardContentProps,
} from '@mui/material';

interface CardContentProps extends MuiCardContentProps {}

export const CardContent: React.VFC<CardContentProps> = (props) => {
  return <MuiCardContent {...props} />;
};
