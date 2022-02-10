import { TextField } from '@mui/material';
import { useContext } from 'react';
import { inputRecordContext } from '../../../providers/Recode/InputRecord';
import { postRequest } from '../../../lib/axios';
import { Box } from '../../atoms/Box';
import { Button } from '../../atoms/Button';
import { DatePicker } from '../../atoms/DatePicker';
import { Grid } from '../../atoms/Grid';
import { Pagination } from '../../atoms/Pagination';
import { FormBase } from '../../molecules/FormBase';
import { SelectVariants } from '../../molecules/SelectVariants';
import { TextButtonNumberForm } from '../../molecules/TextButtonNumberForm';
import { TitleBox } from '../../molecules/TitleBox';

export const InputRecord = () => {
  const ctx = useContext(inputRecordContext);
  const sendOnClick = () => {
    const recordDate = {
      title: ctx.title,
      type: ctx.type,
      rank: ctx.rank,
      time: ctx.time.count,
      date: ctx.date,
      comment: ctx.comment,
    };
    postRequest({ URL: '/records', data: recordDate });
  };
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
          value={ctx.title}
          onChange={ctx.titleOnChange}
          label="title"
          helper="What you have learned."
        />
      </Grid>
      <Grid item xs={12}>
        <TitleBox title="Select Your Learning Type" />
      </Grid>
      <Grid item xs={12}>
        <SelectVariants
          value={ctx.type}
          onChange={ctx.typeOnChange}
          label={'type'}
          items={ctx.select}
        />
      </Grid>
      <Grid item xs={12}>
        <TitleBox title="Enter Your Learning Times" />
      </Grid>
      <Grid item xs={12}>
        <TextButtonNumberForm
          count={ctx.time.count}
          onClickDecrease={ctx.timeDecrement}
          onClickIncrease={ctx.timeIncrement}
          onChange={ctx.timeOnChange}
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
            onChange={ctx.rankOnChange}
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
            value={ctx.date}
            onChange={ctx.dateOnChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <TitleBox title="Enter Your Comment" />
      </Grid>
      <Grid item xs={12}>
        <FormBase
          value={ctx.comment}
          onChange={ctx.commentOnChange}
          label="comment"
          helper="add your comment"
        />
        <Box
          sx={{
            mx: 4,
            p: '2px 8px',
            display: 'flex',
            width: '10%',
          }}
        >
          <Button onClick={sendOnClick}>Send</Button>
        </Box>
      </Grid>
    </Grid>
  );
};
