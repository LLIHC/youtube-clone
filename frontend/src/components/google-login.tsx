import React from 'react';

import Button from '@mui/material/Button';
import { useGoogleLogin } from 'react-google-login';

const clientId = '986704124267-8p8q17fs47f0htp7s686suvu21rmdmf2.apps.googleusercontent.com';


function GoogleLoginBtn() {

  const onSuccess = async (response: any) => {
    const { googleId, profileObj: { email, name } } = response;
    console.log(
      { googleId, profileObj: { email, name } },
    );
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
  return (
    <GoogleLoginBtn />
  );
}

export default GoogleLoginComponent;