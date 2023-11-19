import { FC, useRef, useState } from 'react';
import { useCountRerender } from '../../hooks/useCountRerender';
import './Child.css';

interface Props {
  number: number;
}

export const Child: FC<Props> = ({ number }) => {
  const numOfRerenders = useCountRerender();
  const [state, setState] = useState<string>('initial state');

  return (
    <div className='child'>
      <span>Child #{number}</span>
      <br />
      Number of rerenders: {numOfRerenders}
      <button onClick={() => setState('resetted state')}>{state}</button>
    </div>
  );
};
