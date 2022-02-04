import { Grid } from '../components/atoms/Grid';
import { CardHistory } from '../components/organisms/CardHistory';
import { InputRecord } from '../components/organisms/InputRecord';
import { useDatePicker } from '../hooks/useDatePicker';
import { usePagination } from '../hooks/usePagination';
import { useSelect } from '../hooks/useSelect';
import { useTextButtonNumberForm } from '../hooks/useTextButtonNumberForm';
import { useTextForm } from '../hooks/useTextField';
import { initInputRecord } from '../init/initInputRecord';

export const Record = () => {
  const { state: title, onChange: titleOnChange } = useTextForm();
  const {
    state: type,
    onChange: typeOnChange,
    select,
  } = useSelect(initInputRecord(), '/types');
  const { state: rank, onChange: rankOnChange } = usePagination();
  const {
    state: time,
    decrement: timeDecrement,
    increment: timeIncrement,
    onChange: timeOnChange,
  } = useTextButtonNumberForm();
  const { state: comment, onChange: commentOnChange } = useTextForm();
  const { state: date, onChange: dateOnChange } = useDatePicker();
  return (
    <Grid container>
      <Grid item xs={4}>
        <InputRecord />
      </Grid>
      <Grid item xs={8} sx={{ maxHeight: 680, overflow: 'auto' }}>
        <CardHistory />
      </Grid>
    </Grid>
  );
};
