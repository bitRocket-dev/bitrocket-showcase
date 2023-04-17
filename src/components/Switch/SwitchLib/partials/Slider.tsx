/** @format */

import styled from '@emotion/styled';

interface PropsStyled {
  isChecked: boolean;
}

export const Slider = styled.span<PropsStyled>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 100px;
  background-color: white;
  border: 1px solid black;
  &:before {
    z-index: 1;
    position: absolute;
    content: '';
    width: 26px;
    height: 26px;
    left: 2px;
    bottom: 1px;
    background-color: ${({ isChecked }: PropsStyled): string | false => (isChecked ? 'black' : 'black')};
    border-radius: 50%;
    ${({ isChecked }: PropsStyled): string | false => isChecked && 'transform: translateX(22px)'};
  }
`;
