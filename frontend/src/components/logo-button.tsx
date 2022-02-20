import React, { useCallback } from 'react';

import styled from '@emotion/styled';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as Logo } from '../assets/logo-icon.svg';

const StyledButton = styled(IconButton)({
  padding: 0,
});

const LogoIcon = styled(Icon)({
  width: '90px',
  height: '20px',
  padding: '18px 14px 18px 16px',
});

export default function LogoButton() {
  const navigate = useNavigate();
  const handleLogoClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <StyledButton color="inherit" aria-label="logo" onClick={handleLogoClick}>
      <LogoIcon>
        <Logo />
      </LogoIcon>
    </StyledButton>
  );
}