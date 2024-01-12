import { FC, ReactElement, memo } from 'react';
import { UserModel } from '../UserService';
import { User } from '../User';
import '../UserList.css';
import { useCountRerender } from '../../../hooks/useCountRerender';

interface Props {
  users: UserModel[];
  selectUser: (user: UserModel) => void;
}

export const UserList: FC<Props> = memo(({ users, selectUser }): ReactElement => {
  const rerenders = useCountRerender();
  return (
    <>
      <p>User list rerenders: {rerenders}</p>
      <div className='user-list'>
        {users.map((item) => {
          return <User selectUser={selectUser} user={item} />;
        })}
      </div>
    </>
  );
});
