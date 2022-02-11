import { ReactNode } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { Select } from '../../atoms/Select';
import { FormControl } from '../../atoms/FormControl';
import { InputLabel } from '../../atoms/InputLabel';
/*
import { MenuItem } from '../../atoms/MenuItem';
Failure Example
Select Menu Item does not respond to Wrapped Component
*/
import MenuItem from '@mui/material/MenuItem';
import { Box } from '../../atoms/Box';

interface Props {
  value: string;
  onChange: (event: SelectChangeEvent<string>, child: ReactNode) => void;
  label: string;
  items: { id: string; value: string }[];
}

export const SelectVariants: React.VFC<Props> = ({
  value,
  onChange,
  label,
  items,
}) => {
  return (
    <FormControl variant="standard" sx={{ width: '50%' }}>
      <InputLabel id="select-standard-label">{label}</InputLabel>
      <Select
        labelId="select-standard-label"
        id="select-standard"
        value={value}
        onChange={onChange}
        label={label}
      >
        {items.map((item, index) => {
          return (
            <MenuItem value={item.id} key={index}>
              {item.value}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
