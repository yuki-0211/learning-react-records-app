import { AxiosRequestConfig } from 'axios';
import { putRequest } from '../lib/axios';

export interface typePutRecord {
  id: string;
  title: string;
  type: string;
  rank: number;
  time: string;
  date: Date;
  comment: string;
}
export const putRecord = (props: typePutRecord) => {
  const recordDate = {
    title: props.title,
    type: props.type,
    rank: props.rank,
    time: props.time,
    date: props.date,
    comment: props.comment,
  };
  const config: AxiosRequestConfig = { params: { id: props.id } };
  putRequest({ URL: '/records', data: recordDate, config: config });
};
