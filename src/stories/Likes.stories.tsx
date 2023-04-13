/** @format */

import { Story, Meta } from '@storybook/react/types-6-0';

import { Likes, Props } from '../components-ui/Likes';

export default {
  title: 'Example/Likes',
  component: Likes,
} as Meta;

export const Template: Story<Props> = props => <Likes {...props} />;

export const Default = Template.bind({});
