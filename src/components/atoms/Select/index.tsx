import {
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
} from '@mui/material';

interface SelectProps extends MuiSelectProps<string> {}

export const Select: React.VFC<SelectProps> = ({
  labelId,
  value,
  onChange,
  label,
  sx,
  children,
}) => {
  return (
    <MuiSelect
      labelId={labelId}
      value={value}
      onChange={onChange}
      label={label}
      sx={sx}
    >
      {children}
    </MuiSelect>
  );
};
