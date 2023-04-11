/** @format */

import { Story, Meta } from '@storybook/react/types-6-0';

import { Props, UIAvatar } from '../components-ui/Avatar';

export default {
  title: 'Example/Avatar',
  component: UIAvatar,
} as Meta;

export const Default: Story<Props> = args => <UIAvatar {...args} />;

Default.args = {
  username: 'Riccardo Genova',
  src: 'https://media-exp1.licdn.com/dms/image/C4D0BAQFLpKFEe7QtCw/company-logo_200_200/0/1581524839346?e=2159024400&v=beta&t=fSMcml5OZxVh3WFydixzH6-sirU91ZNS9SDh6Oq2Q9s',
  borderColor: 'error',
};
