import React from 'react';

import styled from '@emotion/styled';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

const StyledDrawer = styled(MuiDrawer)({
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  anchor: 'left',
}, ({ expand }: StyledDrawerProps)=> ({
  width: expand ? 60 : 200,
  '& .MuiDrawer-paper': { width: expand ? 60 : 200 },
}));

interface StyledDrawerProps {
  expand : boolean,
}

export default function Drawer({ expand } : StyledDrawerProps) {
  return (
    <StyledDrawer variant="permanent" expand={expand}>
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
      {['Home', 'Exploration', 'Subscriptions', 'whatever'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </StyledDrawer>
  );
}