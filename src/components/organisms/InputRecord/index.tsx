import { postProps, postRequest, putProps } from '../../../lib/axios';
import { Box } from '../../atoms/Box';
import { Button } from '../../atoms/Button';
import { DatePicker } from '../../atoms/DatePicker';
import { Pagination } from '../../atoms/Pagination';
import { SelectVariants } from '../../molecules/SelectVariants';
import { TextButtonNumberForm } from '../../molecules/TextButtonNumberForm';
import { Typography } from '../../atoms/Typograpy';
import { TextField } from '../../atoms/TextField';
import { useTextForm } from '../../../hooks/useTextField';
import { usePagination } from '../../../hooks/usePagination';
import { initSelectVariants } from '../../../init/selectVariants';
import { useSelect } from '../../../hooks/useSelect';
import { useTextButtonNumberForm } from '../../../hooks/useTextButtonNumberForm';
import { useDatePicker } from '../../../hooks/useDatePicker';

export interface InputRecordProps {
  request: (props: postProps | putProps) => Promise<void>;
  URL: string;
  defaultText?: string;
  defaultPagination?: number;
  defaultTextButtonNumber?: { count: string };
  defaultComment?: string;
  defaultDate?: Date;
}
export const InputRecord: React.VFC<InputRecordProps> = ({
  request,
  URL,
  defaultText,
  defaultPagination,
  defaultTextButtonNumber,
  defaultComment,
  defaultDate,
}) => {
  const { state: title, onChange: titleOnChange } = useTextForm(defaultText);
  const {
    state: type,
    onChange: typeOnChange,
    select,
  } = useSelect(initSelectVariants(), '/types');
  const { state: rank, onChange: rankOnChange } =
    usePagination(defaultPagination);
  const {
    state: time,
    decrement: timeDecrement,
    increment: timeIncrement,
    onChange: timeOnChange,
  } = useTextButtonNumberForm(defaultTextButtonNumber);
  const { state: comment, onChange: commentOnChange } =
    useTextForm(defaultComment);
  const { state: date, onChange: dateOnChange } = useDatePicker(defaultDate);

  const sendOnClick = () => {
    const recordDate = {
      title: title,
      type: type,
      rank: rank,
      time: time.count,
      date: date,
      comment: comment,
    };
    request({ URL: URL, data: recordDate });
  };

  return (
    <Box sx={{ display: 'grid', gridAutoRows: '1fr' }}>
      <Box sx={{ gridColumn: '1', gridRow: 'span 1' }}>
        <Typography variant="h6" children={'Enter Your Learning Title'} />
      </Box>
      <Box sx={{ gridColumn: '1', gridRow: 'span 2' }}>
        <TextField
          value={title}
          onChange={titleOnChange}
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
          value={type}
          onChange={typeOnChange}
          label={'type'}
          items={select}
        />
      </Box>
      <Box sx={{ gridColumn: '1', gridRow: 'span 1' }}>
        <Typography variant="h6" children={'Enter Your Learning Times'} />
      </Box>
      <Box sx={{ gridColumn: '1', gridRow: 'span 2' }}>
        <TextButtonNumberForm
          count={time.count}
          onClickDecrease={timeDecrement}
          onClickIncrease={timeIncrement}
          onChange={timeOnChange}
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
          onChange={rankOnChange}
          sx={{ justifyContent: 'center', display: 'flex' }}
        />
      </Box>
      <Box sx={{ gridColumn: '1', gridRow: 'span 1' }}>
        <Typography variant="h6" children={'Select Leaning Date'} />
      </Box>
      <Box sx={{ gridColumn: '1', gridRow: 'span 2' }}>
        <DatePicker
          label="day"
          value={date}
          onChange={dateOnChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Box>
      <Box sx={{ gridColumn: '1', gridRow: 'span 1' }}>
        <Typography variant="h6" children={'Enter Your Comment'} />
      </Box>
      <Box sx={{ gridColumn: '1', gridRow: 'span 1' }}>
        <TextField
          value={comment}
          onChange={commentOnChange}
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
