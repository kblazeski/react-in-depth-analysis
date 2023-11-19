import React, { ReactElement } from 'react';
import { User } from '../functional/User';

export class Users extends React.Component {
  render(): ReactElement {
    return (
      <div className='users'>
        <User
          name='John Doe'
          age={31}
          pictureLink='https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg'
          setUserAgeTo19={() => {}}
        />
        <User
          name='Jane Doe'
          age={34}
          pictureLink='https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png'
          setUserAgeTo19={() => {}}
        />
      </div>
    );
  }
}
