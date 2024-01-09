import { ReactElement, useCallback, useMemo, useState } from 'react';
import { User } from './User';
import { UserModel, filterUsersByName, getUsers } from './UserService';
import './UserList.css';

export const UserList = (): ReactElement => {
  const [users, setUsers] = useState<UserModel[]>(getUsers());
  const [selectedUser, setSelectedUser] = useState<UserModel>();
  const [searchUserName, setSearchUserName] = useState<string>('');

  const filteredUsers = useMemo(
    () => filterUsersByName(users, searchUserName),
    [users, searchUserName]
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUserName(event.target.value);
  };

  const changeSelectedUser = useCallback((user: UserModel) => {
    setSelectedUser(user);
  }, []);

  return (
    <div className='parent'>
      <h3>User List</h3>
      <p>
        Selected user: <b>{selectedUser?.name}</b>
      </p>
      <label id='search'>Search by name:</label>
      <br />
      <input id='search' onChange={handleSearch} />
      <div className='children'>
        {filteredUsers.map((item) => {
          return <User selectUser={changeSelectedUser} user={item} />;
        })}
      </div>
    </div>
  );
};
