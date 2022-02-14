const defaultConfig = {
  baseURL: '',
};
let customConfig = {};

if (process.env.REACT_APP_URL_TYPE === 'local') {
  customConfig = {
    baseURL: 'http://localhost:8000/',
  };
} else if (process.env.REACT_APP_URL_TYPE === 'dev') {
  customConfig = {
    baseURL: process.env.REACT_APP_DEV_URL,
  };
} else if (process.env.REACT_APP_URL_TYPE === 'moc') {
  customConfig = {
    baseURL: '.',
  };
}

export default Object.assign(defaultConfig, customConfig);
