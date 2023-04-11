/** @format */

// #region ::: IMPORT
import { FC, memo, ChangeEvent } from 'react';

import { Input } from './partials/Input';
import { Outer } from './partials/Outer';
import { Slider } from './partials/Slider';

// #endregion

export interface Props {
  isChecked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const UISwitch: FC<Props> = memo(
  ({ isChecked, onChange }): JSX.Element => (
    <Outer>
      <Input type="checkbox" checked={isChecked} onChange={onChange} />
      <Slider isChecked={isChecked} />
    </Outer>
  ),
);

UISwitch.displayName = 'UISwitch';
