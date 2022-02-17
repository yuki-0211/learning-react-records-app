import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
} from '@mui/material';

interface DialogProps extends MuiDialogProps {}

export const Dialog: React.VFC<DialogProps> = (props) => {
  return <MuiDialog {...props} />;
};
