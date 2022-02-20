import React, { useCallback, useMemo, useState } from 'react';

import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Toolbar from '@mui/material/Toolbar';

import AccountButton from './account/account';
import Drawer from './drawer';
import LogoButton from './logo-button';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#fafafa',
  color: '#212121',
  display: 'block',
  height: '56px',
  width: '100%',
  zIndex: 1400,
  top: 0,
});

const StyledToolbar = styled(Toolbar)({
  height: '100%',
  padding: '0 16px',
  justifyContent: 'space-between',
});

const SearchInputBase = styled(InputBase)({
  width: '89%',
  height: '40px',
  padding: '0 10px',
  color: '#000',
  border: '1px solid #BEBEBE',
  borderRadius: '2px 0 0 2px',
});

const MenuButton = styled(IconButton)({
  width: '24px',
  height: '24px',
  padding: '8px',
});

const SearchButton = styled(Button)({
  padding: 0,
  height: '40px',
});

const AlignBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export default function Header() {
  const [isDrawerExpanded, setIsDrawerExpand] = useState(true);

  const handleDrawer = useCallback(() => {
    setIsDrawerExpand(!isDrawerExpanded);
  }, [setIsDrawerExpand, isDrawerExpanded]);

  const startItems = useMemo(() => (<AlignBox>
    <MenuButton color="inherit" aria-label="menu" onClick={handleDrawer}>
      <MenuIcon />
    </MenuButton>
    <LogoButton />
  </AlignBox>), [handleDrawer]);

  const centerItems = useMemo(() => (<AlignBox>
    <SearchInputBase placeholder="Search" />
    <SearchButton variant="outlined" aria-label="search">
      <SearchIcon />
    </SearchButton>
  </AlignBox>), []);

  const endItems = useMemo(() => (<AlignBox>
    <AccountButton />
  </AlignBox>), []);

  const startItems = useMemo(() => (<AlignBox>
    <MenuButton color="inherit" aria-label="menu" onClick={handleDrawer}>
      <MenuIcon />
    </MenuButton>
    <LogoButton />
  </AlignBox>), [handleDrawer]);

  const centerItems = useMemo(() => (<AlignBox>
    <SearchInputBase placeholder="Search" />
    <SearchButton variant="outlined" aria-label="search">
      <SearchIcon />
    </SearchButton>
  </AlignBox>), []);

  const endItems = useMemo(() => (<AlignBox>
    <AccountButton />
  </AlignBox>), []);

  return (
    <Box>
    <StyledAppBar>
      <StyledToolbar variant="dense">
        {startItems}
        {centerItems}
        {endItems}
      </StyledToolbar>
    </StyledAppBar>
    <Drawer isExpanded={isDrawerExpanded}/>
  </Box>
  );
}
