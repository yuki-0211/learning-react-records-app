import { putRequest } from '../../../lib/axios';
import { Box } from '../../atoms/Box';
import { Button } from '../../atoms/Button';
import { Dialog } from '../../atoms/Dialog';
import { InputRecord } from '../InputRecord';

interface Props {
  state: boolean;
  close: () => void;
  defaultText: string;
  defaultPagination: number;
  defaultTextButtonNumber: { count: string };
  defaultComment: string;
  defaultDate: Date;
}

export const DialogInputRecord: React.VFC<Props> = ({
  state,
  close,
  defaultText,
  defaultPagination,
  defaultTextButtonNumber,
  defaultComment,
  defaultDate,
}) => {
  const baseURL = '/records';
  return (
    <Dialog onClose={close} open={state}>
      <Box sx={{ mx: 3 }}>
        <InputRecord
          request={putRequest}
          baseURL={baseURL}
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
