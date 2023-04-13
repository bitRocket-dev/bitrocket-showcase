/** @format */

import { Story, Meta } from '@storybook/react/types-6-0';

import { Props, UIButton } from '../components-ui/Button/Button';

export default {
  title: 'Example/Button',
  component: UIButton,
  argTypes: {
    onClick: { table: { disable: true } },
  },
} as Meta;

const Template: Story<Props> = props => <UIButton {...props} />;

export const Default = Template.bind({});

Default.args = {
  text: 'button',
};
