import { useState } from 'react'
import './css/App.css'
import AddUser from './components/AddUser';
import UserList from './components/UserList';

function App() {
  const [userTotal, setUserTotal] = useState(0);
  const [users, setUsers] = useState([]);

  const createUser = (user) => {
    user.numGamesPlayed = 0;
    setUsers([...users, user]);
    setUserTotal(userTotal + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Get Your Game On!</h1>
      </header>

      <AddUser users={users} onAddUser={createUser} />

      {userTotal > 0 ? (
        <UserList users={users} />
      ) : ( "" )}
    </div>
  )
}

export default App;
