import { rest } from 'msw';

export const handlers = [
  rest.get('/types', (req, res, ctx) => {
    const data = [
      { id: '0', value: 'English' },
      { id: '1', value: 'Management' },
      { id: '2', value: 'Science' },
      { id: '3', value: 'Cook' },
    ];
    return res(ctx.status(200), ctx.json(data));
  }),

  rest.post('/types', (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.get('/records', (req, res, ctx) => {
    const data = [
      {
        title: 'listening',
        type: 'English',
        time: 1.5,
        rank: 5,
        date: Date.now(),
        comment: 'test data',
      },
      {
        title: 'speaking',
        type: 'English',
        time: 0.5,
        rank: 3,
        date: Date.now(),
        comment: 'test data',
      },
      {
        title: 'PMP',
        type: 'Management',
        time: 1.5,
        rank: 3,
        date: Date.now(),
        comment: 'test data',
      },
      {
        title: 'speaking',
        type: 'English',
        time: 1.5,
        rank: 3,
        date: Date.now(),
        comment: 'test data',
      },
      {
        title: 'Nikujaga',
        type: 'Cook',
        time: 0.5,
        rank: 5,
        date: Date.now(),
        comment: 'test data',
      },
    ];
    return res(ctx.status(200), ctx.json(data));
  }),

  rest.post('/records', (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
