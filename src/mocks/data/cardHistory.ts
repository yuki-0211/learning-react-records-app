import { typeCardHistory } from '../../types/cardHistory';

export const dataCardHistory = () => {
  const data: typeCardHistory[] = [
    {
      id: '0',
      title: 'listening',
      type: 'English',
      time: 1.5,
      rank: 5,
      date: new Date().toISOString(),
      comment: 'test data',
    },
    {
      id: '1',
      title: 'speaking',
      type: 'English',
      time: 0.5,
      rank: 3,
      date: new Date().toISOString(),
      comment: 'test data',
    },
    {
      id: '2',
      title: 'PMP 10Page',
      type: 'Management',
      time: 1.5,
      rank: 3,
      date: new Date().toISOString(),
      comment: 'test data',
    },
    {
      id: '3',
      title: 'speaking',
      type: 'English',
      time: 1.5,
      rank: 3,
      date: new Date().toISOString(),
      comment: 'test data',
    },
    {
      id: '4',
      title: 'Nikujaga',
      type: 'Cook',
      time: 0.5,
      rank: 5,
      date: new Date().toISOString(),
      comment: 'test data',
    },
    {
      id: '5',
      title: 'MisoSoup',
      type: 'Cook',
      time: 0.5,
      rank: 5,
      date: new Date().toISOString(),
      comment: 'test data',
    },
    {
      id: '6',
      title: 'MisoSoup',
      type: 'Cook',
      time: 0.5,
      rank: 5,
      date: new Date().toISOString(),
      comment: 'test data',
    },
    {
      id: '7',
      title: 'PMP',
      type: 'Management',
      time: 1.5,
      rank: 3,
      date: new Date().toISOString(),
      comment: 'test data',
    },
    {
      id: '8',
      title: 'MisoSoup',
      type: 'Cook',
      time: 0.5,
      rank: 5,
      date: new Date().toISOString(),
      comment: 'test data',
    },
    {
      id: '9',
      title: 'MisoSoup',
      type: 'Cook',
      time: 0.5,
      rank: 5,
      date: new Date().toISOString(),
      comment: 'test data',
    },
  ];
  return data;
};
