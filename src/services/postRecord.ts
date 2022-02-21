import { postRequest } from '../lib/axios';

export interface typePostRecord {
  title: string;
  type: string;
  rank: number;
  time: string;
  date: Date;
  comment: string;
}
export const postRecord = (props: typePostRecord) => {
  const recordDate = {
    title: props.title,
    type: props.type,
    rank: props.rank,
    time: props.time,
    date: props.date,
    comment: props.comment,
  };
  postRequest({ URL: '/records', data: recordDate });
};
