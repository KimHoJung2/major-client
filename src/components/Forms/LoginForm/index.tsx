// base
import React from 'react';

// packages
import { Form, Input, Button } from 'antd';
import { LoginUser } from 'modules/auth';
import { Link } from 'react-router-dom';
import { ROUTE_SIGN_UP } from 'routes/const';
import styled from 'styled-components';

interface LoginFormProps {
  onSubmit?: (values: LoginUser) => void;
}

const StyledForm = styled(Form)`
  width: 80%;
  left: 0;
  right: 0;
  margin: 0 auto;
  .ant-input {
    border-radius: 10px;
  }

  .ant-input-password {
    border-radius: 10px;
    .ant-input {
      border-radius: 0 !important;
    }
  }

  .ant-btn {
    border-radius: 10px;
    width: 40%;
    margin-left: 5%;
    margin-right: 5%;
  }
`;

export const LoginForm = (props: LoginFormProps) => {
  const { onSubmit } = props;

  const [form] = Form.useForm();

  const onFinish = (values: LoginUser) => {
    if (onSubmit) {
      const _values = {
        ...values,
        email: values.email && values.email.trim()
      };
      onSubmit(_values);
    }
  };

  return (
    <StyledForm form={form} onFinish={values => onFinish(values as LoginUser)}>
      <Form.Item required name='email'>
        <Input placeholder='이메일' />
      </Form.Item>
      <Form.Item required name='password'>
        <Input.Password placeholder='비밀번호' />
      </Form.Item>
      <Form.Item>
        <Button block type='primary' htmlType='submit'>
          로그인
        </Button>
        <Button block type='primary'>
          <Link to={ROUTE_SIGN_UP}>회원가입</Link>
        </Button>
      </Form.Item>
    </StyledForm>
  );
};
