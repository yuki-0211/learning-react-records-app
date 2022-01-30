import {
  CardActions as MuiCardActions,
  CardActionsProps as MuiCardActionsProps,
} from '@mui/material';

interface CardActionsProps extends MuiCardActionsProps {}

export const CardActions: React.VFC<CardActionsProps> = ({ sx, children }) => {
  return <MuiCardActions sx={sx}>{children}</MuiCardActions>;
};
