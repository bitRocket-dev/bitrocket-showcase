/** @format */

import { Story, Meta } from '@storybook/react/types-6-0';

import { Props, UITimePicker } from './index';

export default {
  title: 'Rocket Lib/TimePicker',
  component: UITimePicker,
  argTypes: {
    onChange: { table: { disable: true } },
    value: { table: { disable: true } },
  },
} as Meta;

export const Basic: Story<Props> = args => <UITimePicker {...args} />;
