/** @format */

import styled from '@emotion/styled';

interface Props {
  disabled?: boolean;
}

export const Label = styled.label<Props>`
  opacity: ${({ disabled }: Props) => (disabled ? '0.5' : '1')};
  align-items: top;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  text-rendering: optimizelegibility;
  text-size-adjust: 100%;
  touch-action: manipulation;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: black;
  cursor: ${({ disabled }): string => (disabled ? 'not-allowed' : 'pointer')};
`;
