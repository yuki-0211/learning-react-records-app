import { Box } from '../../atoms/Box';
import { InputBase } from '../../atoms/InputBase';
import { Paper } from '../../atoms/Paper';
import { TextField } from '../../atoms/TextField';

interface Props {
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  helper: string;
}

export const FormBase: React.VFC<Props> = ({
  value,
  onChange,
  label,
  helper,
}) => {
  const sx = { ml: 1, flex: 1 };
  return (
    <Box
      sx={{
        mx: 4,
        p: '2px 4px',
        display: 'flex',
        width: 270,
      }}
    >
      <TextField
        value={value}
        onChange={onChange}
        label={label}
        helperText={helper}
        sx={sx}
        fullWidth
      />
    </Box>
  );
};
