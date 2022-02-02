import { Grid } from '../components/atoms/Grid';
import { CardHistory } from '../components/organisms/CardHistory';
import { InputRecord } from '../components/organisms/InputRecord';

export const Record = () => {
  return (
    <Grid container>
      <Grid item xs={4}>
        <InputRecord />
      </Grid>
      <Grid item xs={8} sx={{ maxHeight: 680, overflow: 'auto' }}>
        <CardHistory />
      </Grid>
    </Grid>
  );
};
