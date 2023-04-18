/** @format */

import { Story, Meta } from '@storybook/react/types-6-0';

import { Props, UIVisible } from './Visible';

export default {
  title: 'Rocket Lib/Visible',
  component: UIVisible,
} as Meta;

const Template: Story<Props> = props => (
  <UIVisible {...props}>
    <h1>I&apos;m visibile!</h1>
  </UIVisible>
);

export const Default = Template.bind({});

Default.args = { type: 'desktop' };
