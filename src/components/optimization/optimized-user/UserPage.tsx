import { ReactElement, useCallback, useMemo, useState } from 'react';
import { UserModel, filterUsersByName, getUsers } from '../UserService';
import '../UserPage.css';
import { UserList } from './UserList';

export const UserPage = (): ReactElement => {
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
    <div className='user-page'>
      <h3>User List</h3>
      <p>
        Selected user: <b>{selectedUser?.name}</b>
      </p>
      <label id='search'>Search by name:</label>
      <br />
      <input id='search' onChange={handleSearch} />
      <UserList users={filteredUsers} selectUser={changeSelectedUser} />
    </div>
  );
};
