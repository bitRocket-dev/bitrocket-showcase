/** @format */

// #region ::: IMPORT
import styled from '@emotion/styled/macro';

import { Icon } from './Icon';
// #endregion

export const StyledCheckbox = styled.div(
  ({ disabled, checked }: { disabled?: boolean; checked: boolean }) => `
  display: grid;
  width: 25px;
  height: 25px;
  border: 1px solid black;
  border-radius: 20px;
  transition: all 150ms;
  background: ${disabled ? ' grey' : ' black'};
  ${Icon} {
    visibility: ${checked ? 'visible' : 'hidden'};
    background-color: grey;
    opacity: ${disabled ? 0.5 : 1};
    border-radius: 20px;
  }
  padding: 3px;
`,
);
