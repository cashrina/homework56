import React from 'react';
import {User} from '../../types.ts';

interface UserItemProps {
  userItem: User;
}

const UserItem: React.FC<UserItemProps> = ({userItem}) => {
  return (
    <div className="card mb-2">
      <div className="col-sm-8 ps-2">
        <h5 className="card-title">{userItem.name}</h5>
        <p className="card-text small">{userItem.email}</p>
        <p className="card-text">{userItem.active} </p>
        <p className="card-text">{userItem.role} </p>
      </div>
    </div>
  );
};
  export default UserItem;