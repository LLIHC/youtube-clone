import React from 'react';

import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const StyledAppBar = styled(AppBar)({
  backgroundColor: '#fafafa',
  color: '#212121',
  display: 'block',
  height: '56px',
  width: '100%',
});

const StyledToolbar = styled(Toolbar)({
  height: '100%',
});

export default function Header() {
  return (
    <StyledAppBar>
      <StyledToolbar variant="dense">
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div">
            Youtube
          </Typography>
        </Box>
        <Button color="inherit" sx={{ padding: '0px' }}>
          Login
        </Button>
      </StyledToolbar>
    </StyledAppBar>
  );
}
