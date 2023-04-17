/** @format */

import { ChangeEvent, useState } from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Props, UISwitch } from '.';

export default {
  title: 'Rocket Lib/Switch',
  component: UISwitch,
  argTypes: {
    onChange: { table: { disable: true } },
    isChecked: { table: { disable: true } },
  },
} as Meta;

const Template: Story<Props> = props => {
  const [isChecked, setIsChecked] = useState(true);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => setIsChecked(event.target.checked);

  return <UISwitch {...props} isChecked={isChecked} onChange={onChange} />;
};

export const Default = Template.bind({});
