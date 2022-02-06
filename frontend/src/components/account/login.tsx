import React, { useCallback } from 'react';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Button from '@mui/material/Button';
import { useGoogleLogin, useGoogleLogout } from 'react-google-login';
import { useSetRecoilState } from 'recoil';

import { isLoginState } from '../../state/account/login';


declare var process: {
  env: {
    REACT_APP_LOGIN_CLIEND_ID: string
  };
};

const clientId = process.env.REACT_APP_LOGIN_CLIEND_ID;


export function LoginButton() {
  const setIsLogin = useSetRecoilState(isLoginState);

  const onSuccess = useCallback(async (response: any) => {
    // const { googleId, profileObj: { email, name } } = response;
    setIsLogin(true);
  }, [setIsLogin]);

  const onFailure = useCallback((error: any) => {
    console.log(error);
  }, []);

  const { signIn } = useGoogleLogin(
    {
      onSuccess,
      onFailure,
      clientId,
      isSignedIn: true,
      uxMode: 'redirect',
      redirectUri: window.location.origin,
      cookiePolicy: 'single_host_origin',
    },
  );

  return (
    <Button variant="outlined" sx={{ borderRadius: '0px' }} onClick={signIn} startIcon={<AccountCircleOutlinedIcon />} >
      로그인
    </Button>
  );
}


export function LogoutButton() {
  const setIsLogin = useSetRecoilState(isLoginState);

  const onLogoutSuccess = useCallback(() => {
    setIsLogin(false);
  }, [setIsLogin]);

  const onFailure = useCallback(() => {
    console.log('Failure');
  }, []);

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <Button color="inherit" sx={{ padding: '0px' }} onClick={signOut}>
      Logout
    </Button>
  );

}
