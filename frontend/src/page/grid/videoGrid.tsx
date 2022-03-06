import React from 'react';

import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';

import VideoCard from '../card/videoCard';


interface StyledGridProps {
  nrow: number;
  imargin: number;
}

const StyledGrid = styled(Grid)({
  position: 'relative',
  marginBottom: '40px',
}, ({ nrow, imargin }: StyledGridProps) => ({
  marginLeft: `calc(${imargin}vw/2)`,
  marginRight: `calc(${imargin}vw/2)`,
  width: `calc(${nrow}/2 + ${imargin} - 0.01px)`,
}));

interface VideoGridProps {
  videoIds: string[],
  lastElementRef: (node: any) => any,
}

export default function VideoGrid({ videoIds, lastElementRef }: VideoGridProps) {
  return (
    <Grid container spacing={2}>
      {videoIds.map((videoId, index) => {
        const isLastElement = videoIds.length === index + 1;
        const elementRef = isLastElement ? lastElementRef : null;
        return (
          <div key={index} ref={elementRef}>
            <StyledGrid item key={index} nrow={4} imargin={2}>
              <VideoCard key={videoId} videoId={videoId} />
            </StyledGrid>
          </div>
        );
      })}
    </Grid>
  );
}