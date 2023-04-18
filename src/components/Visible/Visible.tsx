/** @format */

import { FC, memo } from 'react';

import styled from '@emotion/styled';

// #region ::: PARTIALS
const WrapperDesktop = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: inherit;
  }
`;

const WrapperMobile = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
// #endregion

export interface Props {
  children: JSX.Element;
  type: 'desktop' | 'mobile';
}

export const UIVisible: FC<Props> = memo(({ children, type }): JSX.Element => {
  return type === 'desktop' ? <WrapperDesktop>{children}</WrapperDesktop> : <WrapperMobile>{children}</WrapperMobile>;
});

UIVisible.displayName = 'UIVisible';
