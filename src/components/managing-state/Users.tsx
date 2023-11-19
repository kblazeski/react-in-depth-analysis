import { ReactElement, useContext, useState } from 'react';
import './Users.css';
import { User } from '../functional/User';
import { PICTURE_LINK1, PICTURE_LINK2 } from './PictureLinks';
import { LanguageContext } from './context/LanguageProvider';
import { Counter } from './batching/Counter';

interface UserModel {
  name: string;
  age: number;
  pictureLink: string;
}

const calculateAverageYearForUsers = (users: UserModel[]): number => {
  const sumOfAllYears = users.map((item) => item.age).reduce((x, y) => x + y, 0);
  const averageAge = sumOfAllYears / users.length;
  return averageAge;
};

export const Users = (): ReactElement => {
  const { language } = useContext(LanguageContext);

  const [users, setUsers] = useState<UserModel[]>([
    { name: 'John Doe', age: 23, pictureLink: PICTURE_LINK1 },
    { name: 'Jane Doe', age: 34, pictureLink: PICTURE_LINK2 }
  ]);
  const [selectedUserName, setSelectedUserName] = useState<string | undefined>();

  const averageAge = calculateAverageYearForUsers(users);

  const setUserAgeTo19 = (userName: string) => {
    const user = users.find((user) => user.name === userName);
    if (user) {
      user.age = 19;
    }
    setUsers([...users]);
    setSelectedUserName(user?.name);
  };

  return (
    <>
      <div>Language: {language}</div>
      <div>Selected user name: {selectedUserName}</div>
      <div>
        Users average year: <b>{averageAge}</b>
      </div>
      <div className='users'>
        {users.map((user) => {
          return (
            <User
              name={user.name}
              age={user.age}
              pictureLink={user.pictureLink}
              setUserAgeTo19={setUserAgeTo19}
            />
          );
        })}
      </div>
    </>
  );
};
