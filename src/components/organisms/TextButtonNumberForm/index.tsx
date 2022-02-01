import { IconButton } from '../../atoms/IconButton';
import { Divider } from '../../atoms/Divider';
import { Icon } from '../../atoms/Icon';
import { Paper } from '../../atoms/Paper';
import { InputBase } from '../../atoms/InputBase';
import { textAlign } from '@mui/system';
import { createStyles, makeStyles, Theme } from '@mui/material';

interface Props {
  count: string | undefined;
  onClickIncrease: () => void;
  onClickDecrease: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextButtonNumberForm: React.VFC<Props> = ({
  count,
  onClickIncrease,
  onClickDecrease,
  onChange,
}) => {
  return (
    <Paper sx={{ p: '2px 4px', display: 'flex', width: 270 }}>
      <InputBase
        value={count}
        onChange={onChange}
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        sx={{ ml: 1, flex: 1 }}
      />
      <IconButton onClick={onClickIncrease}>
        <Icon>add_circle</Icon>
      </IconButton>
      <Divider orientation="vertical" sx={{ height: 28, m: 0.5 }} />
      <IconButton onClick={onClickDecrease}>
        <Icon>do_not_disturb_on</Icon>
      </IconButton>
    </Paper>
  );
};
