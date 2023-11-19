import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div>Count: {count}</div>
      <button
        onClick={() => {
          // prevCount = 0
          setCount((prevCount) => prevCount + 1);
          // prevCount = 1
          setCount((prevCount) => prevCount + 1);
          // prevCount = 2
          setCount((prevCount) => prevCount + 1);
          // count = 3
        }}
      >
        Increment
      </button>
    </>
  );
};
