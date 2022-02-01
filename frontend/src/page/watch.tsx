import React, { useEffect, useMemo } from 'react';

import _ from 'lodash';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { sampleVideoIdsAtom } from '../state';


export default function Watch() {
  const navigate = useNavigate();
  const location = useLocation();
  const query = queryString.parse(location.search);
  const videoId = _.isArray(query.v) ? query.v[0] : query.v;
  const videoIds = useRecoilValue(sampleVideoIdsAtom);

  const isValidVideoId = useMemo(() => {
    return videoId && videoIds.includes(videoId);
  }, [videoIds, videoId]);

  useEffect(() => {
    if (!isValidVideoId) {
      navigate('/');
    }
  }, [isValidVideoId, navigate]);

  const video = useMemo(() => {
    return <iframe src={`https://www.youtube.com/embed/${videoId}`} />;
  }, [videoId]);

  return <>
    {isValidVideoId ? video : 'Video'}
  </>;
}
