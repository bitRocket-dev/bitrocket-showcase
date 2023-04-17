/** @format */

import { Meta, Story } from '@storybook/react';

import { HamburgerMenu, Props } from './HamburgerMenu';

export default {
  title: 'Cosmocode/HamburgerMenu',
  component: HamburgerMenu,
  argTypes: {},
} as Meta;

const Template: Story<Props> = props => <HamburgerMenu {...props} />;

export const Basic = Template.bind({});

Basic.args = {
  firstContent: 'test',
  secondContent: 'test2',
  thirdContent: 'test3',
};
