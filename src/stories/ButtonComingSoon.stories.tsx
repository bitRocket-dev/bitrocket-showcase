/** @format */

import { Meta, Story } from '@storybook/react/types-6-0';

import { Props, UIButtonComingSoon } from '../components-ui/Button/ButtonComingSoon';
export default {
  title: 'Example/ButtonComingSoon',
  component: UIButtonComingSoon,
  argTypes: {},
} as Meta;

const Template: Story<Props> = props => <UIButtonComingSoon {...props} />;

export const Basic = Template.bind({});

Basic.args = {
  label: 'COMING SOON',
};
