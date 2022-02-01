import React, { useCallback } from 'react';

import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { sampleVideoById } from '../../state/sample-videos';

const StyledCard = styled(Card)({
  maxWidth: 300,
});

interface VideoCardProps {
  videoId: string;
}

export default function VideoCard({ videoId }: VideoCardProps) {
  const navigate = useNavigate();
  // TODO: get information from DB by videoID
  const video = useRecoilValue(sampleVideoById(videoId));
  const videoSrc = `https://www.youtube.com/embed/${video.id}`;
  
  const handleClick = useCallback(() => {
    navigate(`/watch?v=${video.id}`);
  }, [navigate, video.id]);

  return (
    <StyledCard onClick={handleClick}>
      <iframe id={video.id} src={videoSrc}/>
      <CardContent>
        <Typography sx={{ maxWidth: 268 }}>{video.title}</Typography>
      </CardContent>
    </StyledCard>
  );
}
