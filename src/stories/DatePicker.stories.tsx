/** @format */

import { Story, Meta } from '@storybook/react/types-6-0';

import { Props, UIDatePicker } from '../components-ui/DatePicker/DatePicker';

export default {
  title: 'Example/DatePicker',
  component: UIDatePicker,
  argTypes: {
    value: { table: { disable: true } },
    onChange: { table: { disable: true } },
    isFilter: { table: { disable: true } },
    hasBackground: { table: { disable: true } },
    disabledPastData: { table: { disable: true } },
  },
} as Meta;

const Template: Story<Props> = args => <UIDatePicker {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
