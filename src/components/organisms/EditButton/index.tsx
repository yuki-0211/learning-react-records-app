import { AxiosRequestConfig } from 'axios';
import { ReactNode, useEffect, useState } from 'react';
import { useDialog } from '../../../hooks/useDialog';
import { initCardHistory } from '../../../init/initCardHistroy';
import { getRequest } from '../../../lib/axios';
import { typeCardHistory } from '../../../types/cardHistory';
import { Button } from '../../atoms/Button';
import { DialogInputRecord } from '../DialogInputRecord';

interface Props {
  URL: string;
  data: typeCardHistory;
  children: ReactNode;
}

export const EditButton: React.VFC<Props> = ({ URL, data, children }) => {
  const { state, open, close } = useDialog();
  return (
    <div>
      <Button onClick={open} children={children} />
      <DialogInputRecord
        state={state.isOpen}
        close={close}
        defaultText={data.title}
        defaultPagination={data.rank}
        defaultTextButtonNumber={{ count: data.time.toString() }}
        defaultComment={data.comment}
        defaultDate={new Date(data.date)}
      />
    </div>
  );
};
