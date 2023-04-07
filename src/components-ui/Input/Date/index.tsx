/** @format */

// #region ::: IMPORT
import { FC, memo, Ref } from 'react';

import { DateIcon } from './partials/DateIcon';
import { DateInputField } from './partials/DateInputField';
import { DateWrapper } from './partials/DateWrapper';
<<<<<<< HEAD
import { TIcon, UIIcon } from '../../Icon/Icon';
=======
import { TIcon, UIIcon } from '../../Icon';
>>>>>>> 7594675 (feat: added time picker component from rocket lib to storybook)
// #endregion

interface Props {
  onClick: any;
  value?: any;
  icon: TIcon;
  onChange?: any;
  ref?: Ref<HTMLInputElement>;
  isFilter: boolean;
  hasBackground?: boolean;
  placeholder?: string;
}

export const InputDate: FC<Props> = memo(
  ({ onClick, value, icon, onChange, ref, isFilter, hasBackground, placeholder }) => (
    <DateWrapper>
      <DateInputField
        onClick={onClick}
        onChange={onChange}
        value={value}
        type="text"
        ref={ref}
        isFilter={isFilter}
        hasBackground={hasBackground}
        placeholder={placeholder}
      />
      <DateIcon>
        <UIIcon icon={icon} />
      </DateIcon>
    </DateWrapper>
  ),
);

InputDate.displayName = 'InputDate';
