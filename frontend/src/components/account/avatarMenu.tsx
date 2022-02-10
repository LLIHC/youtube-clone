import React, { useState, useCallback } from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import AvatarButton from './avatar';
import { LogoutButton } from './login';


export default function AvatarMenuButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = useCallback((event: any) => {
    setAnchorEl(event.currentTarget);
  }, [setAnchorEl]);
  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  return (
    <div>
      <AvatarButton onClick={handleClick} />
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <MenuItem>
          <LogoutButton />
        </MenuItem>
      </Menu>
    </div>
  );
}