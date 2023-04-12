/** @format */

import { Meta, Story } from '@storybook/react';

import HamburgerMenu from '../components-ui/HamburgerMenu';
export default {
  title: 'Example/HamburgerMenu',
  component: HamburgerMenu,
} as Meta;

const Template: Story = () => <HamburgerMenu />;

export const Basic = Template.bind({});
Basic.args = {};
