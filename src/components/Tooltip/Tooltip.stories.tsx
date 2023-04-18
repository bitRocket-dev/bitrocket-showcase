/** @format */

import { Story, Meta } from '@storybook/react/types-6-0';

import { UITooltip, Props } from './Tooltip';

export default {
  title: 'Rocket Lib/Tooltip',
  component: UITooltip,
} as Meta;

const Template: Story<Props> = props => <UITooltip {...props} />;

export const Default = Template.bind({});

Default.args = {};
