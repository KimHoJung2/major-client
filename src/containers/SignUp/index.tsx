//base
import React from 'react';
//component
import { SignUpForm } from 'components';

//modules
import { SignUpUser } from 'modules/auth';

export const SignUp = () => {
  const onSubmit = (values: SignUpUser) => {
    console.log(values);
  };

  return <SignUpForm onSubmit={onSubmit} />;
};
