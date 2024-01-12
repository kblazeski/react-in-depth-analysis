import { NAMES } from './Names';

export interface UserModel {
  name: string;
  age: number;
}

export const filterUsersByName = (users: UserModel[], searchUserName: string) => {
  //   for (let i = 0; i < 1000000000; i++) {}

  return users.filter((item) => item.name.toLowerCase().includes(searchUserName.toLowerCase()));
};

export const getUsers = () => {
  const users: UserModel[] = [];
  for (let i = 0; i < NAMES.length; i++) {
    const user: UserModel = {
      name: NAMES[i],
      age: randomIntFromInterval(18, 60)
    };
    i = i + 1 + 5;
    users.push(user);
  }
  return users;
};

const randomIntFromInterval = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
