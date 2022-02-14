import axios, { AxiosRequestConfig } from 'axios';
import React from 'react';
import config from '../config';

const API = axios.create({
  baseURL: config.baseURL,
});

interface getProps {
  URL: string;
  config?: AxiosRequestConfig<any>;
  setter: React.Dispatch<React.SetStateAction<any>>;
}

interface postProps {
  URL: string;
  data: object;
  config?: AxiosRequestConfig<any>;
}

interface putProps {
  URL: string;
  data: object;
  config?: AxiosRequestConfig<any>;
}

export const getRequest = async (props: getProps) => {
  await API.get(props.URL, props?.config)
    .then((results) => {
      props.setter(results.data);
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    })
    .finally(() => {});
};

export const postRequest = async (props: postProps) => {
  await API.post(props.URL, props.data, props?.config)
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    })
    .finally(() => {});
};

export const putRequest = async (props: putProps) => {
  await API.post(props.URL, props.data, props?.config)
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    })
    .finally(() => {});
};
