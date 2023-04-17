/** @format */

import { SyntheticEvent, FC, memo } from 'react';

import styled from '@emotion/styled';

import { TSize } from '../../../utils/declaration';
import { utilityGetFontSize } from '../../../utils/utilityGetFontSize';

interface PropsWrapper {
  disabled?: boolean;
  variant?: 'primary';
  dataCy?: string;
}

const Button = styled.button<PropsWrapper>`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: ${({ disabled }: PropsWrapper) => (disabled ? 'not-allowed' : 'pointer')};
  font-weight: 700;
  border: none;
  border-radius: 16px;
  ${({ variant }: PropsWrapper) =>
    variant === 'primary' &&
    `background-color: black;
    color: white;
    `};
  &:hover {
    background-color: ${({ disabled }: PropsWrapper) => (disabled ? 'grey' : 'black')};
    color: red;
  }
`;

interface PropsShared {
  dataCy?: string;
  disabled?: boolean;
  variant?: 'primary';
  onClick?: (event: SyntheticEvent) => void;
  size?: TSize;
}

interface PropsWithIcon extends PropsShared {
  text?: PropsWithText['text'];
}

interface PropsWithText extends PropsShared {
  text: string;
}

export type Props = PropsWithIcon | PropsWithText;

export const UIButton: FC<Props> = memo(
  ({ disabled, variant, onClick, text, size = 'md', dataCy = 'UIButton' }): JSX.Element => {
    const { fontSize } = utilityGetFontSize(size);
    return (
      <Button disabled={disabled} variant={variant} onClick={onClick} data-cy={dataCy}>
        {text && <span style={{ fontSize: `${fontSize}px` }}>{text}</span>}
      </Button>
    );
  },
);
