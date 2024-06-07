import React from 'react';
import {User} from '../../types.ts';
import penguin from '../../assets/penguin.png';

interface UserItemProps {
  userItem: User;
}

const UserItem: React.FC<UserItemProps> = ({userItem}) => {
  return (
    <div className="card mb-3 border-primary shadow-lg">
      <div className="card-body d-flex align-items-center">
        <img src={penguin} alt="Penguin" className="img-fluid me-3" style={{maxWidth: '80px', maxHeight: '80px'}}/>
        <div>
          <h5 className="card-title text-primary">{userItem.name}</h5>
          <p className="card-text small text-secondary">{userItem.email}</p>
          <p className="card-text">{userItem.active}</p>
          <p className="card-text">{userItem.role}</p>
        </div>
      </div>
    </div>
  );
};
export default UserItem;