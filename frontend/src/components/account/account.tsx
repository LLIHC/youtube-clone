import React from 'react';

import { useRecoilValue } from 'recoil';

import { isLoginState } from '../../state/account/login';
import AvatarMenuButton from './avatarMenu';
import { LoginButton } from './login';

function AccountButton() {
  const isLogin = useRecoilValue(isLoginState);
  return (
    <>
      {isLogin ? (<AvatarMenuButton />) : (<LoginButton />)}
    </>
  );
}

export default AccountButton;
