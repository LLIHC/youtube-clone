import React from 'react';

import Button from '@mui/material/Button';
import { useGoogleLogin } from 'react-google-login';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { loggedInState } from '../state/login';

const clientId = '986704124267-8p8q17fs47f0htp7s686suvu21rmdmf2.apps.googleusercontent.com';


function GoogleLoginBtn() {
  const setLoggedIn = useSetRecoilState(loggedInState);

  const onSuccess = async (response: any) => {
    const { googleId, profileObj: { email, name } } = response;

    // TODO: 상태정보 저장
    console.log(
      { googleId, profileObj: { email, name } },
    );

    setLoggedIn(true);
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
    },
  );

  return (
    <Button color="inherit" sx={{ padding: '0px' }} onClick={signIn}>
      Login
    </Button>
  );
}


function GoogleLoginComponent() {
  const loggedIn = useRecoilValue(loggedInState);

  return (
    <GoogleLoginBtn />
  );
}

export default GoogleLoginComponent;