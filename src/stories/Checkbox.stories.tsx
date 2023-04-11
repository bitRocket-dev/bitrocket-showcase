/** @format */

import { ChangeEvent, useState } from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Props, UICheckbox } from '../components-ui/checkbox';

export default {
  title: 'Example/Checkbox',
  component: UICheckbox,
  argTypes: {
    onChange: { table: { disable: true } },
    checked: { table: { disable: true } },
  },
} as Meta;

const Template: Story<Props> = props => {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setIsChecked(e.target.checked);

  return <UICheckbox {...props} checked={isChecked} onChange={onChange} />;
};

export const Default = Template.bind({});
