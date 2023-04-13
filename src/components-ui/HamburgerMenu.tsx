/** @format */

import { FC, useState } from 'react';

import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

// #region ::: STYLED
const pulse = keyframes`
  0% {
    width:  0;
  }
  100% {
    width: 240px ;
  }
;`;

const StyledMenuIcon = styled.div({
  width: '40px',
  cursor: 'pointer',
  marginRight: '32px',
});

const StyledDropdownMenu = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const StyledWrapperSideNavbar = styled.div({
  backgroundColor: '#001023',
  height: '100%',
  width: '100%',
  left: 0,
  opacity: 0.5,
  top: 0,
  transition: 'all .45s ease',
  position: 'fixed',
  cursor: 'pointer',
});

const StyledSideNavbar = styled.div({
  backgroundColor: '#171c25',
  bottom: 0,
  height: '100%',
  right: 0,
  top: 0,
  width: '240px',
  animation: `${pulse} 0.1s alternate linear`,
  zIndex: 5,
  padding: '5rem',
  overflow: 'hidden',
  display: 'flex',
  flexFlow: 'column',
  position: 'fixed',
});

const StyledSideNavbarLink = styled.div({
  paddingTop: '32px',
  fontSize: '2rem',
  color: '#BABABA',
  transition: '0.3s',
  ':hover': {
    color: 'white',
  },
  fontWeight: '500',
  position: 'relative',
});

const StyledSideNavbarCloseButton = styled.button({
  position: 'absolute',
  top: '24px',
  right: '56px',
  fontSize: '64px',
  background: 'none',
  border: 'none',
  color: '#a0b3d7',
});

const StyledMenuInfo = styled.p({
  fontSize: '1.3rem',
  fontWeight: '500',
  color: '#BABABA',
});

// #endregion
export interface Props {
  firstContent: string;
  secondContent: string;
  thirdContent: string;
}

export const HamburgerMenu: FC<Props> = ({ firstContent, secondContent, thirdContent }): JSX.Element => {
  const [isOpenSideNavbar, setIsOpenSideNavbar] = useState(false);

  const toggleSideNavbar = () => {
    setIsOpenSideNavbar(!isOpenSideNavbar);
  };

  return (
    <>
      <StyledDropdownMenu>
        <StyledMenuIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#a0b3d7"
            className="w-6 h-6"
            onClick={toggleSideNavbar}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        </StyledMenuIcon>
      </StyledDropdownMenu>
      {isOpenSideNavbar && (
        <>
          <StyledSideNavbar>
            <StyledSideNavbarCloseButton onClick={toggleSideNavbar}>&times;</StyledSideNavbarCloseButton>
            <StyledMenuInfo>Menu</StyledMenuInfo>
            <StyledSideNavbarLink onClick={toggleSideNavbar}>{firstContent}</StyledSideNavbarLink>
            <StyledSideNavbarLink onClick={toggleSideNavbar}>{secondContent}</StyledSideNavbarLink>
            <StyledSideNavbarLink onClick={toggleSideNavbar}>{thirdContent}</StyledSideNavbarLink>
          </StyledSideNavbar>
          <StyledWrapperSideNavbar onClick={toggleSideNavbar} />
        </>
      )}
    </>
  );
};
