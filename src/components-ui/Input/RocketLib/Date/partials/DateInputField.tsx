/** @format */

import styled from '@emotion/styled';

interface Props {
  isFilter: boolean;
  hasBackground?: boolean;
}

export const DateInputField = styled.input<Props>`
  height: 30px;
  padding: 10px;
  appearance: none;
  border: ${({ isFilter }): string => (!isFilter ? '1px solid grey' : '1px solid black')};
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  width: 100%;
  position: relative;
  color: grey;
  background-color: black;
`;
