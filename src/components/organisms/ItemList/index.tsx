import { Paper } from '../../atoms/Paper';
import { Stack } from '../../atoms/Stack';

export const ItemList: React.VFC = () => {
  const datalists = [
    'item1',
    'item2',
    'item3',
    'item1',
    'item2',
    'item3',
    'item1',
    'item2',
    'item3',
    'item1',
    'item2',
    'item3',
    'item1',
    'item2',
    'item3',
  ];
  return (
    <Stack>
      {datalists.map((datalist, index) => (
        <Paper>{datalist}</Paper>
      ))}
    </Stack>
  );
};
