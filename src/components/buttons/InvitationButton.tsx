/** @format */

// #region ::: STYLED

import styled from '@emotion/styled';

const StyledInvitationLabel = styled.span({
  padding: '0px 15px',
  fontSize: 14,
  position: 'relative',
  background: '#4f57ef',
  height: 40,
  borderRadius: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  color: '#ffff',
  width: '128px',
  fontFamily: "'Poppins', sans-serif",
  '&:hover': {
    opacity: 0.8,
  },
});

// #endregion
const InvitationButton = () => {
  return <StyledInvitationLabel>Invita un amico</StyledInvitationLabel>;
};

export default InvitationButton;
