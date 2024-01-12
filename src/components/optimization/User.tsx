import { FC, ReactElement, memo } from 'react';
import { UserModel } from './UserService';
import './User.css';

interface Props {
  user: UserModel;
  selectUser: (user: UserModel) => void;
}

export const User: FC<Props> = ({ user, selectUser }): ReactElement => {
  return (
    <div onClick={() => selectUser(user)} className='user-optimization'>
      <span>Name: {user.name}</span>
      <br />
      <span>Age: {user.age}</span>
    </div>
  );
};
