import React from 'react';
import {User} from '../../types.ts';
import UserItem from './UserItem.tsx';

interface UserProps {
  userItem: User[];
}

const Users: React.FC<UserProps> = ({userItem}) => {
  return (
    <>
      <h4>Users</h4>
      {userItem.map((user) => (
        <UserItem key={user.id} users={user} />
      ))}
    </>
  );
};

export default Users;