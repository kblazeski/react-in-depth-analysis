import { useRef } from 'react';

export const useCountRerender = (): number => {
  const numOfRenders = useRef<number>(-1);

  numOfRenders.current = numOfRenders.current + 1;

  return numOfRenders.current;
};





