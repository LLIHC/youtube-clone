import React from 'react';

import styled from '@emotion/styled';
import Button, { ButtonProps } from '@mui/material/Button';
import { useRecoilValue } from 'recoil';

import { avatarImageUrl } from '../../state/account/avatar';


const StyledButton = styled(Button)({
  height: '38px',
  minWidth: '48px',
  padding: '1px 6px',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: '#FFF',
  },
});


interface StyledImgProps {
  open: boolean;
}


const StyledImg = styled('img')({
  height: '32px',
  width: '32px',
  borderRadius: '70%',
}, ({ open }: StyledImgProps) => ({
  border: open ? '0px' : '1px solid blue',
}));


interface AvatarButtonProps extends ButtonProps {
  open: boolean;
}


export default function AvatarButton({ open, ...restProps }: AvatarButtonProps) {
  const imageUrl = useRecoilValue(avatarImageUrl);

  return (
    <StyledButton disableRipple color='inherit' {...restProps} >
      <StyledImg src={imageUrl} open={open} />
    </StyledButton>
  );
}
