/** @format */

import { Meta, Story } from '@storybook/react/types-6-0';

import { ButtonCTACosmocode, Props } from '../components-ui/Button/ButtonCTACosmocode';
export default {
  title: 'Example/ButtonCosmocode',
  component: ButtonCTACosmocode,
  argTypes: {},
} as Meta;

const Template: Story<Props> = props => <ButtonCTACosmocode {...props} />;

export const Basic = Template.bind({});

Basic.args = {
  text: 'Scopri di più',
};
