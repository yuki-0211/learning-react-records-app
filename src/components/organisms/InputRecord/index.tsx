import { useContext } from 'react';
import { inputRecordContext } from '../../../providers/Recode/InputRecord';
import { postRequest } from '../../../lib/axios';
import { Box } from '../../atoms/Box';
import { Button } from '../../atoms/Button';
import { DatePicker } from '../../atoms/DatePicker';
import { Pagination } from '../../atoms/Pagination';
import { SelectVariants } from '../../molecules/SelectVariants';
import { TextButtonNumberForm } from '../../molecules/TextButtonNumberForm';
import { Typography } from '../../atoms/Typograpy';
import { TextField } from '../../atoms/TextField';

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
    <Box sx={{ display: 'grid', gridAutoRows: '1fr' }}>
      <Box sx={{ gridColumn: '1', gridRow: 'span 1' }}>
        <Typography variant="h6" children={'Enter Your Learning Title'} />
      </Box>
      <Box sx={{ gridColumn: '1', gridRow: 'span 2' }}>
        <TextField
          value={ctx.title}
          onChange={ctx.titleOnChange}
          label="title"
          helperText="What you have learned."
          sx={{ width: '50%' }}
        />
      </Box>
      <Box sx={{ gridColumn: '1', gridRow: 'span 1' }}>
        <Typography variant="h6" children={'Select Your Learning Type'} />
      </Box>
      <Box sx={{ gridColumn: '1', gridRow: 'span 2' }}>
        <SelectVariants
          value={ctx.type}
          onChange={ctx.typeOnChange}
          label={'type'}
          items={ctx.select}
        />
      </Box>
      <Box sx={{ gridColumn: '1', gridRow: 'span 1' }}>
        <Typography variant="h6" children={'Enter Your Learning Times'} />
      </Box>
      <Box sx={{ gridColumn: '1', gridRow: 'span 2' }}>
        <TextButtonNumberForm
          count={ctx.time.count}
          onClickDecrease={ctx.timeDecrement}
          onClickIncrease={ctx.timeIncrement}
          onChange={ctx.timeOnChange}
          label="learning times"
          helper="What hours you have studied."
        />
      </Box>
      <Box sx={{ gridColumn: '1', gridRow: 'span 1' }}>
        <Typography variant="h6" children={'Select Your Concentration'} />
      </Box>
      <Box sx={{ gridColumn: '1', gridRow: 'span 2' }}>
        <Pagination
          count={5}
          variant="text"
          color="primary"
          defaultPage={3}
          onChange={ctx.rankOnChange}
          sx={{ justifyContent: 'center', display: 'flex' }}
        />
      </Box>
      <Box sx={{ gridColumn: '1', gridRow: 'span 1' }}>
        <Typography variant="h6" children={'leaning date'} />
      </Box>
      <Box sx={{ gridColumn: '1', gridRow: 'span 2' }}>
        <DatePicker
          label="day"
          value={ctx.date}
          onChange={ctx.dateOnChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Box>
      <Box sx={{ gridColumn: '1', gridRow: 'span 1' }}>
        <Typography variant="h6" children={'Enter Your Comment'} />
      </Box>
      <Box sx={{ gridColumn: '1', gridRow: 'span 1' }}>
        <TextField
          value={ctx.comment}
          onChange={ctx.commentOnChange}
          label="comment"
          helperText="add your comment"
          sx={{ width: '50%' }}
        />
      </Box>
      <Box sx={{ gridColumn: '1', gridRow: 'span 1' }}>
        <Button onClick={sendOnClick}>Send</Button>
      </Box>
    </Box>
  );
};
