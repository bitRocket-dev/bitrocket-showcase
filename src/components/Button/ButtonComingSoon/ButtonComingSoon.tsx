/** @format */
import { useState } from 'react';

import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

// #region ::: STYLED

const pulse = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
;`;

const StyledButtonContainer = styled.div<{ isHover: boolean }>(({ isHover }) => ({
  position: 'absolute',
  height: '100%',
  left: 0,
  right: 0,
  top: 0,
  width: '100%',
  background:
    'linear-gradient(270deg, #ff5770, #e4428d, #c42da8, #9e16c3, #6501de, #9e16c3, #c42da8, #e4428d, #ff5770)',
  animation: `${pulse} 3s linear infinite`,
  filter: 'blur(17px) contrast(110%) brightness(140%)',
  backgroundSize: '200% 200%',
  border: '1px solid #424242',
  opacity: 1,
  transform: 'scale(0.9) translateZ(0)',
  zIndex: isHover ? 2 : -1,
}));

const StyledButton = styled.button<{ size: Props['size']; isHover: boolean; isCollapsed: boolean }>`
  background-color: #4f57ef;
  border: none;
  border-radius: ${({ isCollapsed }) => (isCollapsed ? '50%' : '2px')};
  padding: ${({ size, isCollapsed }) => (isCollapsed ? '7px 7px' : size === 'lg' ? '8px 12px' : '4px 6px')};
  color: white;
  font-weight: bold;
  font-size: ${({ size, isCollapsed }) => (isCollapsed ? '0px' : size === 'lg' ? '18px' : '13px')};
  cursor: pointer;
  outline: none;
  z-index: 0;
  position: relative;
  transition: 0.2s ease-in-out;
  min-width: ${({ size, isCollapsed }) => (isCollapsed ? '6px' : size === 'lg' ? '140px' : '110px')};
  overflow: hidden;
  &:hover {
    border-radius: 2px;
    transform: scale(1.05);
    transition: 0.2s ease-in-out;
    padding: ${({ isCollapsed }) => (isCollapsed ? '3px 4px' : 'none')};
    min-width: ${({ isCollapsed }) => (isCollapsed ? '110px' : 'none')};
    font-size: ${({ isCollapsed }) => (isCollapsed ? '13px' : 'none')};
  }

  &:before {
    content: '';
    background: linear-gradient(
      270deg,
      #ff5770,
      #e4428d,
      #c42da8,
      #9e16c3,
      #6501de,
      #9e16c3,
      #c42da8,
      #e4428d,
      #ff5770
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 200%;
    z-index: ${({ isHover }) => (isHover ? '1' : '-1')};
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${pulse} 3s linear infinite;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
`;
// #endregion

export interface Props {
  label: string;
  onClick: () => void;
  size?: 'lg' | 'sm';
  isCollapsed?: boolean;
}

export const UIButtonComingSoon = ({ label, onClick, size = 'sm', isCollapsed = false }: Props) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <>
      <StyledButton
        isCollapsed={isCollapsed}
        size={size}
        onClick={onClick}
        isHover={isHover}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {label}
        <span style={{ position: 'absolute', left: 0, right: 0, zIndex: 3 }}>{label}</span>
        {isHover && <StyledButtonContainer isHover={isHover} />}
      </StyledButton>
    </>
  );
};
