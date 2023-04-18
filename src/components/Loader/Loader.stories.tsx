/** @format */

import { Story, Meta } from '@storybook/react/types-6-0';

import { Props, UILoader } from './Loader';

export default {
  title: 'Rocket Lib/Loader',
  component: UILoader,
} as Meta;

const Template: Story<Props> = args => <UILoader {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
