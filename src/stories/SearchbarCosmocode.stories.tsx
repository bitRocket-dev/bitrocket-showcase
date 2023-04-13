/** @format */

import { Meta, Story } from '@storybook/react/types-6-0';

import { Props, UIInput } from '../components-ui/Input/Cosmocode/Searchbar';

export default {
  title: 'Example/Searchbar',
  component: UIInput,
  argTypes: {},
} as Meta;

const Template: Story<Props> = props => <UIInput {...props} />;

export const Basic = Template.bind({});

Basic.args = {
  placeholder: 'Cerca uno sviluppatore',
};
