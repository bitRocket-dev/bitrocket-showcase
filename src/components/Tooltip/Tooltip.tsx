/** @format */

import { FC } from 'react';

import styled from '@emotion/styled';

interface PropsStyled {
  orientation: 'left' | 'right' | 'top' | 'bottom';
}

const Tooltip = styled.div<PropsStyled>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  border: solid 1px black;
  min-height: 40px;
  color: black;
  background: grey;
  border-radius: 5px;
  :after {
    ${({ orientation }: PropsStyled) =>
      orientation === 'left' &&
      `content: ' ';
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -8px;
    border-width: 8px 11px;
    border-style: solid;
    border-color: transparent black transparent transparent`};

    ${({ orientation }: PropsStyled) =>
      orientation === 'right' &&
      `content: ' ';
    position: absolute;
    top: 50%;
    left: 100%;
    margin-top: -8px;
    border-width: 8px 11px;
    border-style: solid;
    border-color: transparent  transparent transparent black`}

    ${({ orientation }: PropsStyled) =>
      orientation === 'bottom' &&
      `content: ' ';
    position: absolute;
    top: 100%;
    border-width: 8px 11px;
    border-style: solid;
    border-color: black transparent  transparent transparent `}

${({ orientation }: PropsStyled) =>
      orientation === 'top' &&
      `content: ' ';
    position: fixed;    
    top: -1px;
    border-width: 8px 11px;
    border-style: solid;
    border-color: transparent  transparent black transparent `}
  }
`;

export interface Props {
  text?: string;
  orientation?: 'left' | 'right' | 'top' | 'bottom';
}

export const UITooltip: FC<Props> = ({ text, orientation = 'left' }): JSX.Element => {
  return <Tooltip orientation={orientation}>{text}</Tooltip>;
};
