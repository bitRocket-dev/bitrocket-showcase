/** @format */
import styled from '@emotion/styled';

interface PropsStyled {
  disabled?: boolean;
}

export const Select = styled.select<PropsStyled>`
  height: 30px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: block;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  cursor: pointer;
  padding: 0 10px;
  width: 100%;
  color: grey;
  background-color: black;
  background-repeat: no-repeat;
  background-position: calc(100% - 0.5em) 50%;
  background-size: 12px;
  transition: all 0.2s ease-in-out;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Arrow-down.svg/1280px-Arrow-down.svg.png');
  border: grey;
  box-sizing: border-box;
  border-radius: 2px;
  ::-ms-expand {
    display: none;
  }
  :active {
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Arrow-down.svg/1280px-Arrow-down.svg.png');
  }
  ${({ disabled }: PropsStyled): string | false | undefined =>
    disabled && 'cursor: not-allowed; background-color:black; color: black '};
`;
