/** @format */

import { Story, Meta } from '@storybook/react/types-6-0';

import { Props, UIIcon } from './Icon';

export default {
  title: 'Rocket Lib/Icon',
  component: UIIcon,
} as Meta;

export const Template: Story<Props> = props => <UIIcon {...props} />;

export const Default = Template.bind({});

Default.args = {
  icon: 'bank',
};
