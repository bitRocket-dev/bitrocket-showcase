/** @format */

import { FC, memo } from 'react';

import styled from '@emotion/styled';

export const WrapperComment = styled.div`
  width: 100%;
  height: 25rem;
  padding: 1.6rem;
  border: 1px solid #a6a6a6;
  border-radius: 16px;
  background-color: #e6e6e6;
  overflow-y: overlay;
`;

export interface Props {
  text: string;
}

export const UIComment: FC<Props> = memo(
  ({ text }): JSX.Element => (
    <WrapperComment>
      <p>{text}</p>
    </WrapperComment>
  ),
);
