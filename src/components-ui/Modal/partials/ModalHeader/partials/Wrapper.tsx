/** @format */

import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  padding: 0.5rem 0;
  position: sticky;
  top: 0;
  z-index: 7;
  &:active {
    background: rgba(white, 0.55);
  }
`;
