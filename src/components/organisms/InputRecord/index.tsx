import { TextField } from '@mui/material';
import { useDatePicker } from '../../../hooks/useDatePicker';
import { usePagination } from '../../../hooks/usePagination';
import { useSelect } from '../../../hooks/useSelect';
import { useTextButtonNumberForm } from '../../../hooks/useTextButtonNumberForm';
import { useTextForm } from '../../../hooks/useTextField';
import { Box } from '../../atoms/Box';
import { Button } from '../../atoms/Button';
import { DatePicker } from '../../atoms/DatePicker';
import { Grid } from '../../atoms/Grid';
import { Pagination } from '../../atoms/Pagination';
import { FormBase } from '../../molecules/FormBase';
import { SelectVariants } from '../../molecules/SelectVariants';
import { TextButtonNumberForm } from '../../molecules/TextButtonNumberForm';
import { TitleBox } from '../../molecules/TitleBox';
import { demoData } from './demoData';

export const InputRecord = () => {
  const { state: title, onChange: titleOnChange } = useTextForm();
  const { state: type, onChange: typeOnChange } = useSelect();
  const { state: rank, onChange: rankOnChange } = usePagination();
  const {
    state: time,
    decrement: timeDecrement,
    increment: timeIncrement,
    onChange: timeOnChange,
  } = useTextButtonNumberForm();
  const { state: comment, onChange: commentOnChange } = useTextForm();
  const { state: date, onChange: dateOnChange } = useDatePicker();

  const sendOnClick = () => {
    const recordDate = {
      title: title,
      type: type,
      rank: rank,
      time: time.count,
      date: date,
      comment: comment,
    };
    console.log(recordDate);
  };

  const selectData = demoData();

  return (
    <Grid
      container
      alignItems="center"
      justifyItems="center"
      justifyContent="center"
    >
      <Grid item xs={12}>
        <TitleBox title="Enter Your Learning Title" />
      </Grid>
      <Grid item xs={12}>
        <FormBase
          value={title}
          onChange={titleOnChange}
          label="title"
          helper="What you have learned."
        />
      </Grid>
      <Grid item xs={12}>
        <TitleBox title="Select Your Learning Type" />
      </Grid>
      <Grid item xs={12}>
        <SelectVariants
          value={type}
          onChange={typeOnChange}
          label={'type'}
          items={selectData}
        />
      </Grid>
      <Grid item xs={12}>
        <TitleBox title="Enter Your Learning Times" />
      </Grid>
      <Grid item xs={12}>
        <TextButtonNumberForm
          count={time.count}
          onClickDecrease={timeDecrement}
          onClickIncrease={timeIncrement}
          onChange={timeOnChange}
          label="learning times"
          helper="What hours you have studied."
        />
      </Grid>
      <Grid item xs={12}>
        <TitleBox title="Select Your Concentration" />
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            mx: 4,
          }}
        >
          <Pagination
            count={5}
            variant="text"
            color="primary"
            defaultPage={3}
            onChange={rankOnChange}
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <TitleBox title="leaning date" />
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            mx: 4,
            p: '2px 8px',
            display: 'flex',
            width: 270,
          }}
        >
          <DatePicker
            label="day"
            value={date}
            onChange={dateOnChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <TitleBox title="Enter Your Comment" />
      </Grid>
      <Grid item xs={12}>
        <FormBase
          value={comment}
          onChange={commentOnChange}
          label="comment"
          helper="add your comment"
        />
        <Box
          sx={{
            mx: 4,
            p: '2px 8px',
            display: 'flex',
            width: 270,
          }}
        >
          <Button onClick={sendOnClick}>Send</Button>
        </Box>
      </Grid>
    </Grid>
  );
};
