import React, { useCallback, useMemo, useState } from 'react';

import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Toolbar from '@mui/material/Toolbar';

import { ReactComponent as Logo } from '../assets/logo-icon.svg';
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

const LogoButton = styled(IconButton)({
  padding: 0,
});

const LogoIcon = styled(Icon)({
  width: '90px',
  height: '20px',
  padding: '18px 14px 18px 16px',
});

const SearchButton = styled(Button)({
  padding: 0,
  height: '40px',
});

const Start = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const Center = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const End = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export default function Header() {
  const [isExpanded, setIsExpand] = useState(true);

  const handleDrawer = useCallback(() => {
    setIsExpand(!isExpanded);
  }, [setIsExpand, isExpanded]);
  
  const navigate = useNavigate();
  const handleLogoClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const startItems = useMemo(() => (<Start>
    <MenuButton color="inherit" aria-label="menu" onClick={handleDrawer}>
      <MenuIcon />
    </MenuButton>
    <LogoButton color="inherit" aria-label="logo" onClick={handleLogoClick}>
      <LogoIcon>
        <Logo />
      </LogoIcon>
    </LogoButton>
  </Start>), [handleDrawer]);

  const centerItems = useMemo(() => (<Center>
    <SearchInputBase placeholder="Search" />
    <SearchButton variant="outlined" aria-label="search">
      <SearchIcon />
    </SearchButton>
  </Center>), []);

  const endItems = useMemo(() => (<End>
    <AccountButton />
  </End>), []);

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
    <Drawer expand={isExpanded}/>
  </Box>
  );
}
