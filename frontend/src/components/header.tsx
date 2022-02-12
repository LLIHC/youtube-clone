import React, { useState, useCallback } from 'react';

import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import CustomDrawer from './drawer';
import AccountButton from './account/account';

const StyledAppBar = styled(AppBar)({
  position: 'fixed',
  backgroundColor: '#fafafa',
  color: '#212121',
  display: 'block',
  height: '56px',
  width: '100%',
  zIndex: '1400',
});

const StyledToolbar = styled(Toolbar)({
  height: '100%',
});

const SearchBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
});

const SearchInputBase = styled(InputBase)({
  width: '89%',
  height: '33px',
  padding: '0 10px',
  color: '#000',
  border: '1px solid #BEBEBE',
  borderRadius: '2px 0 0 2px',
  zIndex: 2,
});

export default function Header() {
  const [expanded, setExpand] = useState(true);

  const handleDrawer = useCallback(() => {
    setExpand(!expanded);
  }, [setExpand, expanded]);

  return (
    <Box>
    <StyledAppBar>
      <StyledToolbar variant="dense">
        <IconButton onClick={handleDrawer} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div">
            Youtube
          </Typography>
        </Box>
        <SearchBox>
          <SearchInputBase placeholder="Search" />
          <Button variant="outlined" startIcon={<SearchIcon />} />
        </SearchBox>
        <AccountButton />
      </StyledToolbar>
    </StyledAppBar>
    <CustomDrawer expanded={expanded}/>
  </Box>
  );
}
