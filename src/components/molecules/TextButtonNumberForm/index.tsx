import { IconButton } from '../../atoms/IconButton';
import { Icon } from '../../atoms/Icon';
import { TextField } from '../../atoms/TextField';

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
  /*
  Create a numeric input form that can be increased or decreased with a button.
  */
  return (
    <div>
      <TextField
        value={count}
        onChange={onChange}
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        label={label}
        helperText={helper}
        variant="standard"
      />
      <IconButton size="large" onClick={onClickIncrease} color="primary">
        <Icon>add_circle</Icon>
      </IconButton>
      <IconButton size="large" onClick={onClickDecrease} color="primary">
        <Icon>do_not_disturb_on</Icon>
      </IconButton>
    </div>
  );
};
