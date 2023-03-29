/** @format */

import Input from '../components/Input';

export default {
  title: 'Input',
  component: Input,
};

const onClick = () => {};

export const InputBar = () => <Input label="Test" onClick={onClick} />;
