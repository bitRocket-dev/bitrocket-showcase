/** @format */

import { Story, Meta } from '@storybook/react/types-6-0';

import { Props, UIIcon } from '../components-ui/Icon/Icon';

export default {
  title: 'Example/Icon',
  component: UIIcon,
} as Meta;

export const Template: Story<Props> = props => <UIIcon {...props} />;

export const Default = Template.bind({});

Default.args = {
  icon: 'bank',
};
