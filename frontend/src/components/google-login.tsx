import React from 'react';

import Button from '@mui/material/Button';
import { useGoogleLogin, useGoogleLogout } from 'react-google-login';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { isLoginState } from '../state/login';

const clientId = '986704124267-8p8q17fs47f0htp7s686suvu21rmdmf2.apps.googleusercontent.com';


function GoogleLoginBtn() {
  const setIsLogin = useSetRecoilState(isLoginState);

  const onSuccess = async (response: any) => {
    // const { googleId, profileObj: { email, name } } = response;
    console.log(response);
    setIsLogin(true);
  };

  const onFailure = (error: any) => {
    console.log(error);
  };

  const { signIn } = useGoogleLogin(
    {
      onSuccess,
      onFailure,
      clientId,
      isSignedIn: true,
      uxMode: 'redirect',
      redirectUri: window.location.href,
      cookiePolicy: 'single_host_origin',
      accessType: 'offline',
    },
  );

  return (
    <Button color="inherit" sx={{ padding: '0px' }} onClick={signIn}>
      Login
    </Button>
  );
}


function GoogleLogoutBtn() {
  const setIsLogin = useSetRecoilState(isLoginState);

  const onLogoutSuccess = () => {
    setIsLogin(false);
  };

  const onFailure = () => {
    console.log('Failure');
  };

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


function GoogleLoginComponent() {
  const isLogin = useRecoilValue(isLoginState);

  return (
    <>
      {isLogin ? (<GoogleLogoutBtn />) : (<GoogleLoginBtn />)}
    </>
  );
}

export default GoogleLoginComponent;