import { AxiosRequestConfig } from 'axios';
import { deleteRequest, getRequest, postRequest, putRequest } from '../lib/axios';

export class TypeAPI {
  private URL: string;

  constructor() {
    this.URL = '/types';
  }

  getAllRecord = (setter: React.Dispatch<React.SetStateAction<any>>) => {
    getRequest({ URL: this.URL, setter: setter });
  };

  saveRecord = (data: object) => {
    postRequest({ URL: this.URL, data: data });
  };

  editRecord = (id: string, data: object) => {
    const config: AxiosRequestConfig = { params: { id: id } };
    putRequest({ URL: this.URL, data: data, config: config });
  };

  deleteRecord = (id: string) => {
    const config: AxiosRequestConfig = { params: { id: id } };
    deleteRequest({ URL: this.URL, config: config });
  };
}
