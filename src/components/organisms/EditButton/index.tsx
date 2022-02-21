import { AxiosRequestConfig } from 'axios';
import { ReactNode, useEffect, useState } from 'react';
import { useDialog } from '../../../hooks/useDialog';
import { typeCardHistory } from '../../../types/cardHistory';
import { Box } from '../../atoms/Box';
import { Button } from '../../atoms/Button';
import { DialogInputRecord } from '../DialogInputRecord';

interface Props {
  data: typeCardHistory;
  URL: string;
  children: ReactNode;
}

export const EditButton: React.VFC<Props> = ({ data, URL, children }) => {
  /*
  Receives the id and fires the delete API.
  */

  const { state, open, close } = useDialog();
  return (
    <div>
      <Button onClick={open} children={children} />
      <DialogInputRecord
        URL={URL}
        id={data.id}
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
