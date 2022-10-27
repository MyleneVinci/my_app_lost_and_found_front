import React from 'react';

import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import LogIn from './pages/logIn/LogIn';
import SignIn from './pages/signIn/SignIn';
import Declaration from './pages/declaration/Declaration';
import Profile from './pages/profile/Profile';
import MapRoom from './pages/mapRoom/MapRoom';
import Chat from './pages/chat/Chat';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      {/* <LogIn /> */}
      {/* <SignIn /> */}
      {/* <Declaration /> */}
      <Profile />
    </div>
  );
}

export default App;
