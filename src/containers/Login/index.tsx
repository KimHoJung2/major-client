//base
import React from 'react';

//component
import { LoginForm } from 'components';
import { LoginUser } from 'modules/auth';

export const Login = () => {
  const onSubmit = (values: LoginUser) => {
    console.log(values);
  };

  return <LoginForm onSubmit={onSubmit} />;
};
