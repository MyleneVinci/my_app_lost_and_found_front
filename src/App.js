import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import LogIn from './components/logIn/LogIn';
import SignIn from './components/signIn/SignIn';
import LogProfileCard from './components/profileCard/LogProfileCard';
import Declaration from './pages/declaration/Declaration';
import Profile from './pages/profile/Profile';
import Log from './pages/profile/Log';
import MapRoom from './pages/mapRoom/MapRoom';
import Chat from './pages/chat/Chat';
import Infos from './pages/infos/Infos';

import UserProvider from './components/UserProvider';
import './App.css';

function App() {
  return (
    <div className="App">
      <UserProvider>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact  path='/connexion' element={<LogIn />} />
        <Route exact  path='/inscription' element={<SignIn />} />
        <Route exact  path='/declaration' element={<Declaration />} />
        <Route exact  path='/declaration/:id' element={<Declaration />} />
        <Route exact  path='/profil' element={<Profile />} />
        <Route exact  path='/profil/:id' element={<LogProfileCard />} />
        <Route exact  path='/enregistrement' element={<Log />} />
        <Route exact  path='/carte' element={<MapRoom />} />
        <Route exact  path='/conversations' element={<Chat />} />
        <Route exact  path='/informations' element={<Infos />} />
      </ Routes>
      </UserProvider>
    </div>
  );
}

export default App;
