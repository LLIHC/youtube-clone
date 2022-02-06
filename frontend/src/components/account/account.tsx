import React from 'react';

import { useRecoilValue } from 'recoil';

import { isLoginState } from '../../state/account/login';
import { LoginButton, LogoutButton } from './login';


function AccountButton() {
  const isLogin = useRecoilValue(isLoginState);
  return (
    <>
      {isLogin ? (<LogoutButton />) : (<LoginButton />)}
    </>
  );
}

export default AccountButton;
