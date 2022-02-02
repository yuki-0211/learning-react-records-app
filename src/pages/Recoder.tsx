import { Box } from '../components/atoms/Box';
import { Grid } from '../components/atoms/Grid';
import { CardHistory } from '../components/organisms/CardHistory';
import { InputRecode } from '../components/organisms/InputRecode';

export const Recoder = () => {
  return (
    <Grid container>
      <Grid item xs={4}>
        <InputRecode />
      </Grid>
      <Grid item xs={8} sx={{ maxHeight: 680, overflow: 'auto' }}>
        <CardHistory />
      </Grid>
    </Grid>
  );
};
