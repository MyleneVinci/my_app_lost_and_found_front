import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import LogIn from './components/logIn/LogIn';
import SignIn from './components/signIn/SignIn';
import ProfileCard from './components/profileCard/LogProfileCard';
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
        <Route path='/accueil' element={<Home />} />
        <Route path='/connexion' element={<LogIn />} />
        <Route path='/inscription' element={<SignIn />} />
        <Route path='/declaration' element={<Declaration />} />
        <Route path='/profil' element={<Profile />} />
        <Route path='/profil/:id' element={<ProfileCard />} />
        <Route path='/enregistrement' element={<Log />} />
        <Route path='/carte' element={<MapRoom />} />
        <Route path='/conversations' element={<Chat />} />
        <Route path='/informations' element={<Infos />} />
      </ Routes>
      </UserProvider>
    </div>
  );
}

export default App;
