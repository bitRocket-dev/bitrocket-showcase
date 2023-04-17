/** @format */

import { FC, memo } from 'react';

import styled from '@emotion/styled';

import { UIText } from '../../Text';
import { TSize } from '../helpers/declarations';
import { utilityGetInitials } from '../helpers/getInitialName';
import { utilityGetSizes } from '../helpers/getSize';

// #region ::: PARTIALS
export const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: auto;
`;

interface PropsWrapper {
  borderColor: Props['borderColor'];
  width: number;
  height: number;
}

export const Wrapper = styled.div<PropsWrapper>`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-radius: 50%;
  border: 2px solid ${({ borderColor }: PropsWrapper) => borderColor};
  padding: 2px;
  width: ${({ width }: PropsWrapper) => `${width}px`};
  height: ${({ height }: PropsWrapper) => `${height}px`};
  background-color: white;
`;
// #endregion

export interface Props {
  src?: string;
  username: string;
  size?: TSize;
  borderColor: string;
}

export const Image: FC<Props> = memo(({ src, size = 'md', username, borderColor }): JSX.Element => {
  const initials = utilityGetInitials(username);
  const { width, height } = utilityGetSizes(size);

  return (
    <Wrapper width={width} height={height} borderColor={borderColor}>
      {src ? <Img src={src} /> : <UIText variant="title" text={initials} />}
    </Wrapper>
  );
});
