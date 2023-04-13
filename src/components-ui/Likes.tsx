/** @format */

import { useState } from 'react';

import styled from '@emotion/styled';

import srcLikeFilled from '../assets/icons/like_filled.svg';
import srcLikeTransparent from '../assets/icons/like_transparent.svg';

//#region ::: STYLED

const StyledContainerLike = styled.div({
  display: 'flex',
  maxWidth: 300,
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexDirection: 'column',
});

//#endregion

export interface Props {
  disabled?: boolean;
}

export const Likes = ({ disabled }: Props) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const onClickLike = () => setIsLiked(!isLiked);

  return (
    <StyledContainerLike>
      <div style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}>
        <img
          onClick={disabled ? () => {} : onClickLike}
          src={isLiked ? srcLikeFilled : srcLikeTransparent}
          alt=""
          width={30}
          height={30}
        />
      </div>
    </StyledContainerLike>
  );
};
