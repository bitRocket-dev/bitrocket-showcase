/** @format */

import { FC } from 'react';

import styled from '@emotion/styled';

const StyledButton = styled.button({
  textTransform: 'uppercase',
  fontWeight: 300,
  padding: '0px 15px',
  fontSize: 14,
  position: 'relative',
  background: '#4f57ef',
  height: 40,
  borderRadius: 50,
  border: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  color: '#ffff',
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.8,
  },
});

export interface Props {
  text: string;
}

export const ButtonCTACosmocode: FC<Props> = ({ text }): JSX.Element => {
  return <StyledButton>{text}</StyledButton>;
};
