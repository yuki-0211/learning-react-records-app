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
  return (
    <Dialog onClose={close} open={state}>
      <InputRecord
        defaultText={defaultText}
        defaultPagination={defaultPagination}
        defaultTextButtonNumber={defaultTextButtonNumber}
        defaultComment={defaultComment}
        defaultDate={defaultDate}
      />
      <Button onClick={close} children={'Close'} />
    </Dialog>
  );
};
