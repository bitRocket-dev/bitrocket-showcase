/** @format */

import { useState } from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Props, UISteps } from '../components-ui/Steps';
import { UIStep } from '../components-ui/Steps/partials/Step';

export default {
  title: 'Example/Steps',
  component: UISteps,
} as Meta;

const Template: Story<Props> = () => {
  const [selected, setSelected] = useState('step1');

  return (
    <UISteps selected={selected}>
      <UIStep name="step1">
        <h1>Step 1</h1>
        <button onClick={() => setSelected('step2')}>Continue</button>
      </UIStep>
      <UIStep name="step2">
        <h1>Step 2</h1>
        <button onClick={() => setSelected('step1')}>Indietro</button>
        <button onClick={() => setSelected('step3')}>Continue</button>
      </UIStep>
      <UIStep name="step3">
        <h1>Step 3</h1>
        <button onClick={() => setSelected('step2')}>Indietro</button>
      </UIStep>
    </UISteps>
  );
};

export const Default = Template.bind({});

Default.args = {};
