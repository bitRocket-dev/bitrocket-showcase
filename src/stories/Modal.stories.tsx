/** @format */

import { useState } from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Props, UIModal } from '../components-ui/Modal/Modal';

export default {
  title: 'Example/Modal',
  component: UIModal,
} as Meta;

const Template: Story<Props> = props => {
  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(!open);

  return (
    <UIModal {...props} isOpen={open} onClose={handleClose}>
      <div style={{ height: '100px' }}>Example</div>
    </UIModal>
  );
};

export const Default = Template.bind({});

Default.args = {
  isOpen: true,
};
