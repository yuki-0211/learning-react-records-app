import { Grid } from '../components/atoms/Grid';
import { CardHistory } from '../components/organisms/CardHistory';
import { InputRecord } from '../components/organisms/InputRecord';
import { CardHistoyProvider } from '../providers/Recode/CardHistory';
import { InputRecordProvider } from '../providers/Recode/InputRecord';

export const Record = () => {
  return (
    <Grid container>
      <Grid item xs={4}>
        <InputRecordProvider>
          <InputRecord />
        </InputRecordProvider>
      </Grid>
      <Grid item xs={8} sx={{ maxHeight: 680, overflow: 'auto' }}>
        <CardHistoyProvider>
          <CardHistory />
        </CardHistoyProvider>
      </Grid>
    </Grid>
  );
};
