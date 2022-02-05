import { Grid } from '../components/atoms/Grid';
import { CardHistory } from '../components/organisms/CardHistory';
import { InputRecord } from '../components/organisms/InputRecord';
import React from 'react';
import {
  inputRecordContext,
  inputRecordState,
} from '../context/Recode/inputRecord';
import {
  cardHistoryContext,
  cardHistoyState,
} from '../context/Recode/cardHistory';

export const Record = () => {
  const ctxInputRecord = inputRecordState();
  const ctxCardHistory = cardHistoyState();
  return (
    <Grid container>
      <Grid item xs={4}>
        <inputRecordContext.Provider value={ctxInputRecord}>
          <InputRecord />
        </inputRecordContext.Provider>
      </Grid>
      <Grid item xs={8} sx={{ maxHeight: 680, overflow: 'auto' }}>
        <cardHistoryContext.Provider value={ctxCardHistory}>
          <CardHistory />
        </cardHistoryContext.Provider>
      </Grid>
    </Grid>
  );
};
