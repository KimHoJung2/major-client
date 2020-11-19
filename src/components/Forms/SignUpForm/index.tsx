// base
import React from 'react';

// packages
import { Form, Input, Button } from 'antd';
import { SignUpUser } from 'modules/auth';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface SignUpFormProps {
  onSubmit?: (values: SignUpUser) => void;
}

const StyledForm = styled(Form)`
  position: absolute;
  width: 80%;
  height: 50%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
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

export const SignUpForm = (props: SignUpFormProps) => {
  const { onSubmit } = props;

  const [form] = Form.useForm();

  const onFinish = (values: SignUpUser) => {
    if (onSubmit) {
      const _values = {
        ...values,
        email: values.email && values.email.trim()
      };
      onSubmit(_values);
    }
  };

  return (
    <StyledForm form={form} onFinish={values => onFinish(values as SignUpUser)}>
      <Form.Item required name='email'>
        <Input placeholder='이메일' />
      </Form.Item>
      <Form.Item required name='password'>
        <Input.Password placeholder='비밀번호' />
      </Form.Item>
      <Form.Item required name='name'>
        <Input placeholder='이름' />
      </Form.Item>
      <Form.Item required name='sex'>
        <Input placeholder='성별' />
      </Form.Item>
      <Form.Item>
        <Button block type='primary' htmlType='submit'>
          가입
        </Button>
        <Button block type='primary'>
          <Link to='/'>취소</Link>
        </Button>
      </Form.Item>
    </StyledForm>
  );
};
