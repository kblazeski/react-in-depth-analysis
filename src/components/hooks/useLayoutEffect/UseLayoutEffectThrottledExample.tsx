import { useLayoutEffect, useState } from 'react';

export const UseLayoutEffectThrottledExample = () => {
  const [layoutEffectFinished, setLayoutEffectFinished] = useState<string>('initial');

  useLayoutEffect(() => {
    console.log('layout effect ran');
    setLayoutEffectFinished('finished');
  }, []);

  // throttling
  for (let i = 0; i < 1000000000; i++) {}

  console.log('throttle finished');
  return (
    <>
      <div>
        UseLayoutEffect: <span>{layoutEffectFinished}</span>
      </div>
    </>
  );
};


