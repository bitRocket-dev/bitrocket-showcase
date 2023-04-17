/** @format */

import styled from '@emotion/styled';

export const HiddenCheckbox = styled.input(
  {
    border: 0,
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px',
  },
  {
    attrs: { type: 'checkbox' },
  },
);
