import { IconButton } from '../../atoms/IconButton';
import { Divider } from '../../atoms/Divider';
import { Icon } from '../../atoms/Icon';
import { TextField } from '../../atoms/TextField';
import { Box } from '../../atoms/Box';

interface Props {
  count: string | undefined;
  onClickIncrease: () => void;
  onClickDecrease: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  helper: string;
}

export const TextButtonNumberForm: React.VFC<Props> = ({
  count,
  onClickIncrease,
  onClickDecrease,
  onChange,
  label,
  helper,
}) => {
  return (
    <Box
      sx={{
        mx: 4,
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 300,
      }}
    >
      <TextField
        value={count}
        onChange={onChange}
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        label={label}
        helperText={helper}
        fullWidth
        sx={{ ml: 1, flex: 1 }}
      />
      <IconButton onClick={onClickIncrease}>
        <Icon>add_circle</Icon>
      </IconButton>
      <Divider orientation="vertical" sx={{ height: 28, m: 0.5 }} />
      <IconButton onClick={onClickDecrease}>
        <Icon>do_not_disturb_on</Icon>
      </IconButton>
    </Box>
  );
};
