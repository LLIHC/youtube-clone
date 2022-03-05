import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import { useRecoilValue } from 'recoil';

import { sampleVideoIdsAtom } from '../state';
import VideoGrid from './grid/videoGrid';


const MAX_VIDEO_IDS = 30;


function RangeRemainder10(start: number, end: number) {
  const full: number[] = Array.from(
    Array(end - start + 1).keys(),
  );
  return full.map((_, idx) => (start + idx) % 10);
}


function fetchVideoIds(cursor: number, count: number = 4) {
  const sampleVideoIds = useRecoilValue(sampleVideoIdsAtom);

  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [nextCursor, setNextCursor] = useState(0);
  const [videoIds, setVideoIds] = useState<string[]>([]);

  const send = useCallback(
    async () => {
      await setIsLoading(true);

      await setNextCursor(cursor + count);
      const nextIndex = RangeRemainder10(cursor, cursor + count - 1);
      const nextVideoIds = nextIndex.map(
        index => sampleVideoIds[index],
      );
      setVideoIds(
        (prev) => [...prev, ...nextVideoIds],
      );

      // mock fetching time
      setTimeout(() => setIsLoading(false), 3000);
    }, [cursor, count],
  );

  useEffect(
    () => {
      send();
    }, [cursor, count],
  );

  useEffect(
    () => {
      setHasMore(nextCursor < MAX_VIDEO_IDS);
    }, [setHasMore, nextCursor],
  );

  return { videoIds, isLoading, hasMore, nextCursor };
}


export default function Home() {
  const [cursor, setCursor] = useState(1);
  const { videoIds, isLoading, hasMore, nextCursor } = fetchVideoIds(cursor);

  const observer = useRef<IntersectionObserver | undefined>();
  const lastElementRef = useCallback(
    (node) => {
      if (isLoading) return;

      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setCursor(nextCursor);
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore, nextCursor],
  );

  return (
    <div>
      <VideoGrid videoIds={videoIds} lastElementRef={lastElementRef} />
      <div>{isLoading && 'Loading...'}</div>
    </div>
  );
}
