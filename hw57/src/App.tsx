import UserForm from './components/UserForm/UserForm.tsx';
import {useState} from 'react';
import {User} from './types.ts';
import Users from './components/Users/Users.tsx';

const App = () => {
const [user, setUser] = useState<User[]>([
  { id: '1', name: 'John Doe', email: 'john@example.com', active: true, role: 'user' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', active: false, role: 'editor' },
  { id: '3', name: 'Admin Adminson', email: 'admin@example.com', active: true, role: 'administrator' },
]);

  const addUser = (item: User) => {
    setUser((prev)=> [...prev, item]);
  };

  return (
    <div className="container" style={{ fontFamily: "Oswald"}}>
      <div className="row mt-2">
        <div className="col-4 mx-4">
          <UserForm onSubmit={addUser} />
        </div>
        <div className="col-4">
          <Users userItem = {user} />
        </div>
      </div>
    </div>
  )
};

export default App
