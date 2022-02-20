import React, { useMemo, useState } from 'react';

import styled from '@emotion/styled';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

import AccountButton from './account/account';
import LogoButton from './logo-button';
const drawerWidth = 240;

const StyledAppBar = styled(AppBar)({
  position: 'fixed',
  backgroundColor: '#fafafa',
  color: '#212121',
  display: 'block',
  height: '56px',
  width: '100%',
  top: 0,
  zIndex: '1400',
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
interface StyledDrawerProps {
  drawerOpened : boolean,
}

const StyledDrawer = styled(MuiDrawer)({
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  anchor: 'left',
}, ({ drawerOpened }: StyledDrawerProps)=> ({
  ...(drawerOpened && {
    width: 60,
    '& .MuiDrawer-paper': { width: 60 },
  }),
  ...(!drawerOpened && {
    width: 120,
    '& .MuiDrawer-paper': 120,
  }),
}));
export default function Header() {
  const startItems = useMemo(() => (<AlignBox>
    <MenuButton color="inherit" aria-label="menu">
      <MenuIcon />
    </MenuButton>
    <LogoButton />
  </AlignBox>), []);

  const centerItems = useMemo(() => (<AlignBox>
    <SearchInputBase placeholder="Search" />
    <SearchButton variant="outlined" aria-label="search">
      <SearchIcon />
    </SearchButton>
  </AlignBox>), []);

  const endItems = useMemo(() => (<AlignBox>
    <AccountButton />
  </AlignBox>), []);
  const [opened, setOpen] = useState(true);

  const handleDrawer = () => {
    setOpen(!opened);
  };

  return (
    <Box>
    <StyledAppBar>
      <StyledToolbar variant="dense">
        {startItems}
        {centerItems}
        {endItems}
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
        <Button color="inherit" sx={{ padding: '0px' }}>
          Login
        </Button>
      </StyledToolbar>
    </StyledAppBar>
    <StyledDrawer variant="permanent" drawerOpened={opened}>
    <Toolbar />
    <List>
      {['홈', '탐색', '구독', 'originals'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {['홈', '탐색', '구독', 'originals'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </StyledDrawer>
  </Box>
  );
}
