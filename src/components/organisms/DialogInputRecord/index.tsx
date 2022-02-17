import { putRequest } from '../../../lib/axios';
import { Box } from '../../atoms/Box';
import { Button } from '../../atoms/Button';
import { Dialog } from '../../atoms/Dialog';
import { InputRecord } from '../InputRecord';

interface Props {
  URL: string;
  state: boolean;
  close: () => void;
  defaultText: string;
  defaultPagination: number;
  defaultTextButtonNumber: { count: string };
  defaultComment: string;
  defaultDate: Date;
}

export const DialogInputRecord: React.VFC<Props> = ({
  URL,
  state,
  close,
  defaultText,
  defaultPagination,
  defaultTextButtonNumber,
  defaultComment,
  defaultDate,
}) => {
  return (
    <Dialog onClose={close} open={state}>
      <Box sx={{ mx: 3 }}>
        <InputRecord
          request={putRequest}
          URL={URL}
          defaultText={defaultText}
          defaultPagination={defaultPagination}
          defaultTextButtonNumber={defaultTextButtonNumber}
          defaultComment={defaultComment}
          defaultDate={defaultDate}
        />
        <Button onClick={close} children={'Close'} />
      </Box>
    </Dialog>
  );
};