import { useState } from 'react';

export const useForceRender = () => {
  const [_state, setState] = useState<boolean>(false);

  const forceRender = () => {
    setState((ps) => !ps);
  };

  return forceRender;
};
