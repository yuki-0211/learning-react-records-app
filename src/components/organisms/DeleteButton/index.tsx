import { ReactNode, useEffect, useState } from 'react';
import { deleteRequest } from '../../../lib/axios';
import { typeCardHistory } from '../../../types/cardHistory';
import { Button } from '../../atoms/Button';

interface Props {
  data: typeCardHistory;
  URL: string;
  children: ReactNode;
}

export const DeleteButton: React.VFC<Props> = ({ data, URL, children }) => {
  const onClick = () => {
    deleteRequest({ URL: URL, config: { params: { id: data.id } } });
  };
  return (
    <div>
      <Button onClick={onClick} children={children} />
    </div>
  );
};
