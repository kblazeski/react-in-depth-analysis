import { ReactElement, memo } from 'react';
import './User.css';

interface Props {
  name: string;
  age: number;
  pictureLink: string;
  setUserAgeTo19: (userName: string) => void;
}

export const User = ({ name, pictureLink, age, setUserAgeTo19 }: Props): ReactElement => {

  return (
    <div>
      {age > 18 ? (
        <div className='user'>
          <p>
            Name: <b>{name}</b>
          </p>
          <p>
            Age: <b>{age}</b>
          </p>
          <img src={pictureLink} width='100px' height='100px' />
          <button type='button' onClick={() => setUserAgeTo19(name)}>
            Set age to 19
          </button>
        </div>
      ) : null}
    </div>
  );
};