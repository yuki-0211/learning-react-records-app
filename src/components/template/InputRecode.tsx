import { usePagination } from '../../hooks/usePagination';
import { useTextButtonNumberForm } from '../../hooks/useTextButtonNumberForm';
import { useTextForm } from '../../hooks/useTextField';
import { Grid } from '../atoms/Grid';
import { OutlinedInput } from '../atoms/OutlinedInput';
import { Pagination } from '../atoms/Pagination';
import { FormBase } from '../molecules/FormBase';
import { TextButtonNumberForm } from '../organisms/TextButtonNumberForm';

export const InputRecode = () => {
  const { state: title, onChange: titleOnChange } = useTextForm();
  const { state: type, onChange: typeOnChange } = useTextForm();
  const { state: rankState, onChange: rankOnChange } = usePagination();
  const {
    state: timeState,
    decrement: timeDecrement,
    increment: timeIncrement,
    onChange: timeOnChange,
  } = useTextButtonNumberForm();
  const { state: comment, onChange: commentOnChange } = useTextForm();

  return (
    <Grid
      container
      alignItems="center"
      justifyItems="center"
      justifyContent="center"
    >
      <Grid item xs={4}>
        title
      </Grid>
      <Grid item xs={8}>
        <FormBase value={title} onChange={titleOnChange} />
      </Grid>
      <Grid item xs={4}>
        type
      </Grid>
      <Grid item xs={8}>
        <FormBase value={type} onChange={typeOnChange} />
      </Grid>
      <Grid item xs={4}>
        time
      </Grid>
      <Grid item xs={8}>
        <TextButtonNumberForm
          count={timeState.count}
          onClickDecrease={timeDecrement}
          onClickIncrease={timeIncrement}
          onChange={timeOnChange}
        />
      </Grid>
      <Grid item xs={4}>
        rank
      </Grid>
      <Grid item xs={8}>
        <Pagination
          count={5}
          variant="text"
          color="primary"
          defaultPage={3}
          onChange={rankOnChange}
        />
      </Grid>
      <Grid item xs={4}>
        comment
      </Grid>
      <Grid item xs={8}>
        <FormBase value={comment} onChange={commentOnChange} />
      </Grid>
    </Grid>
  );
};
