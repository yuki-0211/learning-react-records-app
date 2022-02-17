import { rest } from 'msw';
import { typeCardHistory } from '../types/cardHistory';
import { typeSelectVariants } from '../types/selectVariants';
import { dataCardHistory } from './data/cardHistory';
import { dataSelectVariants } from './data/selectVariants';

export const handlers = [
  rest.get('/types', (req, res, ctx) => {
    const data: typeSelectVariants[] = dataSelectVariants();
    return res(ctx.status(200), ctx.json(data));
  }),

  rest.post('/types', (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.get('/records', (req, res, ctx) => {
    const data: typeCardHistory[] = dataCardHistory();
    return res(ctx.status(200), ctx.json(data));
  }),

  rest.post('/records', (req, res, ctx) => {
    return res(ctx.status(201));
  }),

  rest.put('/records', (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
