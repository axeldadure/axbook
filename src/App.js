import React, {useState} from 'react';
import userContext from './userContext';

import Main from './components/Main';
import users from './data/users.json';

import './App.css';

function App() {
  
  const usersList = users.users;

  const [user, setUser] = useState(usersList[1]);

  return (
    <userContext.Provider value={user}>
      <Main />
    </userContext.Provider>
  )
}

export default App;
