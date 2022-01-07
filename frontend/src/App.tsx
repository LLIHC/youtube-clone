import styled from '@emotion/styled';
import React from 'react';

const Root = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  overflow: 'hidden',
  height: '100vh',
  width: '100vw',
});

export default function App() {
  return <Root />;
}
