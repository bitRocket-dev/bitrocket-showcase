/** @format */

<<<<<<< HEAD
// #region ::: IMPORT
import styled from '@emotion/styled';

// #endregion

=======
import styled from '@emotion/styled';

>>>>>>> 7594675 (feat: added time picker component from rocket lib to storybook)
interface Props {
  isFilter: boolean;
  hasBackground?: boolean;
}

export const DateInputField = styled.input<Props>`
  height: 30px;
  padding: 10px;
  appearance: none;
<<<<<<< HEAD
  border: ${({ isFilter }): string => (!isFilter ? '1px solid grey' : '1px solid black')};
=======
  border: ${({ isFilter }): string => (!isFilter ? '1px solid black' : '1px solid grey')};
>>>>>>> 7594675 (feat: added time picker component from rocket lib to storybook)
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  width: 100%;
  position: relative;
<<<<<<< HEAD
  color: grey;
  background-color: black;
=======
  color: brey;
  background-color: grey;
>>>>>>> 7594675 (feat: added time picker component from rocket lib to storybook)
`;
