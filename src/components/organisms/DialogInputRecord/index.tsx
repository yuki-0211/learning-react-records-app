import { putRequest } from '../../../lib/axios';
import { putRecord } from '../../../services/putRecord';
import { Box } from '../../atoms/Box';
import { Button } from '../../atoms/Button';
import { Dialog } from '../../atoms/Dialog';
import { InputRecord } from '../InputRecord';

interface Props {
  URL: string;
  id: string;
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
  id,
  state,
  close,
  defaultText,
  defaultPagination,
  defaultTextButtonNumber,
  defaultComment,
  defaultDate,
}) => {
  /*
  Displays the learning record entry form in the dialog.
  */

  return (
    <Dialog onClose={close} open={state}>
      <Box sx={{ mx: 3 }}>
        <InputRecord
          request={putRecord}
          id={id}
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
