/** @format */

import { Story, Meta } from '@storybook/react/types-6-0';

import { Props, UIButtonGithub } from './index';

export default {
  title: 'Cosmocode/ButtonGithub',
  component: UIButtonGithub,
  argTypes: {},
} as Meta;

const Template: Story<Props> = props => {
  return <UIButtonGithub {...props} />;
};

export const Default = Template.bind({});

Default.args = {
  text: 'Accedi con GitHub',
};
