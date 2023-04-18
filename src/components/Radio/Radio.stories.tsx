/** @format */

import { ChangeEvent, useState } from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Props, UIRadioButton } from './Radio';

export default {
  title: 'Rocket Lib/RadioButton',
  component: UIRadioButton,
  argTypes: {
    onChange: { table: { disable: true } },
    checked: { table: { disable: true } },
  },
} as Meta;

const Template: Story<Props> = props => {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => setIsChecked(event.target.checked);

  return <UIRadioButton {...props} checked={isChecked} onChange={onChange} />;
};

export const Default = Template.bind({});

Default.args = {};
