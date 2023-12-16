import { useEffect, useLayoutEffect, useState } from 'react';

export const LayoutEffectDifferences = () => {
  const [effectFinished, setEffectFinished] = useState<string>('initial');
  const [layoutEffectFinished, setLayoutEffectFinished] = useState<string>('initial');
  
  useEffect(() => {
    console.log('effect ran');
    setEffectFinished('finished');
  }, []);

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
        UseEffect: <span>{effectFinished}</span>
      </div>

      <div>
        UseLayoutEffect: <span>{layoutEffectFinished}</span>
      </div>
    </>
  );
};
