/** @format */

import { ChangeEvent, FC } from 'react';

import styled from '@emotion/styled/macro';

//#region ::: PARTIALS
const Label = styled.label(
  ({ disabled }: { disabled?: boolean }) => `
  display: inline-block;
  vertical-align: middle;
  width: fit-content;
  & :hover {
    ${!disabled && 'background: white;'}
  }
`,
);

const Icon = styled.div`
  background: #eee;
  border-radius: 20px;
  height: 10px;
  width: 10px;
  ${Label} & :hover {
    background: #eee;
  }
`;

const HiddenRadio = styled.input(
  {
    border: 0,
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px',
  },
  {
    attrs: {
      type: 'checkbox',
    },
  },
);

const StyledRadio = styled.div(
  ({ disabled, checked }: { disabled?: boolean; checked: boolean }) => `
  cursor: ${disabled ? 'not-allowed' : 'pointer'};
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border: 1px solid ${disabled ? 'grey' : '#eee'};
  border-radius: 20px;
  transition: all 150ms;
  background: ${disabled ? 'grey' : '#2196F3'};
  &:hover {
    background: ${checked ? 'grey' : '#2196F3'};
    ${disabled && 'background: grey'};
  }
  ${HiddenRadio}:focus + & {
    box-shadow: 0 0 0 1px black;
  }
  ${Icon} {
    visibility: ${(props: { checked: boolean }) => (props.checked ? 'visible' : 'hidden')};
  }
`,
);

//#endregion

export interface Props {
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export const UIRadioButton: FC<Props> = ({ checked, onChange, disabled }): JSX.Element => (
  <Label>
    <HiddenRadio checked={disabled ? false : checked} onChange={onChange} disabled={disabled} />
    <StyledRadio checked={disabled ? false : checked} disabled={disabled}>
      <Icon>
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledRadio>
  </Label>
);

UIRadioButton.displayName = 'UIRadioButton';
