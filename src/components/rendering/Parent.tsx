import { useState } from 'react';
import { Child } from './Child';
import { useForceRender } from '../../hooks/useForceRender';
import './Parent.css';

export const Parent = () => {
  const forceRender = useForceRender();

  const [dynamicChildren, setDynamicChildren] = useState<number[]>([]);
  const numOfChildren = 3 + dynamicChildren.length;

  return (
    <div className='parent'>
      <p>Parent</p>
      <button className='button' onClick={forceRender}>
        Trigger rerender
      </button>
      <button
        className='button'
        onClick={() => setDynamicChildren([...dynamicChildren, numOfChildren + 1])}
      >
        Create child
      </button>

      {numOfChildren < 4 ? (
        <div className='children'>
          <Child number={1} />
          <Child number={2} />
          <Child number={3} />
          {dynamicChildren.map((numOfChild) => {
            return <Child number={numOfChild} />;
          })}
        </div>
      ) : (
        <span>
          <Child number={1} />
          <Child number={2} />
          <Child number={3} />
          {dynamicChildren.map((numOfChild) => {
            return <Child number={numOfChild} />;
          })}
        </span>
      )}
    </div>
  );
};
