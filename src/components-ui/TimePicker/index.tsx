/** @format */

// #region ::: IMPORT
import { FC, memo, useState } from 'react';

import DatePicker from 'react-datepicker';

import { InputDate } from '../Input/Date';
import { UIText } from '../Text';
import { Field } from '../TimePicker/partials/Field';
// #endregion

interface InputProps {
  label?: string;
  value?: string;
  onClick?: any;
}

const TimePickerCustomInput = memo(
  ({ label, value, onClick }: InputProps): JSX.Element => (
    <Field>
      {label && <UIText text={label} variant="caption" />}
      <InputDate onClick={onClick} value={value} icon="time" isFilter={false} />
    </Field>
  ),
);
TimePickerCustomInput.displayName = 'TimePickerCustomInput';

export interface Props {
  label?: string;
  value?: Date;
  onChange: (event: any) => void;
  fluid?: boolean;
}

export const UITimePicker: FC<Props> = memo(({ label, value, onChange, fluid = false }: Props): JSX.Element => {
  const initialState = value ? value : new Date();
  const [startDate, setStartDate] = useState(initialState);

  const handleChange = (date: Date | null): void => {
    if (date) {
      setStartDate(date);
    }
    onChange(date);
  };

  return (
    <DatePicker
      wrapperClassName={fluid ? 'wrapper' : ''}
      locale="it"
      dateFormat="HH:mm"
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={30}
      timeCaption="Ora"
      selected={startDate}
      onChange={handleChange}
      customInput={<TimePickerCustomInput label={label} />}
    />
  );
});

UITimePicker.displayName = 'UITimePicker';
