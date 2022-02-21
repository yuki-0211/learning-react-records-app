import { Dispatch, SetStateAction } from 'react';
import { getRequest } from '../lib/axios';
import { typeSelectVariants } from '../types/selectVariants';

export const getTypeList = (setSelect: Dispatch<SetStateAction<typeSelectVariants[]>>) => {
  getRequest({ URL: '/types', setter: setSelect });
};
