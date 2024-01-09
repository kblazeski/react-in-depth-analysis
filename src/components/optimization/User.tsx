import { FC, ReactElement, memo } from 'react';
import { UserModel } from './UserService';
import './User.css';
import { useCountRerender } from '../../hooks/useCountRerender';

interface Props {
  user: UserModel;
  selectUser: (user: UserModel) => void;
}

export const User: FC<Props> = memo(({ user, selectUser }): ReactElement => {
  const rerenders = useCountRerender();

  return (
    <div onClick={() => selectUser(user)} className='user'>
      <span>Name: {user.name}</span>
      <span>Age: {user.age}</span>
      <span>Number of rerenders: {rerenders}</span>
      {/* <p>Subordinate: {user.suborindates.map((item) => item.name).join(',')}</p> */}
    </div>
  );
});
