import { TextField } from '@mui/material';
import { useContext } from 'react';
import { inputRecordContext } from '../../../providers/Recode/InputRecord';
import { postRequest } from '../../../lib/axios';
import { Box } from '../../atoms/Box';
import { Button } from '../../atoms/Button';
import { DatePicker } from '../../atoms/DatePicker';
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
    <Box sx={{ dispay: 'grid', gridTemplateRows: 'repeat(1fr)' }}>
      <Box>
        <TitleBox title="Enter Your Learning Title" />
      </Box>
      <Box>
        <FormBase
          value={ctx.title}
          onChange={ctx.titleOnChange}
          label="title"
          helper="What you have learned."
        />
      </Box>
      <Box>
        <TitleBox title="Select Your Learning Type" />
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
        <TitleBox title="Enter Your Learning Times" />
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
        <TitleBox title="Select Your Concentration" />
      </Box>
      <Box>
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
      </Box>
      <Box>
        <TitleBox title="leaning date" />
      </Box>
      <Box>
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
      </Box>
      <Box>
        <TitleBox title="Enter Your Comment" />
      </Box>
      <Box>
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
      </Box>
    </Box>
  );
};
