import React from 'react';

import { useRecoilValue } from 'recoil';

import { isLoginState } from '../../state/account/login';
import { AvatarButton } from './avatar';
import { LoginButton } from './login';

function AccountButton() {
  const isLogin = useRecoilValue(isLoginState);
  return (
    <>
      {isLogin ? (<AvatarButton />) : (<LoginButton />)}
    </>
  );
}

export default AccountButton;
