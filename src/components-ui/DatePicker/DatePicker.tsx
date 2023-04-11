/** @format */

// #region ::: IMPORT
import { FC, forwardRef, memo, Ref, useRef, useState } from 'react';

import DatePicker from 'react-datepicker';

import { Field } from './partials/Field';
import { InputDate } from '../Input/Date';
import { UIText } from '../Text';
// #endregion

interface InputProps {
  label?: string;
  value?: string;
  onClick?: () => void;
  onChange?: () => void;
  isFilter: boolean;
  hasBackground: boolean;
}

const DatePickerCustomInput = forwardRef(
  (
    { label, onClick, value, onChange, isFilter, hasBackground }: InputProps,
    ref: Ref<HTMLInputElement>,
  ): JSX.Element => (
    <Field>
      {label && <UIText text={label} variant="caption" />}
      <InputDate
        onClick={onClick}
        onChange={onChange}
        value={value}
        icon="calendar"
        ref={ref}
        isFilter={isFilter}
        hasBackground={hasBackground}
      />
    </Field>
  ),
);
DatePickerCustomInput.displayName = 'DatePickerCustomInput';

export interface Props {
  label?: string;
  value: Date | null;
  onChange: (date: Date) => void;
  disabledPastData?: boolean | Date;
  fluid?: boolean;
  isFilter?: boolean;
  hasBackground?: boolean;
}

export const UIDatePicker: FC<Props> = memo(
  ({
    label,
    onChange,
    value,
    disabledPastData,
    fluid = false,
    isFilter = false,
    hasBackground = false,
  }: Props): JSX.Element => {
    const [startDate, setStartDate] = useState(value ? value : null);
    const ref = useRef<HTMLInputElement>(null);

    const isExpirationDate = disabledPastData instanceof Date;
    const isDisablePastDate = typeof disabledPastData === 'boolean';

    const minDate: Date | null = isDisablePastDate ? new Date() : isExpirationDate ? disabledPastData : null;

    const handleChange = (date: Date): void => {
      setStartDate(date);
      const dateFormatted = new Date(date);
      const offset = date.getTimezoneOffset();
      if (offset < 0) dateFormatted.setHours(12, 0, 0);
      onChange(new Date(dateFormatted.toISOString().substring(0, 10)));
    };

    return (
      <DatePicker
        wrapperClassName={fluid ? 'wrapper' : ''}
        dateFormat="dd/MM/yyyy"
        selected={startDate}
        onChange={handleChange}
        minDate={minDate}
        customInput={
          <DatePickerCustomInput label={label} ref={ref} isFilter={isFilter} hasBackground={hasBackground} />
        }
      />
    );
  },
);

UIDatePicker.displayName = 'UIDatePicker';
