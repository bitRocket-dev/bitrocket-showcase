/** @format */

import { FC } from 'react';

import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const spin = keyframes`
  from {
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

const Loader = styled.div`
  border: 0.2em solid rgba(0, 0, 0, 0.1);
  border-top: 0.2em solid black;
  border-radius: 50%;
  width: 2.28571429rem;
  height: 2.28571429rem;
  animation: ${spin} 0.6s linear infinite;
`;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Props {}

export const UILoader: FC<Props> = (): JSX.Element => {
  return <Loader />;
};
