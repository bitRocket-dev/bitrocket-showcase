/** @format */

import { Meta, Story } from '@storybook/react/types-6-0';

import { Props, UIButtonComingSoon } from './ButtonComingSoon';
export default {
  title: 'Cosmocode/ButtonComingSoon',
  component: UIButtonComingSoon,
  argTypes: {},
} as Meta;

const Template: Story<Props> = props => <UIButtonComingSoon {...props} />;

export const Basic = Template.bind({});

Basic.args = {
  label: 'COMING SOON',
};
