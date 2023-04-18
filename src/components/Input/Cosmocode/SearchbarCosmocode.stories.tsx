/** @format */

import { Meta, Story } from '@storybook/react/types-6-0';

import { Props, UIInput } from './Searchbar';

export default {
  title: 'Cosmocode/Searchbar',
  component: UIInput,
  argTypes: {},
} as Meta;

const Template: Story<Props> = props => <UIInput {...props} />;

export const Basic = Template.bind({});

Basic.args = {
  placeholder: 'Cerca uno sviluppatore',
};
