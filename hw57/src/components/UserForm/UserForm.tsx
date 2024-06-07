import React, {useState} from 'react';
import {User, UserMutation} from '../../types.ts';

interface UserFormProps {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<UserFormProps> = ({onSubmit}) => {
  const [UserMutation, setUserMutation] = useState<UserMutation>({
    id: '',
    name: '',
    email: '',
    active: false,
    role: 'user',
  });

  const changeUser = (event: React.ChangeEvent<HTMLInputElement| HTMLSelectElement>) => {
    setUserMutation((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  const checkedBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserMutation((prev) => ({
      ...prev,
      [event.target.name]: event.target.checked
    }));
  };

  const onFormSubmit =(event:React.FormEvent) => {
    event.preventDefault();

    onSubmit({
      ...UserMutation,
      id: Math.random().toString(),
    });
    setUserMutation({
      id: '',
      name: '',
      email: '',
      active: false,
      role: 'user',
    });
  };
  return (
    <form onSubmit={onFormSubmit}>
      <h4 className="fs-2 mb-5">Add new User</h4>
      <div className="form-group mb-4">
        <label htmlFor="name" className="form-label mb-2">Name</label>
        <input
          required
          type="text"
          name="name"
          id="name"
          placeholder="Enter name"
          className="form-control px-2"
          style={{cursor: "pointer"}}
          onChange={changeUser}
          value={UserMutation.name}
        />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="email" className="mb-2">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          className="form-control px-2"
          style={{cursor: "pointer"}}
          onChange={changeUser}
          value={UserMutation.email}
        />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="active" className="form-check-label mb-2">Active</label>
        <input
          type="checkbox"
          name="active"
          id="active"
          className="form-check-input ms-2"
          style={{cursor: "pointer"}}
          onChange={checkedBox}
          checked={UserMutation.active}
        />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="role" className="mb-2">Role</label>
        <select className="form-select" id="role" style={{cursor: "pointer"}} onChange={changeUser}
                value={UserMutation.role}>
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit" className="mt-3 btn btn-outline-primary">Create User</button>
    </form>
  );
};

export default UserForm;