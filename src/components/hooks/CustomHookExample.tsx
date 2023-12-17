import { useRef, useState } from 'react';
import { useCountRerender } from '../../hooks/useCountRerender';
import { useForceRender } from '../../hooks/useForceRender';

export const CustomHookExample = () => {
  const numOfRerenders = useCountRerender();
  const forceRender = useForceRender();

  return (
    <>
      <div>Num of rerenders: {numOfRerenders}</div>
      <div>
        <button onClick={forceRender}>Trigger rerender</button>
      </div>
    </>
  );
};





