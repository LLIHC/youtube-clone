import React from 'react';

import styled from '@emotion/styled';
import { Route, Routes } from 'react-router-dom';

import Header from './components/header';

const Root = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  height: '100vh',
  width: '100vw',
});

export default function App() {
  return (
    <Root>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
    </Root>
  );
}
