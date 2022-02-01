import { usePagination } from '../../hooks/usePagination';
import { useSelect } from '../../hooks/useSelect';
import { useTextButtonNumberForm } from '../../hooks/useTextButtonNumberForm';
import { useTextForm } from '../../hooks/useTextField';
import { Grid } from '../atoms/Grid';
import { Pagination } from '../atoms/Pagination';
import { FormBase } from '../molecules/FormBase';
import { SelectVariants } from '../molecules/SelectVariants';
import { TextButtonNumberForm } from '../organisms/TextButtonNumberForm';
import { demoData } from './demoData';

export const InputRecode = () => {
  const { state: title, onChange: titleOnChange } = useTextForm();
  const { state: type, onChange: typeOnChange } = useSelect();
  const { state: rankState, onChange: rankOnChange } = usePagination();
  const {
    state: timeState,
    decrement: timeDecrement,
    increment: timeIncrement,
    onChange: timeOnChange,
  } = useTextButtonNumberForm();
  const { state: comment, onChange: commentOnChange } = useTextForm();

  const selectData = demoData();

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
        <SelectVariants
          value={type}
          onChange={typeOnChange}
          label={'type'}
          items={selectData}
        />
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
