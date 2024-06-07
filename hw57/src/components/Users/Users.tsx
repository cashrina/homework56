import React from 'react';
import {User} from '../../types.ts';
import UserItem from './UserItem.tsx';

interface UserProps {
  userItem: User[];
}

const Users: React.FC<UserProps> = ({userItem}) => {
  return (
    <>
      <h4 className="fs-2 mb-5">Users</h4>
      {userItem.map((user) => (
        <UserItem key={user.id} userItem={user} />
      ))}
    </>
  );
};

export default Users;