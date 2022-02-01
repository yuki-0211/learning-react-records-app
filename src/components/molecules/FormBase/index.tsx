import { InputBase } from '../../atoms/InputBase';
import { Paper } from '../../atoms/Paper';

interface Props {
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormBase: React.VFC<Props> = ({ value, onChange }) => {
  const sx = { ml: 1, flex: 1 };
  return (
    <Paper sx={{ p: '2px 4px', display: 'flex', width: 270 }}>
      <InputBase value={value} onChange={onChange} sx={sx} />
    </Paper>
  );
};
