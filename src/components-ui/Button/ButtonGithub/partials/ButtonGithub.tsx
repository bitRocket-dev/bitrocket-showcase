/** @format */

import styled from '@emotion/styled';

import srcGithHub from '../../../../assets/icons/github.svg';

// #region ::: STYLED
const StyledButtonSignIn = styled.button(({ variant }: { variant: Props['variant'] }) => ({
  backgroundColor: variant === 'primary' ? 'grey' : 'transparent',
  border: '2px solid #fff',
  color: variant === 'primary' ? 'black' : '#fff',
  borderRadius: '50px',
  height: '40px',
  display: 'flex',
  justifyContent: variant === 'primary' ? 'space-between' : 'center',
  alignItems: 'center',
  padding: '5px 15px 5px 5px',
  cursor: 'pointer',
  minWidth: 200,
  maxWidth: 500,
  '&:hover': {
    opacity: 0.8,
  },
}));

const StyledIconLogin = styled.img({
  paddingLeft: '8px',
});
// #endregion

interface Props {
  label: string;
  variant?: 'primary' | 'secondary';
}
export const ButtonGithub = ({ label, variant = 'primary' }: Props) => {
  return (
    <StyledButtonSignIn variant={variant}>
      {variant === 'primary' && (
        <StyledIconLogin src={srcGithHub} alt="GitHub Signin" width={24} height={24} style={{ marginRight: 5 }} />
      )}
      <span style={{ fontSize: 14 }}>{label}</span>
    </StyledButtonSignIn>
  );
};
