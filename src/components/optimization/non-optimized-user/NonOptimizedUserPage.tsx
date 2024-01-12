import { ReactElement, useCallback, useMemo, useState } from 'react';
import { UserModel, filterUsersByName, getUsers } from '../UserService';
import '../UserPage.css';
import { NonOptimizedUserList } from './NonOptimizedUserList';

export const NonOptimizedUserPage = (): ReactElement => {
  const [users, setUsers] = useState<UserModel[]>(getUsers());
  const [selectedUser, setSelectedUser] = useState<UserModel>();
  const [searchUserName, setSearchUserName] = useState<string>('');

  const filteredUsers = filterUsersByName(users, searchUserName);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUserName(event.target.value);
  };

  const changeSelectedUser = (user: UserModel) => {
    setSelectedUser(user);
  };

  return (
    <div className='user-page'>
      <h3>User List</h3>
      <p>
        Selected user: <b>{selectedUser?.name}</b>
      </p>
      <label id='search'>Search by name:</label>
      <br />
      <input id='search' onChange={handleSearch} />
      <NonOptimizedUserList users={filteredUsers} selectUser={changeSelectedUser} />
    </div>
  );
};
