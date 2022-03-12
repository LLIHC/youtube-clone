import React from 'react';

import styled from '@emotion/styled';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';

const StyledToolbar = styled(Toolbar)({
  backgroundColor: '#fafafa',
  width: '100%',
  borderTop: '1px solid lightgrey',
  borderBottom: '1px solid lightgrey',
  justifyContent: 'space-around',
  position: 'fixed',
  display: 'flex',
});

export default function ChipWrapper() {
  return (
    <StyledToolbar>
      <Stack direction='row' spacing={1} alignItems='center'>
        <Chip label="전체" component="a" variant='outlined' clickable />
        <Chip label="수학" component="a" variant='outlined' clickable />
        <Chip label="스쿼트" component="a" variant='outlined' clickable />
        <Chip label="벤치프레스" component="a" variant='outlined' clickable />
        <Chip label="데드리프트" component="a" variant='outlined' clickable />
      </Stack>  
    </StyledToolbar>
  );
}




