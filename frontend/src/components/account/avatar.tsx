import React from 'react';

import styled from '@emotion/styled';
import Button from '@mui/material/Button';
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


const StyledImg = styled('img')((props: any) => ({
  height: '32px',
  width: '32px',
  borderRadius: '70%',
  border: props.open ? '0px' : '1px solid blue',
}));


export default function AvatarButton(props: any) {
  const imageUrl = useRecoilValue(avatarImageUrl);

  return (
    <StyledButton disableRipple color='inherit' {...props} >
      <StyledImg src={imageUrl} open={props.open} />
    </StyledButton>
  );
}
