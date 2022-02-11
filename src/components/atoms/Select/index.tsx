import {
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
} from '@mui/material';

interface SelectProps extends MuiSelectProps<string> {}

export const Select: React.VFC<SelectProps> = (props) => {
  return <MuiSelect {...props} />;
};
