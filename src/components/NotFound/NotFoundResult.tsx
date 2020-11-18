// base
import React from 'react';
import { Result, Button } from 'antd';
// import { useHistory } from 'react-router';

export const NotFoundResult = () => {
  return (
    <Result
      status='404'
      title='404'
      subTitle='Sorry, the page you visited does not exist.'
      extra={<Button type='primary'>Back Home</Button>}
    />
  );
};
