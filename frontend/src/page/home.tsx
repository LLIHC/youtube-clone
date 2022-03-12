import React, { useMemo } from 'react';

import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import { useRecoilValue } from 'recoil';

import { sampleVideoIdsAtom } from '../state';
import VideoCard from './card/videoCard';
import ChipWrapper from './chip_wrapper';

interface StyledGridProps {
  nrow: number;
  imargin: number;
}

const StyledGrid = styled(Grid)({
  position: 'relative',
  marginTop: '70px',
  marginBottom: '40px',
}, ({ nrow, imargin }: StyledGridProps) => ({
  marginLeft: `calc(${imargin}vw/2)`,
  marginRight: `calc(${imargin}vw/2)`,
  width: `calc(${nrow}/2 + ${imargin} - 0.01px)`,
}));

export default function Home() {
  const videoIds = useRecoilValue(sampleVideoIdsAtom);

  const videoGrid = useMemo(() => {
    return videoIds.map((videoId, index) => (
      <StyledGrid item key={index} nrow={4} imargin={2}>
        <VideoCard key={videoId} videoId={videoId} />
      </StyledGrid>
    ));
  }, [videoIds]);

  return (
    <Grid container spacing={2}>
      <ChipWrapper />
      {videoGrid}
    </Grid>
  );
}
