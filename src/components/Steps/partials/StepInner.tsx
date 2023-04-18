/** @format */

import styled from '@emotion/styled';

interface Props {
  isVisible?: boolean;
}

export const StepInner = styled.div<Props>`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  display: ${({ isVisible }: Props) => (isVisible ? 'block' : 'none')};
`;
