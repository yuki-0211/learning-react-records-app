import { Box } from '../components/atoms/Box';
import { CardHistory } from '../components/organisms/CardHistory';
import { InputRecord } from '../components/organisms/InputRecord';
import { CardHistoyProvider } from '../providers/Recode/CardHistory';
import { InputRecordProvider } from '../providers/Recode/InputRecord';

export const Record: React.VFC = () => {
  return (
    <Box sx={{ display: 'grid', gridAutoColumns: '1fr', height: '800px' }}>
      <Box sx={{ gridRow: '1' }}>
        <InputRecordProvider>
          <InputRecord />
        </InputRecordProvider>
      </Box>
      <Box sx={{ gridRow: '1', gridColumn: 'span 2', overflow: 'auto' }}>
        <CardHistoyProvider>
          <CardHistory />
        </CardHistoyProvider>
      </Box>
    </Box>
  );
};
