/** @format */

// #region ::: IMPORT
import { Story, Meta } from '@storybook/react/types-6-0';

import { Props, UIText } from '../components-ui/Text';

// #endregion

export default {
  title: 'Example/Text',
  component: UIText,
  argTypes: {
    dataCy: { table: { disable: true } },
    noWrap: { table: { disable: true } },
  },
} as Meta;

const Template: Story<Props> = args => <UIText {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'Test',
  color: 'primary',
};
