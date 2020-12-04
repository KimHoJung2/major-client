import React from 'react';
import { Button, Form, Input, Select } from 'antd';
import styled from 'styled-components';

const { Option } = Select;

const StyledForm = styled(Form)`
  width: 100%;
  left: 0;
  right: 0;
  padding: 2em;
  margin: auto;
  .ant-row {
    margin: auto;
    padding: 0.5em;
    width: 80%;
  }
  .ant-btn {
    width: 100%;
  }
  .ant-select {
    .ant-select-selection-item {
      padding-right: 0;
    }
  }
`;

interface ScoreFormProps {
  onSubmit: (e: { game: string; score: string }) => void;
}

export const ScoreForm = (props: ScoreFormProps) => {
  const { onSubmit } = props;
  const [form] = Form.useForm();
  return (
    <StyledForm
      form={form}
      onFinish={e => onSubmit(e as { game: string; score: string })}
    >
      <Form.Item
        required
        name='game'
        className='game-select'
        initialValue='firstGame'
      >
        <Select
          dropdownStyle={{ textAlign: 'center' }}
          style={{ textAlign: 'center' }}
        >
          <Option value='firstGame'>1G</Option>
          <Option value='secondGame'>2G</Option>
          <Option value='thirdGame'>3G</Option>
          <Option value='fourGame'>4G</Option>
        </Select>
      </Form.Item>
      <Form.Item required name='score' className='score-input'>
        <Input
          placeholder='점수 입력'
          style={{ textAlign: 'center' }}
          maxLength={3}
        />
      </Form.Item>
      <Form.Item className='score-button'>
        <Button type='primary' htmlType='submit'>
          입력
        </Button>
      </Form.Item>
    </StyledForm>
  );
};
