/** @format */

import { FC, useEffect, useState } from 'react';

import { StepInner } from './partials/StepInner';

export interface Props {
  children: JSX.Element[];
  selected: string;
}

export const UISteps: FC<Props> = ({ children, selected }): JSX.Element => {
  const [stepActive, setStepActive] = useState(selected);

  const foundSelected = children.find(componentStep => {
    const { props } = componentStep;
    const { name } = props;
    return name === selected;
  });

  useEffect(() => {
    if (foundSelected) setStepActive(selected);
    else {
      console.error(`Step ${selected} is not valid. Set ${children[0].props.name} as default`);
      setStepActive(children[0].props.name);
    }
  }, [foundSelected, selected]);

  const renderStepContent = (stepContent: JSX.Element): JSX.Element | null => {
    const isVisible = stepContent.props.name === stepActive;

    return (
      <StepInner key={stepContent.props.name} isVisible={isVisible}>
        {stepContent}
      </StepInner>
    );
  };
  return <div style={{ display: 'flex' }}>{children.map(renderStepContent)}</div>;
};

UISteps.displayName = 'Steps';
