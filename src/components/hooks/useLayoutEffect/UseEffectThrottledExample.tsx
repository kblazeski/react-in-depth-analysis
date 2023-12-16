import { useEffect, useState } from "react";

export const UseEffectThrottledExample = () => {
  const [effectFinished, setEffectFinished] = useState<string>('initial');

  useEffect(() => {
    console.log('effect ran');
    setEffectFinished('finished');
  }, []);


  // throttling
  for (let i = 0; i < 1000000000; i++) {}

  console.log('throttle finished');
  return (
    <>
      <div>
        UseEffect: <span>{effectFinished}</span>
      </div>
    </>
  );
};



