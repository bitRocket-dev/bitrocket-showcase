/** @format */

import { Story, Meta } from '@storybook/react/types-6-0';

import { Props, UIButtonGithub } from '../components-ui/Button/ButtonGithub';

export default {
  title: 'Example/ButtonGithub',
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
