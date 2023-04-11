/** @format */

import { FC } from 'react';

import { Select } from './partials/Select';
import { UIText } from '../Text';

export interface TOption {
  name: string;
  value: number;
}

export interface Props {
  options: TOption[];
  selected?: number | null;
  onChange: (selected: number) => void;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  isRequired?: boolean;
}

export const UISelect: FC<Props> = ({
  options,
  selected,
  onChange,
  placeholder = 'Select',
  disabled,
  label,
  isRequired,
}): JSX.Element => {
  const selectLabel = isRequired ? `${label}*` : label;
  const renderOption = (option: TOption): JSX.Element => (
    <option key={option.value} value={option.value}>
      {option.name}
    </option>
  );

  return (
    <>
      {selectLabel && <UIText text={selectLabel} variant="title" />}
      <Select
        onChange={(event): void => onChange(parseInt(event.target.value, 10))}
        disabled={disabled}
        value={selected ? selected : '0'}
      >
        <option value="0" disabled>
          {placeholder}
        </option>
        {options.map(renderOption)}
      </Select>
    </>
  );
};
