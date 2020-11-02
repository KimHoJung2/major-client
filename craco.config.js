/* eslint-disable */ //lint 미적용

// React app global environment variable
if (process.env.NODE_ENV === 'production') {
  if (process.env.REACT_APP_BUILD_MODE === 'sandbox') {
    require('dotenv').config({ path: './config/.env.development' });
  } else {
    require('dotenv').config({ path: './config/.env.production' });
  }
} else {
  require('dotenv').config({ path: './config/.env.local' });
}

module.exports = {
  plugins: [
    {
      plugin: require('craco-antd'),
      options: {
        customizeTheme: {
          '@primary-color': '#00bdb7',
        },
      },
    },
  ],
};
