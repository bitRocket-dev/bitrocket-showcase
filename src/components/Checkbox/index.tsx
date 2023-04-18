/** @format */

import { ChangeEvent, FC, memo } from 'react';

import { HiddenCheckbox } from './partials/HiddenCheckbox';
import { Icon } from './partials/Icon';
import { Label } from './partials/Label';
import { Outer } from './partials/Outer';
import { StyledCheckbox } from './partials/StyledCheckbox';
import { WrapperText } from './partials/WrapperText';

export interface Props {
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  title: string;
  description?: string;
}

export const UICheckbox: FC<Props> = memo(
  ({ checked, onChange, disabled, title, description }): JSX.Element => (
    <Outer>
      <Label disabled={disabled}>
        <HiddenCheckbox checked={checked} onChange={onChange} disabled={disabled} />
        <StyledCheckbox disabled={disabled} checked={checked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
        {title && (
          <WrapperText>
            <p>{title}</p>
            {description && <p>{description}</p>}
          </WrapperText>
        )}
      </Label>
    </Outer>
  ),
);
