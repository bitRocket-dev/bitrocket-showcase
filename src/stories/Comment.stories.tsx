/** @format */

import { Story, Meta } from '@storybook/react/types-6-0';

import { Props, UIComment } from '../components-ui/Comment';

export default {
  title: 'Example/Comment',
  component: UIComment,
  argTypes: {},
} as Meta;

const Template: Story<Props> = props => <UIComment {...props} />;

export const Default = Template.bind({});

Default.args = {
  text: 'commento',
};
