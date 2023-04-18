/** @format */

import styled from '@emotion/styled';

const mediaSm = '@media (min-width:760px)';
export const Grow = styled.div`
  flex: 1;
  z-index: 5;
  &.onlyDS {
    display: none;
    ${mediaSm} {
      display: block;
    }
  }
`;
