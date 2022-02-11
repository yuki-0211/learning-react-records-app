import { useContext } from 'react';
import { inputRecordContext } from '../../../providers/Recode/InputRecord';
import { postRequest } from '../../../lib/axios';
import { Box } from '../../atoms/Box';
import { Button } from '../../atoms/Button';
import { DatePicker } from '../../atoms/DatePicker';
import { Pagination } from '../../atoms/Pagination';
import { SelectVariants } from '../../molecules/SelectVariants';
import { TextButtonNumberForm } from '../../molecules/TextButtonNumberForm';
import { TextField } from '../../atoms/TextField';
import { Typography } from '../../atoms/Typograpy';

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
    <Box sx={{ dispay: 'grid', gridTemplateRows: 'repeat(1fr)' }}>
      <Box>
        <Typography variant="h6" children={'Enter Your Learning Title'} />
      </Box>
      <Box>
        <TextField
          value={ctx.title}
          onChange={ctx.titleOnChange}
          label="title"
          helperText="What you have learned."
          sx={{ width: '50%' }}
        />
      </Box>
      <Box>
        <Typography variant="h6" children={'Select Your Learning Type'} />
      </Box>
      <Box>
        <SelectVariants
          value={ctx.type}
          onChange={ctx.typeOnChange}
          label={'type'}
          items={ctx.select}
        />
      </Box>
      <Box>
        <Typography variant="h6" children={'Enter Your Learning Times'} />
      </Box>
      <Box>
        <TextButtonNumberForm
          count={ctx.time.count}
          onClickDecrease={ctx.timeDecrement}
          onClickIncrease={ctx.timeIncrement}
          onChange={ctx.timeOnChange}
          label="learning times"
          helper="What hours you have studied."
        />
      </Box>
      <Box>
        <Typography variant="h6" children={'Select Your Concentration'} />
      </Box>
      <Box>
        <Pagination
          count={5}
          variant="text"
          color="primary"
          defaultPage={3}
          onChange={ctx.rankOnChange}
          sx={{ justifyContent: 'center', display: 'flex' }}
        />
      </Box>
      <Box>
        <Typography variant="h6" children={'leaning date'} />
      </Box>
      <Box>
        <DatePicker
          label="day"
          value={ctx.date}
          onChange={ctx.dateOnChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Box>
      <Box>
        <Typography variant="h6" children={'Enter Your Comment'} />
      </Box>
      <Box>
        <TextField
          value={ctx.comment}
          onChange={ctx.commentOnChange}
          label="comment"
          helperText="add your comment"
        />
      </Box>
      <Box>
        <Button onClick={sendOnClick}>Send</Button>
      </Box>
    </Box>
  );
};
