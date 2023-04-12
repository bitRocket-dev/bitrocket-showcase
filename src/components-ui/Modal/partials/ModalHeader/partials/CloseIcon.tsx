/** @format */

import { FC } from 'react';

import styled from '@emotion/styled';

const WrapperIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 100%;
  width: 25px;
  height: 25px;
  line-height: 26px;
  text-align: center;
`;

interface Props {
  onClick: () => void;
  children: JSX.Element;
}

export const CloseIcon: FC<Props> = ({ onClick, children }) => <WrapperIcon onClick={onClick}>{children}</WrapperIcon>;
