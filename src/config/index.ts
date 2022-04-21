/*
Set environment variables.
*/

const defaultConfig = {
  baseURL: '',
};
let customConfig = {};

if (process.env.REACT_APP_URL_TYPE === 'local') {
  customConfig = {
    baseURL: process.env.REACT_APP_LOCAL_URL,
  };
} else if (process.env.REACT_APP_URL_TYPE === 'dev') {
  customConfig = {
    baseURL: process.env.REACT_APP_DEV_URL,
  };
}

export default Object.assign(defaultConfig, customConfig);
