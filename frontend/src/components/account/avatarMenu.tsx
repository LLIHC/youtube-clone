import React, { MouseEvent, useCallback, useState } from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import AvatarButton from './avatar';
import { LogoutButton } from './login';


export default function AvatarMenuButton() {
  const [anchorElement, setAnchorElement] = useState<EventTarget & Element | null>(null);
  const open = Boolean(anchorElement);

  const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
  }, [setAnchorElement]);
  const handleClose = useCallback(() => {
    setAnchorElement(null);
  }, [setAnchorElement]);

  return (
    <div>
      <AvatarButton onClick={handleClick} open={open} />
      <Menu anchorEl={anchorElement} open={open} onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <MenuItem>
          <LogoutButton />
        </MenuItem>
      </Menu>
    </div>
  );
}