//base
import React from 'react';

//component
import { LoginForm } from 'components';
import { LoginUser, usersLoginAction } from 'modules/auth';
import { useDispatch } from 'react-redux';

export const Login = () => {
  const dispatch = useDispatch();

  const onSubmit = (values: LoginUser) => {
    dispatch(usersLoginAction.request(values));
  };

  return <LoginForm onSubmit={onSubmit} />;
};
