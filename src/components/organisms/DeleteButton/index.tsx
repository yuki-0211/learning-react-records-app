import { ReactNode } from 'react';
import { RecordAPI } from '../../../services/Record';
import { typeCardHistory } from '../../../types/cardHistory';
import { Button } from '../../atoms/Button';

interface Props {
  data: typeCardHistory;
  children: ReactNode;
}

export const DeleteButton: React.VFC<Props> = ({ data, children }) => {
  /*
  Receives the id and fires the delete API.
  */

  const onClick = () => {
    const api = new RecordAPI();
    api.deleteRecord(data.id);
  };
  return (
    <div>
      <Button onClick={onClick} children={children} />
    </div>
  );
};
